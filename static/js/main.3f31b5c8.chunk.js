(this["webpackJsonpunit-circle"]=this["webpackJsonpunit-circle"]||[]).push([[0],{13:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var c=i(2),s=i.n(c),n=i(9),a=i.n(n),l=(i(19),i(1)),r=i(10),h=i.n(r),o=i(14),d=i(4),x=i(5),u=function(){function e(t,i,c,s,n){Object(d.a)(this,e),this.centreX=t,this.centreY=i,this.width=c,this.height=s,this.radius=n}return Object(x.a)(e,[{key:"circleEndCoords",value:function(e){return[this.centreX+this.radius*Math.cos(e),this.centreY-this.radius*Math.sin(e)]}},{key:"circleEndOffsetCoords",value:function(e,t){return[this.centreX+(this.radius+t)*Math.cos(e),this.centreY-(this.radius+t)*Math.sin(e)]}},{key:"isInFirstQuadrant",value:function(e){return e>=0&&e<=Math.PI/2}},{key:"isInSecondQuadrant",value:function(e){return e>Math.PI/2&&e<=Math.PI}},{key:"isInThirdQuadrant",value:function(e){return e>Math.PI&&e<=3*Math.PI/2}},{key:"isInFourthQuadrant",value:function(e){return e>3*Math.PI/2&&e<=2*Math.PI}},{key:"isInTopQuadrants",value:function(e){return this.isInFirstQuadrant(e)||this.isInSecondQuadrant(e)}},{key:"isInBottomQuadrants",value:function(e){return this.isInThirdQuadrant(e)||this.isInFourthQuadrant(e)}},{key:"isInRightQuadrants",value:function(e){return this.isInFirstQuadrant(e)||this.isInFourthQuadrant(e)}},{key:"isInLeftQuadrants",value:function(e){return this.isInSecondQuadrant(e)||this.isInThirdQuadrant(e)}}]),e}();function g(e){return e*Math.PI/180}function b(e){return 180*e/Math.PI}var f="rgb(255, 255, 255)",j="rgb(36, 173, 48)",O="rgb(40, 44, 52)",v=function(){function e(t,i,c,s,n,a){Object(d.a)(this,e),this.ctx=t,this.width=i,this.height=c,this.angleUnit=s,this.trigVisible=n,this.circleDetails=a,this.radius=Math.floor(c/3),this.circle=new u(this.width/2,this.height/2,this.width,this.height,this.radius),this.resetCanvas()}return Object(x.a)(e,[{key:"textAlignOutwards",value:function(e){this.circle.isInRightQuadrants(e)&&(this.ctx.textAlign="start"),this.circle.isInLeftQuadrants(e)&&(this.ctx.textAlign="end"),this.circle.isInTopQuadrants(e)&&(this.ctx.textBaseline="bottom"),this.circle.isInBottomQuadrants(e)&&(this.ctx.textBaseline="top")}},{key:"textAlignInwards",value:function(e){this.circle.isInRightQuadrants(e)&&(this.ctx.textAlign="end"),this.circle.isInLeftQuadrants(e)&&(this.ctx.textAlign="start"),this.circle.isInTopQuadrants(e)&&(this.ctx.textBaseline="top"),this.circle.isInBottomQuadrants(e)&&(this.ctx.textBaseline="bottom")}},{key:"textAlignTopBottomInwards",value:function(e){this.ctx.textAlign="center",this.circle.isInTopQuadrants(e)&&(this.ctx.textBaseline="top"),this.circle.isInBottomQuadrants(e)&&(this.ctx.textBaseline="bottom")}},{key:"textAlignRightLeftInwards",value:function(e){this.ctx.textBaseline="middle",this.circle.isInRightQuadrants(e)&&(this.ctx.textAlign="end"),this.circle.isInLeftQuadrants(e)&&(this.ctx.textAlign="start")}},{key:"drawAngleLine",value:function(e){var t=this.circle.circleEndCoords(e),i=Object(l.a)(t,2),c=i[0],s=i[1],n=this.circle.centreX,a=this.circle.centreY,r=this.circle.radius;this.ctx.lineWidth=2,this.ctx.strokeStyle=j,this.ctx.beginPath(),this.ctx.moveTo(n,a),this.ctx.lineTo(c,s),this.ctx.stroke(),this.ctx.beginPath(),this.trigVisible.sin&&(this.ctx.moveTo(c,s),this.ctx.lineTo(c,a)),this.trigVisible.cos&&(this.ctx.moveTo(c,s),this.ctx.lineTo(n,s));var h=n+1/Math.cos(e)*r;this.trigVisible.sec&&(this.ctx.moveTo(n,a),this.ctx.lineTo(h,a));var o=a-1/Math.sin(e)*r;if(this.trigVisible.csc&&(this.ctx.moveTo(n,a),this.ctx.lineTo(n,o)),this.trigVisible.tan&&(this.ctx.moveTo(c,s),this.ctx.lineTo(h,a)),this.trigVisible.cot&&(this.ctx.moveTo(c,s),this.ctx.lineTo(n,o)),this.ctx.stroke(),this.ctx.font="20px Consolas","none"!=this.angleUnit&&(this.ctx.fillStyle=f,this.textAlignOutwards(e),"degrees"==this.angleUnit&&this.ctx.fillText(b(e).toFixed(2)+"\xb0",c,s),"radians"==this.angleUnit&&(console.log(e),e%1!=0?this.ctx.fillText(e.toFixed(5),c,s):this.ctx.fillText(e,c,s))),this.ctx.fillStyle=j,this.trigVisible.cos&&(this.textAlignTopBottomInwards(e),this.ctx.fillText(Math.abs(Math.cos(e).toFixed(2)),c+(n-c)/2,s)),this.trigVisible.sin&&(this.textAlignRightLeftInwards(e),this.ctx.fillText(Math.abs(Math.sin(e).toFixed(2)),c,s+(a-s)/2)),this.trigVisible.sec&&(this.textAlignTopBottomInwards(e),this.ctx.fillText(Math.abs((1/Math.cos(e)).toFixed(2)),h+(n-h)/2,a)),this.trigVisible.csc&&(this.textAlignRightLeftInwards(e),this.ctx.fillText(Math.abs((1/Math.sin(e)).toFixed(2)),n,o+(a-o)/2)),this.trigVisible.tan){this.textAlignOutwards(e);var d=h-c,x=a-s;this.ctx.fillText(Math.abs(Math.tan(e).toFixed(2)),c+d/2,a-x/2)}if(this.trigVisible.cot){this.textAlignOutwards(e);var u=c-n,g=s-o;this.ctx.fillText(Math.abs((1/Math.tan(e)).toFixed(2)),c-u/2,s-g/2)}}},{key:"resetCanvas",value:function(){var e=this.circle.centreX,t=this.circle.centreY,i=this.circle.radius;if(this.ctx.clearRect(0,0,this.width,this.height),this.ctx.fillStyle=f,this.ctx.beginPath(),this.ctx.arc(e,t,i,g(0),g(360),!1),this.ctx.fill(),this.ctx.lineWidth=1,this.circleDetails.degrees){this.ctx.strokeStyle=O;for(var c=0;c<360;c+=1){var s=i/30;c%5===0&&(s=i/20),c%10===0&&(s=i/15);var n=g(c),a=this.circle.circleEndCoords(n),r=Object(l.a)(a,2),h=r[0],o=r[1],d=this.circle.circleEndOffsetCoords(n,-s),x=Object(l.a)(d,2),u=x[0],b=x[1];this.ctx.beginPath(),this.ctx.moveTo(u,b),this.ctx.lineTo(h,o),this.ctx.stroke()}}var j=i/30;if(this.circleDetails.radians){this.ctx.strokeStyle=f;for(var v=0;v<2*Math.PI;v+=.1){var p=this.circle.circleEndCoords(v),k=Object(l.a)(p,2),C=k[0],m=k[1],T=this.circle.circleEndOffsetCoords(v,j),A=Object(l.a)(T,2),I=A[0],y=A[1];this.ctx.beginPath(),this.ctx.moveTo(C,m),this.ctx.lineTo(I,y),this.ctx.stroke()}}if(this.ctx.font="12.5px Consolas",this.circleDetails.degrees){this.ctx.fillStyle=O;for(var w=i/15,M=0;M<360;M+=10){var S=g(M),F=this.circle.circleEndOffsetCoords(S,-w),N=Object(l.a)(F,2),Q=N[0],B=N[1];this.textAlignInwards(S),this.ctx.fillText(M,Q,B)}}if(this.ctx.fillStyle="rgb(135, 135, 135)",this.circleDetails.radians)for(var D=0;D<2*Math.PI;D+=.1){var E=this.circle.circleEndOffsetCoords(D,j),V=Object(l.a)(E,2),P=V[0],R=V[1];this.textAlignOutwards(D),this.ctx.fillText(D.toFixed(1),P,R)}if(this.circleDetails.pi){this.ctx.font="20px Consolas",this.ctx.textAlign="start",this.ctx.textBaseline="middle",this.ctx.fillText("0 & 2\u03c0",e+i+4*j,t),this.ctx.textBaseline="bottom";var L=this.circle.circleEndOffsetCoords(g(30),4*j),U=Object(l.a)(L,2),Y=U[0],X=U[1];this.ctx.fillText("\u03c0/6",Y,X);var q=this.circle.circleEndOffsetCoords(g(45),4*j),G=Object(l.a)(q,2);Y=G[0],X=G[1],this.ctx.fillText("\u03c0/4",Y,X);var W=this.circle.circleEndOffsetCoords(g(60),4*j),H=Object(l.a)(W,2);Y=H[0],X=H[1],this.ctx.fillText("\u03c0/3",Y,X),this.ctx.textAlign="center",this.ctx.fillText("\u03c0/2",e,t-i-4*j),this.ctx.textAlign="end";var J=this.circle.circleEndOffsetCoords(g(120),4*j),z=Object(l.a)(J,2);Y=z[0],X=z[1],this.ctx.fillText("2\u03c0/3",Y,X);var K=this.circle.circleEndOffsetCoords(g(135),4*j),Z=Object(l.a)(K,2);Y=Z[0],X=Z[1],this.ctx.fillText("3\u03c0/4",Y,X);var $=this.circle.circleEndOffsetCoords(g(150),4*j),_=Object(l.a)($,2);Y=_[0],X=_[1],this.ctx.fillText("5\u03c0/6",Y,X),this.ctx.textBaseline="middle",this.ctx.fillText("\u03c0",e-i-4*j,t),this.ctx.textBaseline="top";var ee=this.circle.circleEndOffsetCoords(g(210),4*j),te=Object(l.a)(ee,2);Y=te[0],X=te[1],this.ctx.fillText("7\u03c0/6",Y,X);var ie=this.circle.circleEndOffsetCoords(g(225),4*j),ce=Object(l.a)(ie,2);Y=ce[0],X=ce[1],this.ctx.fillText("5\u03c0/4",Y,X);var se=this.circle.circleEndOffsetCoords(g(240),4*j),ne=Object(l.a)(se,2);Y=ne[0],X=ne[1],this.ctx.fillText("4\u03c0/3",Y,X),this.ctx.textAlign="center",this.ctx.fillText("3\u03c0/2",e,t+i+4*j),this.ctx.textAlign="start";var ae=this.circle.circleEndOffsetCoords(g(300),4*j),le=Object(l.a)(ae,2);Y=le[0],X=le[1],this.ctx.fillText("5\u03c0/3",Y,X);var re=this.circle.circleEndOffsetCoords(g(315),4*j),he=Object(l.a)(re,2);Y=he[0],X=he[1],this.ctx.fillText("7\u03c0/4",Y,X);var oe=this.circle.circleEndOffsetCoords(g(330),4*j),de=Object(l.a)(oe,2);Y=de[0],X=de[1],this.ctx.fillText("11\u03c0/6",Y,X)}if(this.circleDetails.axes&&(this.ctx.strokeStyle=O,this.ctx.beginPath(),this.ctx.moveTo(e-i,t),this.ctx.lineTo(e+i,t),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(e,t-i),this.ctx.lineTo(e,t+i),this.ctx.stroke()),this.circleDetails.quadrants&&(this.ctx.fillStyle=O,this.ctx.font="17.5px Consolas",this.ctx.textAlign="start",this.ctx.textBaseline="bottom",this.ctx.fillText("I",e+5,t-5),this.ctx.textAlign="end",this.ctx.fillText("II",e-5,t-5),this.ctx.textAlign="end",this.ctx.textBaseline="top",this.ctx.fillText("III",e-5,t+5),this.ctx.textAlign="start",this.ctx.fillText("IV",e+5,t+5)),this.circleDetails.signs){this.ctx.fillStyle=O,this.ctx.font="17.5px Consolas";var xe=[30,45,60,75,90,105];this.ctx.textAlign="start",this.ctx.textBaseline="bottom";for(var ue=["csc +","sec +","cot +","tan +","cos +","sin +"],ge=0;ge<ue.length;ge++)this.ctx.fillText(ue[ge],e+30,t-xe[ge]);this.ctx.textAlign="end",ue=["csc +","sec -","cot -","tan -","cos -","sin +"];for(var be=0;be<ue.length;be++)this.ctx.fillText(ue[be],e-30,t-xe[be]);this.ctx.textBaseline="top",ue=["csc -","sec -","cot +","tan +","cos -","sin -"];for(var fe=0;fe<ue.length;fe++)this.ctx.fillText(ue[fe],e-30,t+xe[fe]);this.ctx.textAlign="start",ue=["csc -","sec +","cot -","tan -","cos +","sin -"];for(var je=0;je<ue.length;je++)this.ctx.fillText(ue[je],e+30,t+xe[je])}}},{key:"fadeIn",value:function(){var e=Object(o.a)(h.a.mark((function e(){var t,i,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(e){return new Promise((function(t){return setTimeout(t,e)}))},i=0,c=.02;case 3:if(!(i<1)){e.next=11;break}return this.ctx.globalAlpha=i,this.resetCanvas(),i+=c,e.next=9,t(10);case 9:e.next=3;break;case 11:this.ctx.globalAlpha=1;case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onMouseMove",value:function(e){var t=e.clientX,i=e.clientY,c=this.circle.centreX,s=this.circle.centreY,n=this.circle.radius;if(Math.sqrt((t-c)*(t-c)+(i-s)*(i-s))<n){this.resetCanvas();var a=t-c,l=i-s,r=-Math.atan2(l,a);return r<0&&(r=2*Math.PI+r),this.drawAngleLine(r),r}return null}}]),e}(),p=(i(21),i(0));var k=function(e){var t=Object(c.useRef)(null),i=Object(c.useRef)(!1),s=window.innerWidth,n=window.innerHeight;return Object(c.useEffect)((function(){var c=t.current.getContext("2d"),a=new v(c,s,n,e.angleUnit,e.trigVisible,e.circleDetails);if(i.current||(a.fadeIn(),i.current=!0),null!=e.radianAngle&&a.drawAngleLine(parseFloat(e.radianAngle)),e.angleSelect){var l=!1;t.current.onmousedown=function(t){var i=a.onMouseMove(t);null!=i&&e.handleGraphRadianChange(i),l=!0},t.current.onmousemove=function(t){if(l){var i=a.onMouseMove(t);null!=i&&e.handleGraphRadianChange(i)}},t.current.onmouseup=function(e){l=!1}}else t.current.onmousedown=null,t.current.onmousemove=null,t.current.onmouseup=null}),[e.updateCount]),Object(p.jsx)("canvas",{ref:t,width:s,height:n,className:"canvas",children:Object(p.jsx)("p",{children:'Your browser doesn"t support canvas.'})})},C=i(6);i(13);var m=function(e){return Object(p.jsxs)(C.slide,{noOverlay:!0,disableAutoFocus:!0,isOpen:!0,width:375,children:[Object(p.jsx)("label",{className:"centered large-print",children:"Manual Input Angle Select"}),Object(p.jsxs)("label",{className:"centered large-print underlined",style:{padding:"1em 0"},children:["\u03b8:",Object(p.jsx)("input",{type:"text",style:{marginLeft:"0.25em"},value:e.degreeAngle,onChange:e.handleDegreeAngleChange,className:"small-input"}),"\xb0 \u2248",Object(p.jsx)("input",{type:"text",style:{marginLeft:"0.8em",marginRight:"0.25em"},value:e.radianAngle,onChange:e.handleRadianAngleChange,className:"medium-input"}),"rad"]}),Object(p.jsxs)("label",{className:"centered large-print underlined",style:{padding:"1em 0"},children:["Click & Hold Angle Select:",Object(p.jsx)("input",{id:"hold-click-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleAngleSelectionChange})]}),Object(p.jsxs)("label",{className:"centered large-print underlined",style:{padding:"1em 0"},children:["Angle Unit:",Object(p.jsxs)("select",{id:"angle-value-dropdown",style:{marginLeft:"0.25em"},onChange:e.handleAngleUnitChange,children:[Object(p.jsx)("option",{value:"degrees",children:"Degrees"}),Object(p.jsx)("option",{value:"radians",children:"Radians"}),Object(p.jsx)("option",{value:"none",children:"None"})]})]}),Object(p.jsx)("label",{className:"centered large-print",children:"Trigonometric Functions"}),Object(p.jsxs)("div",{className:"centered",style:{whitespace:"nowrap"},children:[Object(p.jsxs)("label",{children:["cos:",Object(p.jsx)("input",{id:"cos-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleTrigSelectionChange})]}),Object(p.jsxs)("label",{children:["sin:",Object(p.jsx)("input",{id:"sin-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleTrigSelectionChange})]}),Object(p.jsxs)("label",{children:["tan:",Object(p.jsx)("input",{id:"tan-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleTrigSelectionChange})]})]}),Object(p.jsxs)("div",{className:"centered underlined",style:{whitespace:"nowrap",padding:"1em"},children:[Object(p.jsxs)("label",{children:["cot:",Object(p.jsx)("input",{id:"cot-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleTrigSelectionChange})]}),Object(p.jsxs)("label",{children:["sec:",Object(p.jsx)("input",{id:"sec-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleTrigSelectionChange})]}),Object(p.jsxs)("label",{children:["csc:",Object(p.jsx)("input",{id:"csc-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleTrigSelectionChange})]})]}),Object(p.jsx)("label",{className:"centered large-print",children:"Unit Circle Details"}),Object(p.jsxs)("div",{className:"centered",style:{whitespace:"nowrap"},children:[Object(p.jsxs)("label",{children:["Axes:",Object(p.jsx)("input",{id:"axis-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleCircleDetailChange})]}),Object(p.jsxs)("label",{children:["Degrees:",Object(p.jsx)("input",{id:"degree-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleCircleDetailChange})]})]}),Object(p.jsxs)("div",{className:"centered",style:{whitespace:"nowrap"},children:[Object(p.jsxs)("label",{children:["Radians:",Object(p.jsx)("input",{id:"radian-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleCircleDetailChange})]}),Object(p.jsxs)("label",{children:["Pi:",Object(p.jsx)("input",{id:"pi-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleCircleDetailChange})]})]}),Object(p.jsxs)("div",{className:"centered underlined",style:{whitespace:"nowrap",paddingBottom:"1em"},children:[Object(p.jsxs)("label",{children:["Quadrants:",Object(p.jsx)("input",{id:"quadrant-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleCircleDetailChange})]}),Object(p.jsxs)("label",{children:["Function Signs:",Object(p.jsx)("input",{id:"sign-checkbox",type:"checkbox",defaultChecked:!0,onChange:e.handleCircleDetailChange})]})]})]})};var T=function(e){return Object(p.jsxs)(C.slide,{right:!0,noOverlay:!0,disableAutoFocus:!0,isOpen:!0,width:375,children:[Object(p.jsx)("label",{className:"centered underlined",style:{padding:"1em 0"},children:"NB: Trigonometric values are rendered on the circle as their absolute value and rounded to two decimal places, consult the values below for better accuracy."}),Object(p.jsx)("label",{className:"centered large-print",children:"Trigonometric Function Values"}),Object(p.jsxs)("label",{className:"centered",children:["cos(\u03b8) = ",e.trigValues.cos]}),Object(p.jsxs)("label",{className:"centered",children:["sin(\u03b8) = ",e.trigValues.sin]}),Object(p.jsxs)("label",{className:"centered",children:["tan(\u03b8) = ",e.trigValues.tan]}),Object(p.jsxs)("label",{className:"centered",children:["cot(\u03b8) = ",e.trigValues.cot]}),Object(p.jsxs)("label",{className:"centered",children:["sec(\u03b8) = ",e.trigValues.sec]}),Object(p.jsxs)("label",{className:"centered",children:["csc(\u03b8) = ",e.trigValues.csc]})]})};i(41);var A=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),i=t[0],s=t[1],n=Object(c.useState)(null),a=Object(l.a)(n,2),r=a[0],h=a[1],o=Object(c.useState)({}),d=Object(l.a)(o,2),x=d[0],u=d[1],f=Object(c.useState)(!0),j=Object(l.a)(f,2),O=j[0],v=j[1],C=Object(c.useState)("degrees"),A=Object(l.a)(C,2),I=A[0],y=A[1],w=Object(c.useState)({cos:!0,sin:!0,tan:!0,cot:!0,sec:!0,csc:!0}),M=Object(l.a)(w,2),S=M[0],F=M[1],N=Object(c.useState)({axes:!0,degrees:!0,radians:!0,pi:!0,quadrants:!0,signs:!0}),Q=Object(l.a)(N,2),B=Q[0],D=Q[1],E=Object(c.useState)(0),V=Object(l.a)(E,2),P=V[0],R=V[1];Object(c.useEffect)((function(){document.title="Trig Assist"}),[]);var L=function(e){u({cos:Math.cos(e).toFixed(5),sin:Math.sin(e).toFixed(5),tan:Math.tan(e).toFixed(5),cot:(1/Math.tan(e)).toFixed(5),sec:(1/Math.cos(e)).toFixed(5),csc:(1/Math.sin(e)).toFixed(5)})};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"settings-menu",children:Object(p.jsx)(m,{degreeAngle:i,radianAngle:r,trigValues:x,handleDegreeAngleChange:function(e){var t=e.target.value;parseInt(t)>=0&&parseInt(t)<=360?(s(t),h(g(t).toFixed(5)),L(g(t))):console.log("ANGLE OUT OF BOUNDS"),R(P+1)},handleRadianAngleChange:function(e){var t=e.target.value;h(t),s(b(t).toFixed(0)),L(t),R(P+1)},handleAngleSelectionChange:function(e){v(e.target.checked),R(P+1)},handleAngleUnitChange:function(e){switch(e.target.value){case"degrees":y("degrees");break;case"radians":y("radians");break;case"none":y("none")}R(P+1)},handleTrigSelectionChange:function(e){var t=S;switch(e.target.id){case"cos-checkbox":t.cos=e.target.checked;break;case"sin-checkbox":t.sin=e.target.checked;break;case"tan-checkbox":t.tan=e.target.checked;break;case"cot-checkbox":t.cot=e.target.checked;break;case"sec-checkbox":t.sec=e.target.checked;break;case"csc-checkbox":t.csc=e.target.checked}F(t),R(P+1)},handleCircleDetailChange:function(e){var t=B;switch(e.target.id){case"axis-checkbox":t.axes=e.target.checked;break;case"degree-checkbox":t.degrees=e.target.checked;break;case"radian-checkbox":t.radians=e.target.checked;break;case"pi-checkbox":t.pi=e.target.checked;break;case"quadrant-checkbox":t.quadrants=e.target.checked;break;case"sign-checkbox":t.signs=e.target.checked}D(t),R(P+1)}})}),Object(p.jsx)("div",{className:"values-menu",children:Object(p.jsx)(T,{radianAngle:r,trigValues:x})}),Object(p.jsx)(k,{radianAngle:r,angleSelect:O,angleUnit:I,trigVisible:S,circleDetails:B,handleGraphRadianChange:function(e){h(e),s(b(e).toFixed(0)),L(e)},updateCount:P})]})},I=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,43)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),c(e),s(e),n(e),a(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),I()}},[[42,1,2]]]);
//# sourceMappingURL=main.3f31b5c8.chunk.js.map