!function(D,e,q){"use strict";var j=D.ht;j.Astar={},function(q){var r=q();D.AStar=r.astar,D.AStar.Graph=r.Graph}(function(){function n(Z){for(var L=Z,K=[];L.parent;)K.unshift(L),L=L.parent;return K}function Y(){return new Z(function(u){return u.f})}function u(L,h){h=h||{},this.nodes=[],this.diagonal=!!h.diagonal,this.grid=[];for(var z=0;z<L.length;z++){this.grid[z]=[];for(var m=0,w=L[z];m<w.length;m++){var B=new P(z,m,w[m]);this.grid[z][m]=B,this.nodes.push(B)}}this.$13x()}function P(N,Z,v){this.x=N,this.y=Z,this.weight=v}function Z(x){this.content=[],this.scoreFunction=x}var v={search:function(i,s,x,d){i.$6x(),d=d||{};var t=d.heuristic;t||(t=i.diagonal?v.$4x.diagonal:v.$4x.manhattan);var l=d.closest||!1,H=d.punish,K=Y(),z=s;for(s.h=t(s,x),i.$7x(s),K.push(s);K.size()>0;){var O=K.pop();if(O===x)return n(O);O.closed=!0;for(var q=i.neighbors(O),k=0,j=q.length;j>k;++k){var A=q[k];if(!A.closed&&!A.$9x()){var L=O.g+A.getCost(O,H),P=A.visited;(!P||L<A.g)&&(A.visited=!0,A.parent=O,A.h=A.h||t(A,x),A.g=L,A.f=A.g+A.h,i.$7x(A),l&&(A.h<z.h||A.h===z.h&&A.g<z.g)&&(z=A),P?K.$10x(A):K.push(A))}}}return l?n(z):[]},$4x:{manhattan:function(w,K){var G=Math.abs(K.x-w.x),A=Math.abs(K.y-w.y);return G+A},diagonal:function(Z,n){var G=1,x=Math.sqrt(2),y=Math.abs(n.x-Z.x),L=Math.abs(n.y-Z.y);return G*(y+L)+(x-2*G)*Math.min(y,L)}},$5x:function(H){H.f=0,H.g=0,H.h=0,H.visited=!1,H.closed=!1,H.parent=null}};return u.prototype.$13x=function(){this.dirtyNodes=[];for(var c=0;c<this.nodes.length;c++)v.$5x(this.nodes[c])},u.prototype.$6x=function(){for(var t=0;t<this.dirtyNodes.length;t++)v.$5x(this.dirtyNodes[t]);this.dirtyNodes=[]},u.prototype.$7x=function(K){this.dirtyNodes.push(K)},u.prototype.neighbors=function(D){var r=[],f=D.x,N=D.y,E=this.grid;return E[f-1]&&E[f-1][N]&&r.push(E[f-1][N]),E[f+1]&&E[f+1][N]&&r.push(E[f+1][N]),E[f]&&E[f][N-1]&&r.push(E[f][N-1]),E[f]&&E[f][N+1]&&r.push(E[f][N+1]),this.diagonal&&(E[f-1]&&E[f-1][N-1]&&r.push(E[f-1][N-1]),E[f+1]&&E[f+1][N-1]&&r.push(E[f+1][N-1]),E[f-1]&&E[f-1][N+1]&&r.push(E[f-1][N+1]),E[f+1]&&E[f+1][N+1]&&r.push(E[f+1][N+1])),r},u.prototype.toString=function(){for(var q=[],N=this.grid,r=0;r<N.length;r++){for(var f=[],I=N[r],a=0;a<I.length;a++)f.push(I[a].weight);q.push(f.join(" "))}return q.join("\n")},P.prototype.toString=function(){return"["+this.x+" "+this.y+"]"},P.prototype.getCost=function(q,I){var g;if(g=q&&q.x!=this.x&&q.y!=this.y?1.41421*this.weight:this.weight,I){var p=q;if(!p)return g;var s=p.parent;return s?Math.abs(s.x+this.x-2*p.x)>1e-5?g+I:Math.abs(s.y+this.y-2*p.y)>1e-5?g+I:g:g}},P.prototype.$9x=function(){return 0===this.weight},Z.prototype={push:function(i){this.content.push(i),this.$11x(this.content.length-1)},pop:function(){var H=this.content[0],E=this.content.pop();return this.content.length>0&&(this.content[0]=E,this.$12x(0)),H},remove:function(B){var n=this.content.indexOf(B),x=this.content.pop();n!==this.content.length-1&&(this.content[n]=x,this.scoreFunction(x)<this.scoreFunction(B)?this.$11x(n):this.$12x(n))},size:function(){return this.content.length},$10x:function(x){this.$11x(this.content.indexOf(x))},$11x:function(L){for(var h=this.content[L];L>0;){var w=(L+1>>1)-1,f=this.content[w];if(!(this.scoreFunction(h)<this.scoreFunction(f)))break;this.content[w]=h,this.content[L]=f,L=w}},$12x:function(K){for(var P=this.content.length,b=this.content[K],J=this.scoreFunction(b);;){var r,e=K+1<<1,p=e-1,X=null;if(P>p){var n=this.content[p];r=this.scoreFunction(n),J>r&&(X=p)}if(P>e){var u=this.content[e],q=this.scoreFunction(u);(null===X?J:r)>q&&(X=e)}if(null===X)break;this.content[K]=this.content[X],this.content[X]=b,K=X}}},{astar:v,Graph:u}});var L=j.Astar.Finder=function(k,U){var s=this;s.gv=k,s.$13x(U),s.refreshMap()};L.prototype={},L.prototype.constructor=L,e.defineProperties(L.prototype,{_debugInfo:{get:function(){return this.gv._astarDebugInfo},set:function(K){this.gv._astarDebugInfo=K}}}),L.prototype.$13x=function(E){var A=this,Y=A.$14x={};E=E||{};var c=E.gridSize||10;Y.gridSizeX=E.gridSizeX||c,Y.gridSizeY=E.gridSizeY||c,Y.rect=E.rect,Y.filter=E.filter,Y.extendBlocks=E.extendBlocks||3,Y.fastOverlap=E.fastOverlap===q?!0:E.fastOverlap,Y.nodeRectExtend=E.nodeRectExtend||0,Y.diagonal=E.diagonal===q?!0:E.diagonal,Y.turnPunish=E.turnPunish===q?.1:E.turnPunish,Y.simplify=E.simplify===q?!0:E.simplify,Y.toGridCenter=E.toGridCenter===q?!1:E.toGridCenter,Y.closest=E.closest===q?!0:E.closest},L.prototype.refreshMap=function(){var V,P=this,Q=P.$14x,m=Q.gridSizeX,d=Q.gridSizeY,i=Q.extendBlocks;Q.rect?V=Q.rect:(V=P.$15x(),j.Default.grow(V,m*i,d*i)),j.Default.grow(V,m,d);var p=Math.floor(V.x/m)*m,E=Math.floor(V.y/d)*d,T=Math.ceil(V.width/m),U=Math.ceil(V.height/d),Z=T*m,M=U*d;P.$16x={x:p,y:E,w:Z,h:M,gridX:m,gridY:d,xLen:T,yLen:U},P.$17x(),P.$21x()},L.prototype.$15x=function(){var W=this.gv;if(W instanceof j.graph.GraphView)return W.getContentRect();var R,G=j.Default.unionRect;return W.dm().each(function(P){W.isVisible(P)&&P.getRect&&(R=G(R,P.getRect()))}),R},L.prototype.$17x=function(){var e,v,N,f,r=this,u=r.$16x,S=u.xLen,_=u.yLen;for(e=new Array(S),N=0;S>N;N++)for(e[N]=v=new Array(_),f=_;f--;)v[f]=1;var J=r.$14x.filter;for(r.gv.dm().each(function(B){J&&J(B)===!1||(!r._debugInfo||B!==r._debugInfo.grid&&B!=r._debugInfo.path)&&r.$1cw(e,B)}),N=0;S>N;N++)e[N][0]=1,e[N][_-1]=1;for(f=0;_>f;f++)e[0][f]=1,e[S-1][f]=1;r.grid=e;var l=new AStar.Graph(e,{diagonal:r.$14x.diagonal});r.graph=l},L.prototype.$18x=function(V,R,z,v,$,f,s,F){var l=this.$19x,j=l(z-V,$-s,v-R,f-F);if(1e-6>=j&&j>=-1e-6)return!1;var x=l($-V,$-s,f-R,f-F)/j;if(0>x||x>1)return!1;var T=l(z-V,$-V,v-R,f-R)/j;return 0>T||T>1?!1:!0},L.prototype.$19x=function(a,c,q,D){return a*D-c*q},L.prototype.$1aw=function(u,e,B,a){for(var q=[-(e[1]-u[1]),e[0]-u[0]],I=q[0]*(B[0]-u[0])+q[1]*(B[1]-u[1])>=0,O=0,K=a.length;K>O;O+=2)if(q[0]*(a[O]-u[0])+q[1]*(a[O+1]-u[1])>=0===I)return!1;return!0},L.prototype.$1bw=function(d,T){for(var r,o,V=this,v=0,J=d.length;J>v;v+=2)if(r=v===J-2?0:v+2,o=r===J-2?0:r+2,V.$1aw([d[v],d[v+1]],[d[r],d[r+1]],[d[o],d[o+1]],T))return!1;for(var v=0,J=T.length;J>v;v+=2)if(r=v===J-2?0:v+2,o=r===J-2?0:r+2,V.$1aw([T[v],T[v+1]],[T[r],T[r+1]],[T[o],T[o+1]],d))return!1;return!0},L.prototype.$1cw=function(i,W){if(W.getRect){var V=this,r=W.getRect();j.Default.grow(r,V.$14x.nodeRectExtend);var g,P,M,m,k,B,D,L,q,S,T,a=V.$1dw({x:r.x,y:r.y}),h=V.$1dw({x:r.x+r.width,y:r.y+r.height}),z=V.$14x.fastOverlap;if(!z){var p=W.getCorners();D=[],p.forEach(function(C){D.push(C.x,C.y)}),S=V.$14x.gridSizeX/2,T=V.$14x.gridSizeY/2}for(P=Math.max(0,a.x),M=Math.min(h.x,i.length-1),k=Math.max(0,a.y),B=Math.min(h.y,i.length?i[0].length-1:-1),g=P;M>=g;g++)for(m=k;B>=m;m++)if(z)i[g][m]=0;else{q=V.$1ew({x:g,y:m});var w=q.x-S,l=q.x+S,d=q.y-T,I=q.y+T;L=[w,d,w,I,l,I,l,d],V.$1bw(D,L)&&(i[g][m]=0)}}},L.prototype.$1dw=function(P,r){var S=this,I=S.$16x,O=(P.x-I.x)/I.gridX,Y=(P.y-I.y)/I.gridY;return r!==!1&&(O=Math.round(O),Y=Math.round(Y)),{x:O,y:Y}},L.prototype.$1ew=function(u){var R=this,s=R.$16x;return{x:u.x*s.gridX+s.x,y:u.y*s.gridY+s.y}},L.prototype.$1fw=function(S){var X=this,a=X.$16x,k=a.xLen,Z=a.yLen;if(S.x>=0&&S.x<k&&S.y>=0&&S.y<Z)return S;var n={x:S.x,y:S.y};return n.x<0?n.x=0:n.x>=k&&(n.x=k-1),n.y<0?n.y=0:n.y>=Z&&(n.y=Z-1),n},L.prototype.findPath=function(Q,W){var R,e,f,s,q=this,n=q.$1dw(Q),Z=q.$1dw(W);if(f=q.$1fw(n),s=q.$1fw(Z),f!==n&&s!==Z){var y=q.$16x,h=y.x-y.gridX/2,d=y.y-y.gridY/2,D=h+y.gridX*y.xLen,M=d+y.gridY*y.yLen;if(!(q.$18x(Q.x,Q.y,W.x,W.y,h,d,D,d)||q.$18x(Q.x,Q.y,W.x,W.y,D,d,D,M)||q.$18x(Q.x,Q.y,W.x,W.y,D,M,h,M)||q.$18x(Q.x,Q.y,W.x,W.y,h,M,h,d)))return[Q,W]}f!==n&&(R=!0,n=f),s!==Z&&(e=!0,Z=s);var E=q.graph.grid[n.x][n.y],k=q.graph.grid[Z.x][Z.y],r=AStar.search(q.graph,E,k,{closest:q.$14x.closest,punish:q.$14x.turnPunish});if(!r||!r.length)return null;var J=[];J.push(Q),R&&J.push(q.$1ew(r[0]));for(var V=1,t=r.length;t-1>V;V++)J.push(q.$1ew(r[V]));if(e)J.push(q.$1ew(r[t-1])),J.push(W);else{var w=r[t-1];Z.x!==w.x||Z.y!==w.y||q.$14x.toGridCenter?J.push(q.$1ew(w)):J.push(W)}return q.$14x.simplify&&(J=q.simplifyPath(J)),q.$20x=J,q.$21x(),J},L.prototype.debugOn=function(s){this.debugFlag=!0,this.debugSettings=s||{},this.$21x()},L.prototype.simplifyPath=function(O){var k=O.length;if(2>=k)return O;var N,d,h=[O[0],O[1]],A=h[0],R=h[1],B=1e-5;for(N=2;k>N;N++)d=O[N],Math.abs((R.x-A.x)*(d.y-A.y)-(R.y-A.y)*(d.x-A.x))<B?R=h[h.length-1]=d:(A=R,R=d,h.push(d));return h},L.prototype.$21x=function(){var D=this;if(D.$22x(),this.debugFlag){var $=D.grid;if($){var U,l=D.gv;if(D.debugSettings.$16x!==!1){U=[];for(var s,X,u,R,E,t=[],M=D.$14x.gridSizeX/2,g=D.$14x.gridSizeY/2,d=$.length,A=d?$[0].length:0,S=1;d-1>S;S++)for(var y=1;A-1>y;y++)$[S][y]||(s=D.$1ew({x:S,y:y}),X=s.x-M,u=s.x+M,R=s.y-g,E=s.y+g,U.push({x:X,y:R},{x:X,y:E},{x:u,y:E},{x:u,y:R}),t.push(1,2,2,2,5));var z=new j.Shape;z.s("shape.border.color","rgba(50, 50, 50, 0.2)"),z.s("shape.border.width",1),z.s("shape.background","rgba(200, 50, 100, 0.2)"),z.s("2d.editable",!1),z.s("2d.selectable",!1),z.setPoints(U),z.setSegments(t),D._debugInfo={grid:z},l.dm().add(z)}D.debugSettings.path!==!1&&(U=new j.Shape,D.$20x&&(U.setPoints(D.$20x),U.s("shape.border.color","red"),U.s("shape.border.width",1),U.s("2d.editable",!1),U.s("2d.selectable",!1),U.s("shape.background",null),D._debugInfo||(D._debugInfo={}),D._debugInfo.path=U,l.dm().add(U)))}}},L.prototype.debugOff=function(){this.debugFlag=!1,this.$22x()},L.prototype.$22x=function(){var Q=this;if(Q._debugInfo){var q=Q._debugInfo.grid,$=Q._debugInfo.path,x=Q.gv;q&&x.dm().remove(q),$&&x.dm().remove($),Q._debugInfo=null}}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);