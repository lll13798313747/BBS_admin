!function(F){"use strict";var N="ht",C=F[N],A=function(){return document},m=function(){return A().body},L=function(s,$,o){s.style.setProperty($,o,null)},b=function(X){return A().createElement(X)},Y=function(){return b("div")},t=function(){var h=b("canvas");return h},n=function(B,S){L(B,"-webkit-transform",S),L(B,"-ms-transform",S),L(B,"transform",S)},e=function(K,A){L(K,"-webkit-transform-origin",A),L(K,"-ms-transform-origin",A),L(K,"transform-origin",A)},U=function(K,c){K.appendChild(c)},a=function(q,H){q.removeChild(H)},q=F.parseInt,o=C.Default,D=o.getInternal(),E=Math.PI,x="white-space",Q="visibility",M="left",V="top",W="width",h="height",B="position",v="display",z="z-index",f="px",u="0 0",G="absolute",S="visible",j="hidden",k="none",p="block",O="nowrap",P="rgba(0, 0, 0, 0.005)";o.setImage("node_dragger","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN9JREFUeNrsV9sNhDAMKyzQVdgARmGzrMJNUFZhAh6nfkVcG9PQgHSR8lEksJs6pnGuLCimSRzAa0yyBK9O4gy8GokU+O0kJOAwiQYg0LP1xNYDW3+0CfBYNb7VOuN4LAGpiOaYUhFDas9F2NPHDELNENJqaHgBgSQJ3ufakfQJqckERcOiK+Ae1FGWBNKGh9oX5WPpLpdNYfffijbsxTHh7VKP7388n1g1h7OKUoUuyGpJakQEuhwkZAKcDXVOdWcrOrL/feBVBHI/q8fcjE1nA9PpyHQ+NJ2Qi8A3AQYAOtS27fCoRY0AAAAASUVORK5CYII=");var X=C.graph.GraphView.prototype,s=X._42;X.adjustHtmlNodeIndex=!0,X._42=function(r,m){if(s.call(this,r,m),this.adjustHtmlNodeIndex)for(var O=this.getDataModel()._datas._as,e=O.length,g=1,n=0;e>n;n++){var w=O[n];if(w instanceof I){var o=this.getDataUI(w);L(o.$2f,z,g+""),L(o.$3f,z,g+1+""),g+=2}}};var T=C.HtmlNodeUI=function(N,J){var y=this;T.superClass.constructor.call(y,N,J);var l=y.$2f=Y(),V=y.$3f=t();L(l,B,G),L(l,Q,j),L(l,x,O),V.draggable=!1,L(V,B,G),L(V,v,k),e(V,u),l.addEventListener("change",function(q){var c=q.target,F=c.bind||c.getAttribute("bind"),P=c.type&&"checkbox"===c.type?c.checked:c.value,t=J.getContext();F&&t&&(t[F]=P,y.$4f=JSON.stringify(t))}),["mousedown","touchstart","keydown","mousewheel","DOMMouseScroll"].forEach(function(x){l.addEventListener(x,this.$9f.bind(this))},y)};o.def(T,D.ui().NodeUI,{_visible:!0,$11f:function(){var N=this,s=N.$3f,e=N._data,x=e.getDraggerImageWidth(),X=e.getDraggerImageHeight(),Q=e.getDraggerImage(),I=D.initContext(s);I.beginPath(),D.setCanvas(s,x,X),D.translateAndScale(I,0,0,1),I.clearRect(0,0,x,X),o.drawImage(I,o.getImage(Q),0,0,x,X),I.restore()},_80o:function(K){T.superClass._80o.call(this,K);var Z=this,g=Z._data,a=g._padding,d=2*a,l=Z.$2f,i=Z.$3f,A=Z.gv,H=A.getZoom(),c=A.getTranslateX(),X=A.getTranslateY(),C=A.getView(),F=Z._83o,r=g._width,t=g._height,e=F.position,b=F.rotation,u=(r-d)/g.$5f*H,w=(t-d)/g.$6f*H,m=Z._html,y=g._html,I=g.getHtmlType();if("html"===I){var R=g.getContext()||{},D=Z.$4f,s=g.$10f,J=JSON.stringify(R);m&&D&&m===y&&D===J||(Z.$4f=J,Z._html=y,l.innerHTML=s?s(R):y)}else if(null!=I){var x=g.getHtml();"ht"===I&&(x=x.getView()),m&&m===x&&l.contains(m)||(Z._html=x,l.innerHTML="",U(l,x))}if(!l.parentNode){var N=A.$1f;if(!N){var $=Y();L($,B,G),L($,z,"0"),N=A.$1f=$;var o=A._canvas.nextSibling;o?C.insertBefore($,o):U(C,$)}U(N,l),U(N,i),g.onContentInitialized&&g.onContentInitialized(l)}if(g._scalable){var O=g.$5f,_=g.$6f;n(l,"rotate("+180*(b/E)+"deg) scale("+u+","+w+")"),L(l,W,""),L(l,h,""),L(l,M,(e.x-O/H/2)*H+c+f),L(l,V,(e.y-_/H/2)*H+X+f)}else{var Yl=q(l.style.width),sn=q(l.style.height),Gp=q((r-d)*H),dg=q((t-d)*H),Wq="100%",Vb=l.children[0];L(Vb,W,Wq),L(Vb,h,Wq),(Yl!==Gp||sn!==dg)&&(L(l,W,Gp+f),L(l,h,dg+f),"ht"===I&&y.invalidate()),n(l,"rotate("+180*(b/E)+"deg)"),L(l,M,(e.x-Gp/H/2)*H+c+f),L(l,V,(e.y-dg/H/2)*H+X+f)}var ds=Z.dragRect;A.isMovable(g)&&A.isSelected(g)&&ds?(K.save(),K.fillStyle=P,K.fillRect(ds.x,ds.y,ds.width,ds.height),K.restore(),L(i,M,ds.x*H+c+f),L(i,V,ds.y*H+X+f),n(i,"scale("+H+","+H+")"),L(i,v,p),Z.$11f()):L(i,v,k),L(l,Q,this._visible?S:j)},dispose:function(){var U=this.gv.$1f;this.$2f.parentNode===U&&U.removeChild(this.$2f),this.$3f.parentNode===U&&U.removeChild(this.$3f)},_84o:function(I){this._visible=I,L(this.$2f,Q,I?S:j),L(this.$3f,v,I?p:k)},_3O:function(){var L=this,Y=L.gv,Q=L._data;T.superClass._3O.call(L);var z=Q.getRect();Y.isEditable(Q)&&(L.dragRect={x:z.x+z.width+Q._padding,y:z.y+10,width:Q.getDraggerImageWidth(),height:Q.getDraggerImageHeight()},L._68o(L.dragRect))},rectIntersects:function($){var u=this._79o();return C.Default.intersection(u,$)?!0:void 0},$9f:function(m){var _=this.gv,u=this._data;_.sm().contains(u)&&m.stopPropagation()}});var I=C.HtmlNode=function(){I.superClass.constructor.call(this)};C.Default.def(I,C.Node,{ms_ac:["html","context","scalable","padding","draggerImage","draggerImageWidth","draggerImageHeight"],_padding:C.Default.isTouchable?12:6,_image:null,_scalable:!0,_draggerImage:"node_dragger",_draggerImageWidth:20,_draggerImageHeight:20,setHtml:function(j){var v=this,y=v._html;v._html=j,"html"===v.getHtmlType()&&"Handlebars"in F&&(v.$10f=Handlebars.compile(j)),v.$13f(),v.fp("html",y,j)},setContext:function(_){var q=this,p=q._context;q._context=_,q.fp("context",p,_),q.$13f()},setScalable:function(I){var H=this,X=H._scalable;H._scalable=I,H.fp("scalable",X,I),H.$13f()},getHtmlType:function(){var W=this._html;return W?"string"==typeof W?"html":W.getView?"ht":"dom":null},$13f:function(){var i=this,E=i._html,d=i.$10f;if(E){var H=Y(),T=!1,P=i.getHtmlType();if(L(H,B,G),L(H,x,O),L(H,Q,j),"html"===P?(H.innerHTML=d?d(i.getContext()||{}):E,T=!0):"ht"===P?(U(H,E.getView()),T=!0):"dom"===P&&(U(H,E),T=!0),T){var n=2*i._padding;U(m(),H),i.$5f=H.scrollWidth,i.$6f=H.scrollHeight,i._width=i.$5f+n,i._height=i.$6f+n,i._originWidth=i._width,i._originHeight=i._height,a(m(),H)}}},getUIClass:function(){return C.HtmlNodeUI}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);