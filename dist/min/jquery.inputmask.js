/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.32
*/
(function(e){if(void 0===e.fn.inputmask){var O=function(b){var e=document.createElement("input");b="on"+b;var c=b in e;c||(e.setAttribute(b,"return;"),c="function"==typeof e[b]);return c},C=function(b,d,c){return(b=c.aliases[b])?(b.alias&&C(b.alias,void 0,c),e.extend(!0,c,b),e.extend(!0,c,d),!0):!1},G=function(b){function d(c){function e(c,b,d,m){this.matches=[];this.isGroup=c||!1;this.isOptional=b||!1;this.isQuantifier=d||!1;this.isAlternator=m||!1;this.quantifier={min:1,max:1}}function d(c,e,m){var f=
b.definitions[e],S=0==c.matches.length;m=void 0!=m?m:c.matches.length;if(f&&!u){for(var p=f.prevalidator,q=p?p.length:0,w=1;w<f.cardinality;w++){var v=q>=w?p[w-1]:[],s=v.validator,v=v.cardinality;c.matches.splice(m++,0,{fn:s?"string"==typeof s?RegExp(s):new function(){this.test=s}:/./,cardinality:v?v:1,optionality:c.isOptional,newBlockMarker:S,casing:f.casing,def:f.definitionSymbol||e})}c.matches.splice(m++,0,{fn:f.validator?"string"==typeof f.validator?RegExp(f.validator):new function(){this.test=
f.validator}:/./,cardinality:f.cardinality,optionality:c.isOptional,newBlockMarker:S,casing:f.casing,def:f.definitionSymbol||e})}else c.matches.splice(m++,0,{fn:null,cardinality:0,optionality:c.isOptional,newBlockMarker:S,casing:null,def:e}),u=!1}for(var v=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,u=!1,s=new e,p,q=[],m=[];p=v.exec(c);)switch(p=p[0],p.charAt(0)){case b.optionalmarker.end:case b.groupmarker.end:var z=q.pop();0<q.length?q[q.length-1].matches.push(z):s.matches.push(z);
break;case b.optionalmarker.start:q.push(new e(!1,!0));break;case b.groupmarker.start:q.push(new e(!0));break;case b.quantifiermarker.start:z=new e(!1,!1,!0);p=p.replace(/[{}]/g,"");var A=p.split(",");p=isNaN(A[0])?A[0]:parseInt(A[0]);A=1==A.length?p:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"==A||"+"==A)p="*"==A?0:1;z.quantifier={min:p,max:A};if(0<q.length){A=q[q.length-1].matches;p=A.pop();if(!p.isGroup){var t=new e(!0);t.matches.push(p);p=t}A.push(p);A.push(z)}else p=s.matches.pop(),p.isGroup||(t=new e(!0),
t.matches.push(p),p=t),s.matches.push(p),s.matches.push(z);break;case b.escapeChar:u=!0;break;case b.alternatormarker:break;default:0<q.length?d(q[q.length-1],p):(0<s.matches.length&&(z=s.matches[s.matches.length-1],z.isGroup&&(z.isGroup=!1,d(z,b.groupmarker.start,0),d(z,b.groupmarker.end))),d(s,p))}0<s.matches.length&&m.push(s);return m}function c(c,w){if(b.numericInput&&!0!==b.multi){c=c.split("").reverse();for(var f=0;f<c.length;f++)c[f]==b.optionalmarker.start?c[f]=b.optionalmarker.end:c[f]==
b.optionalmarker.end?c[f]=b.optionalmarker.start:c[f]==b.groupmarker.start?c[f]=b.groupmarker.end:c[f]==b.groupmarker.end&&(c[f]=b.groupmarker.start);c=c.join("")}if(void 0!=c&&""!=c){if(0<b.repeat||"*"==b.repeat||"+"==b.repeat)c=b.groupmarker.start+c+b.groupmarker.end+b.quantifiermarker.start+("*"==b.repeat?0:"+"==b.repeat?1:b.repeat)+","+b.repeat+b.quantifiermarker.end;void 0==e.inputmask.masksCache[c]&&(e.inputmask.masksCache[c]={mask:c,maskToken:d(c),validPositions:{},_buffer:void 0,buffer:void 0,
tests:{},metadata:w});return e.extend(!0,{},e.inputmask.masksCache[c])}}var u=[];e.isFunction(b.mask)&&(b.mask=b.mask.call(this,b));e.isArray(b.mask)?e.each(b.mask,function(e,b){void 0!=b.mask?u.push(c(b.mask.toString(),b)):u.push(c(b.toString()))}):(1==b.mask.length&&!1==b.greedy&&0!=b.repeat&&(b.placeholder=""),u=void 0!=b.mask.mask?c(b.mask.mask.toString(),b.mask):c(b.mask.toString()));return u},da="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),
t=navigator.userAgent,ea=null!==t.match(/iphone/i),fa=null!==t.match(/android.*safari.*/i),ga=null!==t.match(/android.*chrome.*/i),ha=null!==t.match(/android.*firefox.*/i),ia=/Kindle/i.test(t)||/Silk/i.test(t)||/KFTT/i.test(t)||/KFOT/i.test(t)||/KFJWA/i.test(t)||/KFJWI/i.test(t)||/KFSOWI/i.test(t)||/KFTHWA/i.test(t)||/KFTHWI/i.test(t)||/KFAPWA/i.test(t)||/KFAPWI/i.test(t),U=O("paste")?"paste":O("input")?"input":"propertychange",E=function(b,d,c){function u(a,h,g){h=h||0;var e=[],b,k=0,r;do{if(!0===
a&&d.validPositions[k]){var m=d.validPositions[k];r=m.match;b=m.locator.slice();e.push(null==r.fn?r.def:!0===g?m.input:c.placeholder.charAt(k%c.placeholder.length))}else b=h>k?p(k,b,k-1)[0]:v(k,b,k-1),r=b.match,b=b.locator.slice(),e.push(null==r.fn?r.def:c.placeholder.charAt(k%c.placeholder.length));k++}while((void 0==I||k-1<I)&&null!=r.fn||null==r.fn&&""!=r.def||h>=k);e.pop();return e}function t(a){var c=d;c.buffer=void 0;c.tests={};!0!==a&&(c._buffer=void 0,c.validPositions={},c.p=-1)}function w(a){var h=
d,g=-1,b=h.validPositions;if(e.isFunction(c.getLastValidPosition))g=c.getLastValidPosition.call(n,h,a,c);else{void 0==a&&(a=-1);var h=g,l;for(l in b){var k=parseInt(l);if(-1==a||null!=b[k].match.fn)k<a&&(h=k),k>=a&&(g=k)}g=1<a-h||g<a?h:g}return g}function f(a,h,g){if(c.insertMode&&void 0!=d.validPositions[a]&&void 0==g){g=e.extend(!0,{},d.validPositions);var b=w(),l;for(l=a;l<=b;l++)delete d.validPositions[l];d.validPositions[a]=h;h=!0;for(l=a;l<=b;l++){a=g[l];if(void 0!=a){var k=null==a.match.fn?
l+1:D(l);h=s(k,a.match.def)?h&&!1!==C(k,a.input,!0,!0):!1}if(!h)break}if(!h)return d.validPositions=e.extend(!0,{},g),!1}else d.validPositions[a]=h;return!0}function v(a,h,g){a=p(a,h,g);var b;for(h=0;h<a.length&&(b=a[h],!c.greedy&&(!b.match||!1!==b.match.optionality&&!1!==b.match.newBlockMarker||!0===b.match.optionalQuantifier));h++);return b}function X(a){return d.validPositions[a]?d.validPositions[a].match:p(a)[0].match}function s(a,c){for(var g=!1,b=p(a),e=0;e<b.length;e++)if(b[e].match&&b[e].match.def==
c){g=!0;break}return g}function p(a,h,g){function b(h,g,d,l){function f(d,l,p){if(k==a&&void 0==d.matches)return r.push({match:d,locator:l.reverse()}),!0;if(void 0!=d.matches)if(d.isGroup&&!0!==p){if(d=f(h.matches[n+1],l))return!0}else if(d.isOptional){var J=d;if(d=b(d,g,l,p))d=r[r.length-1].match,(d=0==e.inArray(d,J.matches))&&(m=!0),k=a}else{if(!d.isAlternator)if(d.isQuantifier&&!0!==p)for(J=d,c.greedy=c.greedy&&!isNaN(J.quantifier.max),p=0<g.length&&!0!==p?g.shift():0;p<(isNaN(J.quantifier.max)?
p+1:J.quantifier.max)&&k<=a;p++){var q=h.matches[e.inArray(J,h.matches)-1];if(d=f(q,[p].concat(l),!0))if(d=r[r.length-1].match,d.optionalQuantifier=p>J.quantifier.min-1,d=0==e.inArray(d,q.matches))if(p>J.quantifier.min-1){m=!0;k=a;break}else return!0;else return!0}else if(d=b(d,g,l,p))return!0}else k++}for(var n=0<g.length?g.shift():0;n<h.matches.length;n++)if(!0!==h.matches[n].isQuantifier){var p=f(h.matches[n],[n].concat(d),l);if(p&&k==a)return p;if(k>a)break}}var l=d.maskToken,k=h?g:0;g=h||[0];
var r=[],m=!1;if(void 0==h){h=a-1;for(var f;void 0==(f=d.validPositions[h])&&-1<h;)h--;if(void 0!=f&&-1<h)k=h,g=f.locator.slice();else{for(h=a-1;void 0==(f=d.tests[h])&&-1<h;)h--;void 0!=f&&-1<h&&(k=h,g=f[0].locator.slice())}}for(h=g.shift();h<l.length&&!(b(l[h],g,[h])&&k==a||k>a);h++);(0==r.length||m)&&r.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return d.tests[a]=r}function q(){void 0==d._buffer&&(d._buffer=u(!1,1));return d._buffer}function m(){void 0==d.buffer&&
(d.buffer=u(!0,w(),!0));return d.buffer}function z(a,h){for(var g=m().slice(),b=a;b<h;b++)g[b]!=P(b)&&g[b]!=c.skipOptionalPartCharacter&&C(b,g[b],!0,!0)}function A(a,c){switch(c.casing){case "upper":a=a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function C(a,h,g,b){function l(a,h,b,g){var k=!1;e.each(p(a),function(l,x){for(var r=x.match,n=h?1:0,q="",v=m(),s=r.cardinality;s>n;s--)q+=void 0==d.validPositions[a-(s-1)]?P(a-(s-1)):d.validPositions[a-(s-1)].input;h&&(q+=h);k=null!=r.fn?
r.fn.test(q,v,a,b,c):h!=r.def&&h!=c.skipOptionalPartCharacter||""==r.def?!1:{c:r.def,pos:a};if(!1!==k){n=void 0!=k.c?k.c:h;n=n==c.skipOptionalPartCharacter&&null===r.fn?r.def:n;q=a;if(k.refreshFromBuffer){q=k.refreshFromBuffer;b=!0;!0===q?(d.validPositions={},d.tests={},z(0,m().length)):z(q.start,q.end);if(void 0==k.pos&&void 0==k.c)return k.pos=w(),!1;q=void 0!=k.pos?k.pos:a;x=p(q)[0]}else!0!==k&&k.pos!=a&&(q=k.pos,z(a,q),x=p(q)[0]);0<l&&t(!0);f(q,e.extend({},x,{input:A(n,r)}),g)||(k=!1);return!1}});
return k}g=!0===g;var k=l(a,h,g,b);if(!g&&!1===k){var r=d.validPositions[a];if(r&&null==r.match.fn&&(r.match.def==h||h==c.skipOptionalPartCharacter))k={caret:D(a)};else if((c.insertMode||void 0==d.validPositions[D(a)])&&!E(a))for(var r=a+1,n=D(a);r<=n;r++)if(k=l(r,h,g,b),!1!==k){a=r;break}}!0===k&&(k={pos:a});return k}function E(a){a=X(a);return null!=a.fn?a.fn:!1}function M(){var a;I=n.prop("maxLength");-1==I&&(I=void 0);if(!1==c.greedy){var h;h=w();a=d.validPositions[h];var b=void 0!=a?a.locator.slice():
void 0;for(h+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;h++)a=v(h,b,h-1),b=a.locator.slice();a=h}else a=m().length;return void 0==I||a<I?a:I}function D(a){var h=M();if(a>=h)return h;for(;++a<h&&!E(a)&&(!0!==c.nojumps||c.nojumpsThreshold>a););return a}function G(a){if(0>=a)return 0;for(;0<--a&&!E(a););return a}function F(a,c,b){a._valueSet(c.join(""));void 0!=b&&y(a,b)}function P(a,h){h=h||X(a);return null==h.fn?h.def:c.placeholder.charAt(a%c.placeholder.length)}function N(a,
c,b,x,l){x=void 0!=x?x.slice():ca(a._valueGet()).split("");t();c&&a._valueSet("");e.each(x,function(c,h){if(!0===l){var x=d.p,x=-1==x?x:G(x),f=-1==x?c:D(x);-1==e.inArray(h,q().slice(x+1,f))&&V.call(a,void 0,!0,h.charCodeAt(0),!1,b,c)}else V.call(a,void 0,!0,h.charCodeAt(0),!1,b,c),b=b||0<c&&c>d.p});c&&F(a,m(),e(a).is(":focus")?D(w(0)):void 0)}function O(a){return e.inputmask.escapeRegex.call(this,a)}function ca(a){return a.replace(RegExp("("+O(q().join(""))+")*$"),"")}function T(a){var c=m().slice(),
b,e=w(),l={},k=void 0!=d.validPositions[e]?d.validPositions[e].locator.slice():void 0,r;for(b=e+1;b<c.length;b++)r=v(b,k,b-1),k=r.locator.slice(),l[b]=r;for(b=c.length-1;b>e;b--)if(r=l[b].match,r.optionality&&c[b]==P(b,r))c.pop();else break;F(a,c)}function Y(a,b){if(!a.data("_inputmask")||!0!==b&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var g=[],x=d.validPositions,l;for(l in x)x[l].match&&null!=x[l].match.fn&&g.push(x[l].input);g=(B?g.reverse():g).join("");x=(B?m().reverse():m()).join("");
return e.isFunction(c.onUnMask)?c.onUnMask.call(a,x,g,c):g}function L(a){!B||"number"!=typeof a||c.greedy&&""==c.placeholder||(a=m().length-a);return a}function y(a,b,g){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof b){b=L(b);g=L(g);g="number"==typeof g?g:b;var d=e(a).data("_inputmask")||{};d.caret={begin:b,end:g};e(a).data("_inputmask",d);e(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==c.insertMode&&b==g&&g++,a.setSelectionRange?(a.selectionStart=b,a.selectionEnd=g):a.createTextRange&&(a=
a.createTextRange(),a.collapse(!0),a.moveEnd("character",g),a.moveStart("character",b),a.select()))}else return d=e(a).data("_inputmask"),!e(a).is(":visible")&&d&&void 0!=d.caret?(b=d.caret.begin,g=d.caret.end):a.setSelectionRange?(b=a.selectionStart,g=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),b=0-a.duplicate().moveStart("character",-1E5),g=b+a.text.length),b=L(b),g=L(g),{begin:b,end:g}}function Q(a){if(e.isFunction(c.isComplete))return c.isComplete.call(n,
a,c);if("*"!=c.repeat){var b=!1,g=G(M());if(w()==g)for(var b=!0,d=0;d<=g;d++){var l=E(d);if(l&&(void 0==a[d]||a[d]==P(d))||!l&&a[d]!=P(d)){b=!1;break}}return b}}function ja(a){a=e._data(a).events;e.each(a,function(a,c){e.each(c,function(a,c){if("inputmask"==c.namespace&&"setvalue"!=c.type){var b=c.handler;c.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return b.apply(this,arguments)}}})})}function ka(a){function c(a){if(void 0==e.valHooks[a]||!0!=e.valHooks[a].inputmaskpatch){var b=
e.valHooks[a]&&e.valHooks[a].get?e.valHooks[a].get:function(a){return a.value},h=e.valHooks[a]&&e.valHooks[a].set?e.valHooks[a].set:function(a,c){a.value=c;return a};e.valHooks[a]={get:function(a){var c=e(a);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");a=b(a);c=(c=c.data("_inputmask").maskset._buffer)?c.join(""):"";return a!=c?a:""}return b(a)},set:function(a,c){var b=e(a),d=h(a,c);b.data("_inputmask")&&b.triggerHandler("setvalue.inputmask");
return d},inputmaskpatch:!0}}}var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get){if(!a._valueGet){var d=b.get,l=b.set;a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){l.call(this,B?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=e(this),c=e(this).data("_inputmask");return c?c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=q().join("")?
d.call(this):"":d.call(this)},set:function(a){l.call(this,a);e(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?a._valueGet||(d=a.__lookupGetter__("value"),l=a.__lookupSetter__("value"),a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){l.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=e(this),c=e(this).data("_inputmask");return c?c.opts.autoUnmask?
a.inputmask("unmaskedvalue"):d.call(this)!=q().join("")?d.call(this):"":d.call(this)}),a.__defineSetter__("value",function(a){l.call(this,a);e(this).triggerHandler("setvalue.inputmask")})):(a._valueGet||(a._valueGet=function(){return B?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),c(a.type))}function Z(a,b,e){if(c.numericInput||B){switch(b){case c.keyCode.BACKSPACE:b=c.keyCode.DELETE;break;case c.keyCode.DELETE:b=c.keyCode.BACKSPACE}B&&
(a=e.end,e.end=e.begin,e.begin=a)}e.begin==e.end?b==c.keyCode.BACKSPACE?e.begin=G(e.begin):b==c.keyCode.DELETE&&e.end++:1!=e.end-e.begin||c.insertMode||b==c.keyCode.BACKSPACE&&e.begin--;a=e.begin;var f=e.end;for(b=a;a<f;a++)delete d.validPositions[a];for(a=f;a<=w();){var f=d.validPositions[a],l=d.validPositions[b];void 0!=f&&void 0==l?(s(b,f.match.def)&&!1!==C(b,f.input,!0)&&(delete d.validPositions[a],a++),b++):a++}for(b=w();0<b&&(void 0==d.validPositions[b]||null==d.validPositions[b].match.fn);)delete d.validPositions[b],
b--;t(!0);b=D(-1);w()<b?d.p=b:d.p=e.begin}function $(a){W=!1;var b=this,g=e(b),f=a.keyCode,l=y(b);f==c.keyCode.BACKSPACE||f==c.keyCode.DELETE||ea&&127==f||a.ctrlKey&&88==f?(a.preventDefault(),88==f&&(H=m().join("")),Z(b,f,l),F(b,m(),d.p),b._valueGet()==q().join("")&&g.trigger("cleared"),c.showTooltip&&g.prop("title",d.mask)):f==c.keyCode.END||f==c.keyCode.PAGE_DOWN?setTimeout(function(){var d=D(w());c.insertMode||d!=M()||a.shiftKey||d--;y(b,a.shiftKey?l.begin:d,d)},0):f==c.keyCode.HOME&&!a.shiftKey||
f==c.keyCode.PAGE_UP?y(b,0,a.shiftKey?l.begin:0):f==c.keyCode.ESCAPE||90==f&&a.ctrlKey?(N(b,!0,!1,H.split("")),g.click()):f!=c.keyCode.INSERT||a.shiftKey||a.ctrlKey?!1!=c.insertMode||a.shiftKey||(f==c.keyCode.RIGHT?setTimeout(function(){var a=y(b);y(b,a.begin)},0):f==c.keyCode.LEFT&&setTimeout(function(){var a=y(b);y(b,a.begin-1)},0)):(c.insertMode=!c.insertMode,y(b,c.insertMode||l.begin!=M()?l.begin:l.begin-1));var g=y(b),k=c.onKeyDown.call(this,a,m(),c);k&&!0===k.refreshFromBuffer&&(d.validPositions=
{},d.tests={},z(0,m().length),t(!0),F(b,m()),y(b,g.begin,g.end));aa=-1!=e.inArray(f,c.ignorables)}function V(a,b,g,n,l,k){if(void 0==g&&W)return!1;W=!0;var r=e(this);a=a||window.event;g=b?g:a.which||a.charCode||a.keyCode;if(!(!0===b||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||aa))return!0;if(g){!0!==b&&46==g&&!1==a.shiftKey&&","==c.radixPoint&&(g=44);var p;g=String.fromCharCode(g);b?(k=l?k:w()+1,k={begin:k,end:k}):k=y(this);var q=B?1<k.begin-k.end||1==k.begin-k.end&&c.insertMode:1<k.end-k.begin||
1==k.end-k.begin&&c.insertMode;q&&(d.undoPositions=e.extend(!0,{},d.validPositions),Z(this,c.keyCode.DELETE,k),c.insertMode||(c.insertMode=!c.insertMode,f(k.begin,l),c.insertMode=!c.insertMode),q=!c.multi);d.writeOutBuffer=!0;var s=k.begin,u=C(s,g,l);!1!==u&&(!0!==u&&(s=void 0!=u.pos?u.pos:s,g=void 0!=u.c?u.c:g),t(!0),void 0!=u.caret?p=u.caret:(l=d.validPositions,p=void 0!=l[s+1]&&v(k+1,l[s].locator.slice(),s).match.def!=l[s+1].match.def?s+1:D(s)),d.p=p);if(!1!==n){var A=this;setTimeout(function(){c.onKeyValidation.call(A,
u,c)},0);if(d.writeOutBuffer&&!1!==u){var z=m();F(this,z,b?void 0:c.numericInput?G(p):p);!0!==b&&setTimeout(function(){!0===Q(z)&&r.trigger("complete");R=!0;r.trigger("input")},0)}else q&&(d.buffer=void 0,d.validPositions=d.undoPositions)}else q&&(d.buffer=void 0,d.validPositions=d.undoPositions);c.showTooltip&&r.prop("title",d.mask);a&&!0!=b&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}}function la(a){var b=e(this),g=a.keyCode,f=m();(a=c.onKeyUp.call(this,a,f,c))&&!0===a.refreshFromBuffer&&
(d.validPositions={},d.tests={},z(0,m().length),t(!0),F(this,m()));g==c.keyCode.TAB&&c.showMaskOnFocus&&(b.hasClass("focus.inputmask")&&0==this._valueGet().length?(t(),f=m(),F(this,f),y(this,0),H=m().join("")):(F(this,f),y(this,L(0),L(M()))))}function ba(a){if(!0===R&&"input"==a.type)return R=!1,!0;var b=this,d=e(b);if("propertychange"==a.type&&b._valueGet().length<=M())return!0;setTimeout(function(){var a=e.isFunction(c.onBeforePaste)?c.onBeforePaste.call(b,b._valueGet(),c):b._valueGet();N(b,!0,
!1,a.split(""),!0);!0===Q(m())&&d.trigger("complete");d.click()},0)}function ma(a){if(!0===R&&"input"==a.type)return R=!1,!0;var b=y(this),d=this._valueGet(),d=d.replace(RegExp("("+O(q().join(""))+")*"),"");b.begin>d.length&&(y(this,d.length),b=y(this));1!=m().length-d.length||d.charAt(b.begin)==m()[b.begin]||d.charAt(b.begin+1)==m()[b.begin]||E(b.begin)||(a.keyCode=c.keyCode.BACKSPACE,$.call(this,a));a.preventDefault()}function na(a){n=e(a);if(n.is(":input")){n.data("_inputmask",{maskset:d,opts:c,
isRTL:!1});c.showTooltip&&n.prop("title",d.mask);ka(a);("rtl"==a.dir||c.rightAlign)&&n.css("text-align","right");if("rtl"==a.dir||c.numericInput){a.dir="ltr";n.removeAttr("dir");var b=n.data("_inputmask");b.isRTL=!0;n.data("_inputmask",b);B=!0}n.unbind(".inputmask");n.removeClass("focus.inputmask");n.closest("form").bind("submit",function(){H!=m().join("")&&n.change()}).bind("reset",function(){setTimeout(function(){n.trigger("setvalue")},0)});n.bind("mouseenter.inputmask",function(){!e(this).hasClass("focus.inputmask")&&
c.showMaskOnHover&&this._valueGet()!=m().join("")&&F(this,m())}).bind("blur.inputmask",function(){var a=e(this);if(a.data("_inputmask")){var b=this._valueGet(),d=m();a.removeClass("focus.inputmask");H!=m().join("")&&a.change();c.clearMaskOnLostFocus&&""!=b&&(b==q().join("")?this._valueSet(""):T(this));!1===Q(d)&&(a.trigger("incomplete"),c.clearIncomplete&&(t(),c.clearMaskOnLostFocus?this._valueSet(""):(d=q().slice(),F(this,d))))}}).bind("focus.inputmask",function(){var a=e(this),b=this._valueGet();
c.showMaskOnFocus&&!a.hasClass("focus.inputmask")&&(!c.showMaskOnHover||c.showMaskOnHover&&""==b)&&this._valueGet()!=m().join("")&&F(this,m(),D(w()));a.addClass("focus.inputmask");H=m().join("")}).bind("mouseleave.inputmask",function(){var a=e(this);c.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==q().join("")||""==this._valueGet()?this._valueSet(""):T(this)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=
y(a);m();if(b.begin==b.end){var b=B?L(b.begin):b.begin,c=w(b),c=D(c);b<c?E(b)?y(a,b):y(a,D(b)):y(a,c)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){y(a,0,D(w()))},0)}).bind(U+".inputmask dragdrop.inputmask drop.inputmask",ba).bind("setvalue.inputmask",function(){N(this,!0);H=m().join("");this._valueGet()==q().join("")&&this._valueSet("")}).bind("complete.inputmask",c.oncomplete).bind("incomplete.inputmask",c.onincomplete).bind("cleared.inputmask",c.oncleared);n.bind("keydown.inputmask",
$).bind("keypress.inputmask",V).bind("keyup.inputmask",la);if(fa||ha||ga||ia)"input"==U&&n.unbind(U+".inputmask"),n.bind("input.inputmask",ma);da&&n.bind("input.inputmask",ba);b=e.isFunction(c.onBeforeMask)?c.onBeforeMask.call(a,a._valueGet(),c):a._valueGet();N(a,!0,!1,b.split(""),!0);H=m().join("");var f;try{f=document.activeElement}catch(p){}f===a?(n.addClass("focus.inputmask"),y(a,D(w()))):c.clearMaskOnLostFocus?m().join("")==q().join("")?a._valueSet(""):T(a):F(a,m());ja(a)}}var B=!1,H,n,W=!1,
R=!1,aa=!1,I;if(void 0!=b)switch(b.action){case "isComplete":return n=e(b.el),d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,Q(b.buffer);case "unmaskedvalue":return n=b.$input,d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,B=b.$input.data("_inputmask").isRTL,Y(b.$input,b.skipDatepickerCheck);case "mask":H=m().join("");na(b.el);break;case "format":n=e({});n.data("_inputmask",{maskset:d,opts:c,isRTL:c.numericInput});c.numericInput&&(B=!0);var K=b.value.split("");N(n,!1,!1,B?
K.reverse():K,!0);return B?m().reverse().join(""):m().join("");case "isValid":return n=e({}),n.data("_inputmask",{maskset:d,opts:c,isRTL:c.numericInput}),c.numericInput&&(B=!0),K=b.value.split(""),N(n,!1,!0,B?K.reverse():K),Q(m());case "getemptymask":return n=e(b.el),d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,q();case "remove":b=b.el;n=e(b);d=n.data("_inputmask").maskset;c=n.data("_inputmask").opts;b._valueSet(Y(n));n.unbind(".inputmask");n.removeClass("focus.inputmask");n.removeData("_inputmask");
Object.getOwnPropertyDescriptor&&(K=Object.getOwnPropertyDescriptor(b,"value"));K&&K.get?b._valueGet&&Object.defineProperty(b,"value",{get:b._valueGet,set:b._valueSet}):document.__lookupGetter__&&b.__lookupGetter__("value")&&b._valueGet&&(b.__defineGetter__("value",b._valueGet),b.__defineSetter__("value",b._valueSet));try{delete b._valueGet,delete b._valueSet}catch(oa){b._valueGet=void 0,b._valueSet=void 0}}};e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",
end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,getLastValidPosition:void 0,rightAlign:!1,radixPoint:"",
definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0},masksCache:{},escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(b,d){var c=e.extend(!0,{},e.inputmask.defaults,d);C(c.alias,d,c);return E({action:"format",value:b},G(c),c)},isValid:function(b,d){var c=e.extend(!0,
{},e.inputmask.defaults,d);C(c.alias,d,c);return E({action:"isValid",value:b},G(c),c)}};e.fn.inputmask=function(b,d,c,u,t){function w(b,c){var d=e(b),f;for(f in c){var m=d.data("inputmask-"+f.toLowerCase());void 0!=m&&(c[f]=m)}return c}c=c||E;u=u||"_inputmask";var f=e.extend(!0,{},e.inputmask.defaults,d),v;if("string"===typeof b)switch(b){case "mask":return C(f.alias,d,f),v=G(f),0==v.length?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(v)&&c===E?v[0]:v),w(this,f))});
case "unmaskedvalue":return b=e(this),b.data(u)?c({action:"unmaskedvalue",$input:b}):b.val();case "remove":return this.each(function(){e(this).data(u)&&c({action:"remove",el:this})});case "getemptymask":return this.data(u)?c({action:"getemptymask",el:this}):"";case "hasMaskedValue":return this.data(u)?!this.data(u).opts.autoUnmask:!1;case "isComplete":return this.data(u)?c({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case "getmetadata":if(this.data(u))return v=this.data(u).maskset,
v.metadata;break;case "_detectScope":return C(f.alias,d,f),void 0==t||C(t,d,f)||-1!=e.inArray(t,"mask unmaskedvalue remove getemptymask hasMaskedValue isComplete getmetadata _detectScope".split(" "))||(f.mask=t),e.isFunction(f.mask)&&(f.mask=f.mask.call(this,f)),e.isArray(f.mask);default:return C(b,d,f)||(f.mask=b),v=G(f),void 0==v?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(v)&&c===E?v[0]:v),w(this,f))})}else{if("object"==typeof b)return f=e.extend(!0,{},e.inputmask.defaults,
b),C(f.alias,b,f),v=G(f),void 0==v?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(v)&&c===E?v[0]:v),w(this,f))});if(void 0==b)return this.each(function(){var b=e(this).attr("data-inputmask");if(b&&""!=b)try{var b=b.replace(RegExp("'","g"),'"'),s=e.parseJSON("{"+b+"}");e.extend(!0,s,d);f=e.extend(!0,{},e.inputmask.defaults,s);C(f.alias,s,f);f.alias=void 0;e(this).inputmask("mask",f,c)}catch(p){}})}}}})(jQuery);
