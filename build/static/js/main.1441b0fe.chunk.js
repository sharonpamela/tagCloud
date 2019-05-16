(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,n,e){t.exports=e(60)},60:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(6),o=e.n(i),l=e(7),u=e(8),c=e(11),s=e(9),d=e(5),f=e(12),m=e(2),p=e(22),h=e(3);function b(){var t=Object(m.a)(["\n  display: grid;\n  justify-content: center;\n  align-items:center;\n"]);return b=function(){return t},t}function v(){var t=Object(m.a)(["\n  padding: 5px;\n  font-family: 'Roboto', sans-serif;\n"]);return v=function(){return t},t}var g=h.a.textarea(v()),j=h.a.div(b()),y=function(t){return r.a.createElement(j,null,r.a.createElement("label",null,t.title),r.a.createElement(g,{name:t.name,rows:t.rows,cols:t.cols,value:t.value,onChange:t.handleChange,placeholder:t.placeholder}))};function x(){var t=Object(m.a)(["\n  display: grid;\n  justify-content: center;\n"]);return x=function(){return t},t}function O(){var t=Object(m.a)(["\n  margin: 10px 10px 10px 10px;\n  padding: 5px;\n  cursor: pointer; \n"]);return O=function(){return t},t}var E=h.a.div(O()),w=h.a.div(x()),k=function(t){return r.a.createElement(w,null,r.a.createElement(E,{onClick:t.action},t.title))};function D(){var t=Object(m.a)(["\n    & {\n        border: 2px solid black;\n        background-color: white;\n        color: black;\n        margin: 4% 0%;\n        font-size: 20px;\n        cursor: pointer;\n    }\n    &:hover { \n        color:white;\n        border-color: #4CAF50;\n        background-color: #4CAF50;\n    }\n"]);return D=function(){return t},t}function T(){var t=Object(m.a)(["\n    display: grid;\n    justify-content: center;\n    align-items:center;\n    font-family: 'Roboto', sans-serif;\n    margin:5%;\n    "]);return T=function(){return t},t}var C=h.a.div(T()),F=h.a.div(D()),S=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(c.a)(this,Object(s.a)(n).call(this,t))).state={inputTxt:""},e.handleFormSubmit=e.handleFormSubmit.bind(Object(d.a)(e)),e.handleTextArea=e.handleTextArea.bind(Object(d.a)(e)),e}return Object(f.a)(n,t),Object(u.a)(n,[{key:"handleFormSubmit",value:function(t){t.preventDefault(),this.props.dataReturnHandler(this.state.inputTxt),this.setState({inputTxt:""})}},{key:"handleTextArea",value:function(t){var n=this,e=t.target.value;this.setState(function(t){return Object(p.a)({},t,{inputTxt:e})},function(){return console.log(n.state.inputTxt)})}},{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement(y,{title:"Generate a tagCloud!",rows:10,cols:50,value:this.state.inputTxt,name:"inputTxt",handleChange:this.handleTextArea,placeholder:"<< Enter or paste text here >> "}),r.a.createElement(F,null,r.a.createElement(k,{action:this.handleFormSubmit,title:"Generate"}))))}}]),n}(a.Component),A=e(21),R=e.n(A);function I(){var t=Object(m.a)(["\n    display: grid;\n    justify-content: center;\n    align-items:center; \n    font-family: 'Roboto', sans-serif;\n"]);return I=function(){return t},t}var G=h.a.div(I());function z(t){for(var n=[],e=t.rawData.toString().replace(/[\.,`'"\/#!$\^&\*;:{}=_`~()@\+\?><\[\]\+]/g,"").replace(/[0-9]+ +/g,""),a=(e=e.replace(/\s{2,}/g," ")).split(" "),i={},o=0;o<a.length;o++)void 0===i[a[o]]?i[a[o]]=1:i[a[o]]++;for(var l=0,u=Object.keys(i);l<u.length;l++){var c=u[l];n.push({text:c,value:i[c]})}return r.a.createElement(G,null,n.length>1?r.a.createElement(R.a,{data:n,fontSizeMapper:function(t){return 16*t.value},rotate:function(t){return t.value%360},width:500,height:400}):null)}function H(){var t=Object(m.a)(["\n  color:white;\n  border-color: #4CAF50;\n  background-color: #4CAF50;\n"]);return H=function(){return t},t}function J(){var t=Object(m.a)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto;\n  font-family: 'Roboto', sans-serif;\n"]);return J=function(){return t},t}var B=h.a.div(J()),M=h.a.div(H()),P=function(){return r.a.createElement(M,null,r.a.createElement(B,null,r.a.createElement("h1",null,"TagCloud Generator")))};function $(){var t=Object(m.a)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto;\n"]);return $=function(){return t},t}function _(){var t=Object(m.a)(["\n    padding: 20px;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: auto;\n    background-color: #f44336; /* Red */\n    color: white;\n    width:320px;\n    margin-bottom: 15px;\n    font-family: 'Roboto', sans-serif;\n"]);return _=function(){return t},t}var q=h.a.div(_()),K=h.a.div($()),L=function(){return r.a.createElement(K,null,r.a.createElement(q,null,"Please enter or paste text to generate a TagCloud."))};function N(){var t=Object(m.a)(["\n  margin:auto; \n"]);return N=function(){return t},t}function Q(){var t=Object(m.a)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto auto; \n  font-family: 'Roboto', sans-serif;\n  margin:3%;\n  @media (max-width: 700px) {\n    grid-template-columns: auto;\n  }\n"]);return Q=function(){return t},t}var U=h.a.div(Q()),V=h.a.div(N()),W=function(t){function n(){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(s.a)(n).call(this))).handleData=t.handleData.bind(Object(d.a)(t)),t.state={FormInputData:"",AlertDisplay:!1},t}return Object(f.a)(n,t),Object(u.a)(n,[{key:"handleData",value:function(t){var n=this;""===t&&(this.setState({AlertDisplay:!0}),setTimeout(function(){return n.setState({AlertDisplay:!1})},2e3)),this.setState({FormInputData:t})}},{key:"render",value:function(){return r.a.createElement(V,null,r.a.createElement(P,null),r.a.createElement(U,null,r.a.createElement(S,{dataReturnHandler:this.handleData}),""===this.state.FormInputData?null:r.a.createElement(z,{rawData:this.state.FormInputData})),!0===this.state.AlertDisplay?r.a.createElement(L,null):null)}}]),n}(a.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1441b0fe.chunk.js.map