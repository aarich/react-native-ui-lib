/*! For license information please see 965a7a7f.9c0c5e4e.js.LICENSE.txt */
(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[2168],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,y=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2254:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7378),r(3905)),i=["components"],c={sidebar_position:2,sidebar_label:"Usage",title:"Usage"},u=void 0,s={unversionedId:"getting-started/usage",id:"getting-started/usage",isDocsHomePage:!1,title:"Usage",description:"This is a quick example of how to use our basic components, modifiers and presets to generate a good looking screen.",source:"@site/../docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/docs/getting-started/usage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/getting-started/usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Usage",title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/getting-started/setup"},next:{title:"Migrating v4 -> v5",permalink:"/docs/getting-started/v5"}},l=[],f={toc:l};function p(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a quick example of how to use our basic components, modifiers and presets to generate a good looking screen.",(0,a.kt)("br",{parentName:"p"}),"\n","For detailed information please go over the other sections: ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundation/style"},"Style"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundation/modifiers"},"Modifiers"),", Components..."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"basic showcase",src:r(9238).default}),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, {Component} from \'react\';\nimport {View, TextField, Text, Button} from \'react-native-ui-lib\';\n\nexport default class Example extends Component {\n\n  render() {\n    return (\n      <View flex paddingH-25 paddingT-120>\n        <Text blue50 text20>Welcome</Text>\n        <TextField text50 placeholder="username" grey10/>\n        <TextField text50 placeholder="password" secureTextEntry grey10/>\n        <View marginT-100 center>\n          <Button text70 white background-orange30 label="Login"/>\n          <Button link text70 orange30 label="Sign Up" marginT-20/>\n        </View>\n      </View>\n    );\n  }\n}\n')))}p.isMDXComponent=!0},2525:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,u=o(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))r.call(i,l)&&(u[l]=i[l]);if(t){c=t(i);for(var f=0;f<c.length;f++)n.call(i,c[f])&&(u[c[f]]=i[c[f]])}}return u}},1535:function(e,t,r){"use strict";var n=r(2525),o=60103,a=60106;var i=60109,c=60110,u=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),i=f("react.provider"),c=f("react.context"),u=f("react.forward_ref"),f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=h.prototype=new b;v.constructor=h,n(v,m.prototype),v.isPureReactComponent=!0;var w={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+P(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+P(c=e[s],s);u+=S(c,t,r,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),s=0;!(c=e.next()).done;)u+=S(c=c.value,t,r,l=n+P(c,s++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function T(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function U(){var e=C.current;if(null===e)throw Error(d(321));return e}},7378:function(e,t,r){"use strict";r(1535)},9238:function(e,t,r){e.exports=r.p+"assets/images/basic-showcase-9c7e13e6a70ea34112635c8ceda70c0c.png"}}]);