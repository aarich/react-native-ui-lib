/*! For license information please see 13971e0a.4d9323ff.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[6768],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1137:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7378),r(3905)),a=["components"],c={sidebar_position:1,id:"Wizard",title:"Wizard",sidebar_label:"Wizard"},l=void 0,s={unversionedId:"components/layoutsAndTemplates/Wizard/Wizard",id:"components/layoutsAndTemplates/Wizard/Wizard",isDocsHomePage:!1,title:"Wizard",description:"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",source:"@site/../docs/components/layoutsAndTemplates/Wizard/Wizard.md",sourceDirName:"components/layoutsAndTemplates/Wizard",slug:"/components/layoutsAndTemplates/Wizard/Wizard",permalink:"/docs/components/layoutsAndTemplates/Wizard/Wizard",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layoutsAndTemplates/Wizard/Wizard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Wizard",title:"Wizard",sidebar_label:"Wizard"},sidebar:"tutorialSidebar",previous:{title:"TabPage",permalink:"/docs/components/layoutsAndTemplates/TabController/TabController.TabPage"},next:{title:"Step",permalink:"/docs/components/layoutsAndTemplates/Wizard/Wizard.Step"}},u=[{value:"API",id:"api",children:[{value:"activeConfig",id:"activeconfig",children:[]},{value:"activeIndex",id:"activeindex",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"onActiveIndexChanged",id:"onactiveindexchanged",children:[]},{value:"testID",id:"testid",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/WizardScreen.tsx"},"(code example)")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/Wizard.gif?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/WizardPresets.png?raw=true"})),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"activeconfig"},"activeConfig"),(0,i.kt)("p",null,"The configuration of the active step (see Wizard.Step.propTypes)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"WizardStepProps ")," "),(0,i.kt)("h3",{id:"activeindex"},"activeIndex"),(0,i.kt)("p",null,"The active step's index",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"Add or override style of the container",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"onactiveindexchanged"},"onActiveIndexChanged"),(0,i.kt)("p",null,"Callback that is called when the active step is changed (i.e. a step was clicked on). The new activeIndex will be the input of the callback",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(index: number) => void ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"The component test id",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,l=o(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))r.call(a,u)&&(l[u]=a[u]);if(t){c=t(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(l[c[p]]=a[c[p]])}}return l}},1535:function(e,t,r){var n=r(2525),o=60103,i=60106;var a=60109,c=60110,l=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=v.prototype=new h;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===i[n]&&(i[n]=l[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var z=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return a=a(l=e),e=""===n?"."+P(l,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(z,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(z,"$&/")+"/")+e)),t.push(a)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+P(c=e[s],s);l+=S(c,t,r,u,a)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),s=0;!(c=e.next()).done;)l+=S(c=c.value,t,r,u=n+P(c,s++),a);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function W(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function C(){var e=_.current;if(null===e)throw Error(f(321));return e}},7378:function(e,t,r){r(1535)}}]);