(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{9442:function(e,o,a){"use strict";a.r(o),a.d(o,{default:function(){return c}});var n=a(5893),i=a(7294),l=a(8810),t=a.n(l),r=a(6261),d=a(3545);function c(e){let{markers:o}=e,a=o.arrayMarker,[l,c]=(0,i.useState)({longitude:null==o?void 0:o.markerInicial[0].longitude,latitude:null==o?void 0:o.markerInicial[0].latitude,zoom:null==o?void 0:o.markerInicial[0].zoom,cooperativeGestures:!0}),s=(0,i.useRef)(),p=()=>{var e;m(!1),null===(e=s.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:null==o?void 0:o.markerInicial[0].zoom})},[u,m]=(0,i.useState)(null),_=()=>{m(!0)},[x,f]=(0,i.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:""}),[h,b]=(0,i.useState)(""),j=e=>{var o;f({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom}),null===(o=s.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},g=o.arrayMarker[o.arrayMarker.length-1];return(0,n.jsxs)("section",{className:t().contenedorMapa,children:[(0,n.jsxs)("div",{className:t().contenedorbloqueIzq,children:[(0,n.jsxs)("div",{className:t().bloqueIzq,children:[(0,n.jsxs)("h2",{children:["Casas de cambio en ",(0,n.jsx)("span",{className:t().linea,children:"Santa Cruz"})]}),(0,n.jsxs)("p",{children:["Tiendas Quickgold: ",(0,n.jsx)("span",{children:g.id})]})]}),(0,n.jsx)("div",{className:t().contenedorTiendas,children:a.map(e=>(0,n.jsxs)("div",{onClick:()=>{_(),j(e)},className:h===e.id&&u?"".concat(t().contenedorInfoTiendaMapa," ").concat(t().contenedorInfoTiendaMapaActivo):" ".concat(t().contenedorInfoTiendaMapa),children:[(0,n.jsx)(r.rU,{onClick:()=>{_(),j(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,n.jsx)("h3",{children:e.nombreTienda})}),(0,n.jsxs)("div",{className:t().tienda,children:[(0,n.jsx)("p",{children:e.direccion}),(0,n.jsxs)("p",{children:["Tel\xe9fono: ",e.telefono]}),(0,n.jsx)(r.rU,{onClick:()=>{_(),j(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,className:t().boton_como_llegar,children:"Ver M\xe1s"})]})]},e.id))})]}),(0,n.jsx)("div",{className:t().bloqueDer,id:"contenedorMapa2",children:(0,n.jsxs)(d.ZP,{onStyleLoad:!0,ref:s,...l,onMove:e=>c(e.viewState),className:t().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,n.jsx)(d.ot,{})," ",(0,n.jsx)(d.$j,{})," ",(0,n.jsx)(d.Pv,{}),(0,n.jsx)("button",{className:t().reset_map,onClick:()=>{p()},children:"Reset Map"}),a.map(e=>(0,n.jsx)(d.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{j(e),_()},children:u?(0,n.jsx)(d.GI,{style:{top:-25,maxWidth:255},longitude:x.longitude,className:"popup",latitude:x.latitude,closeOnClick:!1,anchor:null,onClose:()=>m(!1),children:(0,n.jsxs)("div",{className:t().contenedor_popuop,children:[(0,n.jsx)("p",{className:t().nombre_ciudad_popup,children:x.nombreTienda}),(0,n.jsx)("p",{className:t().nombre_ciudad_popup,children:"Contacto:"}),(0,n.jsx)("a",{title:"Direcci\xf3n",href:x.comoLlegar,rel:"noreferrer",target:"_blank",className:t().direccion_popup,children:x.direccion}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{title:"C\xf3mo llegar",href:x.comoLlegar,rel:"noreferrer",className:t().boton_como_llegar,children:"C\xf3mo llegar"}),(0,n.jsx)("br",{}),(0,n.jsxs)("a",{href:"tel:".concat(x.telefono),className:t().telefono_popup,title:"Tel\xe9fono",children:[(0,n.jsx)("span",{children:"Llamar: "}),x.telefono]})]})}):null},e.id))]})})]})}},8810:function(e){e.exports={contenedorMapa:"mapa_contenedorMapa__dLdL6",bloqueDer:"mapa_bloqueDer__GHHSM",bloqueIzq:"mapa_bloqueIzq__Jf7Mg",linea:"mapa_linea__GsdUv",reset_map:"mapa_reset_map__ZRTtV",contenedorTiendas:"mapa_contenedorTiendas__fkHbY",tienda:"mapa_tienda___tz8V","mapboxgl-popup-close-button":"mapa_mapboxgl-popup-close-button__fOTv9",nombre_ciudad_popup:"mapa_nombre_ciudad_popup__K6KAw",direccion_popup:"mapa_direccion_popup__bV10x",contenedor_popuop:"mapa_contenedor_popuop__xP_9q",telefono_popup:"mapa_telefono_popup__T7WIn",boton_como_llegar:"mapa_boton_como_llegar__e5_t4",contenedorInfoTiendaMapa:"mapa_contenedorInfoTiendaMapa__Gjqid",contenedorInfoTiendaMapaActivo:"mapa_contenedorInfoTiendaMapaActivo__P2bED"}}}]);