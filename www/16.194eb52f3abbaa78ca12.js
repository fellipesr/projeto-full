(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8cDG":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),b=u("oBZk"),i=u("ZZ/e"),t=u("Z4xi"),r=u("Pn9U"),c=function(){function l(l,n){this.emailComposer=l,this.camera=n,this.currentImage="",this.name="",this.empresa="",this.projeto="",this.descricao=""}return l.prototype.sendEmail=function(){this.emailComposer.open({to:"fellipes41@gmail.com",attachments:[this.currentImage],subject:"Cordova Icons",body:"<p>Name:  "+this.name+"</p><p>Empresa: "+this.empresa+"</p><p>Tipo de Projeto: "+this.projeto+"</p><p>Descri\xe7\xe3o: "+this.descricao+"</p>",isHtml:!0})},l.prototype.captureImage=function(){var l=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.FILE_URI}).then(function(n){l.currentImage=n},function(l){console.log("Image error: ",l)})},l}(),h=o.mb({encapsulation:0,styles:[[""]],data:{}});function m(l){return o.Cb(0,[(l()(),o.ob(0,0,null,null,9,"ion-header",[],null,null,null,b.A,b.f)),o.nb(1,49152,null,0,i.y,[o.h,o.k,o.z],null,null),(l()(),o.ob(2,0,null,0,7,"ion-toolbar",[],null,null,null,b.P,b.u)),o.nb(3,49152,null,0,i.yb,[o.h,o.k,o.z],null,null),(l()(),o.ob(4,0,null,0,5,"ion-title",[["text-center",""]],null,null,null,b.O,b.t)),o.nb(5,49152,null,0,i.wb,[o.h,o.k,o.z],null,null),(l()(),o.ob(6,0,null,0,1,"a",[["href","http://fullengenharia.com.br"],["target","_blank"]],null,null,null,null,null)),(l()(),o.ob(7,0,null,null,0,"img",[["src","assets/img/logo.png"],["style","float: left; width: 100%;max-width: 15%; height: auto;"]],null,null,null,null,null)),(l()(),o.ob(8,0,null,0,1,"span",[["style","font-weight:bold; height: 100%; left: 0; position: absolute;\n        text-align: center;\n        top: 0;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;"]],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Equipe Full"])),(l()(),o.ob(10,0,null,null,137,"ion-content",[["padding",""],["scrollX","true"]],null,null,null,b.z,b.e)),o.nb(11,49152,null,0,i.r,[o.h,o.k,o.z],{scrollX:[0,"scrollX"]},null),(l()(),o.ob(12,0,null,0,135,"ion-card",[],null,null,null,b.y,b.c)),o.nb(13,49152,null,0,i.j,[o.h,o.k,o.z],null,null),(l()(),o.ob(14,0,null,0,133,"ion-list",[],null,null,null,b.F,b.k)),o.nb(15,49152,null,0,i.L,[o.h,o.k,o.z],null,null),(l()(),o.ob(16,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(17,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(18,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(19,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(20,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Jos\xe9 Maria da Silva Junior"])),(l()(),o.ob(22,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Diretor Geral"])),(l()(),o.ob(24,0,null,0,3,"a",[["href","tel:037988220743"]],null,null,null,null,null)),(l()(),o.ob(25,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(26,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 98822-0743 "])),(l()(),o.ob(28,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(29,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(30,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(31,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(32,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Pedro Henrique Palestini Moreira"])),(l()(),o.ob(34,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Coordenador"])),(l()(),o.ob(36,0,null,0,3,"a",[["href","tel:037988339777"]],null,null,null,null,null)),(l()(),o.ob(37,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(38,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 98833-9777 "])),(l()(),o.ob(40,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(41,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(42,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(43,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(44,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Lucas Antonio do Nascimento"])),(l()(),o.ob(46,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Departamento T\xe9cnico"])),(l()(),o.ob(48,0,null,0,3,"a",[["href","tel:037998756218"]],null,null,null,null,null)),(l()(),o.ob(49,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(50,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 99875-6218 "])),(l()(),o.ob(52,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(53,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(54,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(55,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(56,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Matheus Felipe Azavedo"])),(l()(),o.ob(58,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Departamento T\xe9cnico"])),(l()(),o.ob(60,0,null,0,3,"a",[["href","tel:037988225984"]],null,null,null,null,null)),(l()(),o.ob(61,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(62,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 988225984 "])),(l()(),o.ob(64,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(65,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(66,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(67,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(68,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Lucas Costa Quadros"])),(l()(),o.ob(70,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Departamento T\xe9cnico"])),(l()(),o.ob(72,0,null,0,3,"a",[["href","tel:03799805-0093"]],null,null,null,null,null)),(l()(),o.ob(73,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(74,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 99805-0093 "])),(l()(),o.ob(76,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(77,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(78,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(79,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(80,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Francisco Margotti dos Santos"])),(l()(),o.ob(82,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Departamento T\xe9cnico"])),(l()(),o.ob(84,0,null,0,3,"a",[["href","tel:037988127805"]],null,null,null,null,null)),(l()(),o.ob(85,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(86,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 98812-7805 "])),(l()(),o.ob(88,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(89,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(90,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(91,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(92,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Fernanda de Alcantara Souza"])),(l()(),o.ob(94,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Departamento T\xe9cnico"])),(l()(),o.ob(96,0,null,0,3,"a",[["href","tel:037999223000"]],null,null,null,null,null)),(l()(),o.ob(97,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(98,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 99922-3000 "])),(l()(),o.ob(100,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(101,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(102,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(103,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(104,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Fellipe Soares Ribeiro"])),(l()(),o.ob(106,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Departamento T\xe9cnico"])),(l()(),o.ob(108,0,null,0,3,"a",[["href","tel:037991531108"]],null,null,null,null,null)),(l()(),o.ob(109,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(110,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 99153-1108 "])),(l()(),o.ob(112,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(113,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(114,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(115,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(116,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Marilia Gabriela Dutra Barreto"])),(l()(),o.ob(118,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Planejamento"])),(l()(),o.ob(120,0,null,0,3,"a",[["href","tel:37991260546"]],null,null,null,null,null)),(l()(),o.ob(121,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(122,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 99126-0546 "])),(l()(),o.ob(124,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(125,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(126,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(127,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(128,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Leonardo Lopes Costa"])),(l()(),o.ob(130,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Comercial"])),(l()(),o.ob(132,0,null,0,3,"a",[["href","tel:037991917824"]],null,null,null,null,null)),(l()(),o.ob(133,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(134,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (37) 99191-7824 "])),(l()(),o.ob(136,0,null,0,11,"ion-item",[],null,null,null,b.D,b.i)),o.nb(137,49152,null,0,i.E,[o.h,o.k,o.z],null,null),(l()(),o.ob(138,0,null,0,9,"ion-label",[],null,null,null,b.E,b.j)),o.nb(139,49152,null,0,i.K,[o.h,o.k,o.z],null,null),(l()(),o.ob(140,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Debora Lopes de Faria"])),(l()(),o.ob(142,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Bb(-1,null,["Administrativo"])),(l()(),o.ob(144,0,null,0,3,"a",[["href","tel:031983454406"]],null,null,null,null,null)),(l()(),o.ob(145,0,null,null,1,"ion-icon",[["name","call"]],null,null,null,b.B,b.g)),o.nb(146,49152,null,0,i.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.Bb(-1,null,[" (31) 98345-4406 "]))],function(l,n){l(n,11,0,"true"),l(n,26,0,"call"),l(n,38,0,"call"),l(n,50,0,"call"),l(n,62,0,"call"),l(n,74,0,"call"),l(n,86,0,"call"),l(n,98,0,"call"),l(n,110,0,"call"),l(n,122,0,"call"),l(n,134,0,"call"),l(n,146,0,"call")},null)}function s(l){return o.Cb(0,[(l()(),o.ob(0,0,null,null,1,"app-tab2",[],null,null,null,m,h)),o.nb(1,49152,null,0,c,[t.a,r.a],null,null)],null,null)}var p=o.kb("app-tab2",c,s,{},{},[]),z=u("Ip0R"),B=u("gIcY"),k=u("ZYCi");u.d(n,"Tab2PageModuleNgFactory",function(){return f});var f=o.lb(e,[],function(l){return o.ub([o.vb(512,o.j,o.ab,[[8,[a.a,p]],[3,o.j],o.x]),o.vb(4608,z.j,z.i,[o.u,[2,z.p]]),o.vb(4608,i.a,i.a,[o.z,o.g]),o.vb(4608,i.Db,i.Db,[i.a,o.j,o.q]),o.vb(4608,i.Gb,i.Gb,[i.a,o.j,o.q]),o.vb(4608,B.j,B.j,[]),o.vb(1073742336,z.b,z.b,[]),o.vb(1073742336,i.Ab,i.Ab,[]),o.vb(1073742336,B.i,B.i,[]),o.vb(1073742336,B.a,B.a,[]),o.vb(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),o.vb(1073742336,e,e,[]),o.vb(1024,k.k,function(){return[[{path:"",component:c}]]},[])])})}}]);