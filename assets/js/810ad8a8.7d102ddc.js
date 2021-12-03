/*! For license information please see 810ad8a8.7d102ddc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[723],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5879:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7378),r(3905)),a=["components"],l={id:"Wizard.Step",title:"Wizard.Step",sidebar_label:"Step"},c=void 0,p={unversionedId:"components/layoutsAndTemplates/Wizard/Wizard.Step",id:"components/layoutsAndTemplates/Wizard/Wizard.Step",isDocsHomePage:!1,title:"Wizard.Step",description:"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",source:"@site/../docs/components/layoutsAndTemplates/Wizard/Wizard.Step.md",sourceDirName:"components/layoutsAndTemplates/Wizard",slug:"/components/layoutsAndTemplates/Wizard/Wizard.Step",permalink:"/docs/components/layoutsAndTemplates/Wizard/Wizard.Step",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layoutsAndTemplates/Wizard/Wizard.Step.md",tags:[],version:"current",frontMatter:{id:"Wizard.Step",title:"Wizard.Step",sidebar_label:"Step"},sidebar:"tutorialSidebar",previous:{title:"Wizard",permalink:"/docs/components/layoutsAndTemplates/Wizard/Wizard"},next:{title:"ChipsInput",permalink:"/docs/components/incubator/ChipsInput"}},s=[{value:"API",id:"api",children:[{value:"accessibilityInfo",id:"accessibilityinfo",children:[]},{value:"circleBackgroundColor",id:"circlebackgroundcolor",children:[]},{value:"circleColor",id:"circlecolor",children:[]},{value:"circleSize",id:"circlesize",children:[]},{value:"color",id:"color",children:[]},{value:"connectorStyle",id:"connectorstyle",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"icon",id:"icon",children:[]},{value:"indexLabelStyle",id:"indexlabelstyle",children:[]},{value:"label",id:"label",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"state",id:"state",children:[]}]}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/WizardScreen.tsx"},"(code example)")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/Wizard.gif?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/WizardPresets.png?raw=true"})),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"accessibilityinfo"},"accessibilityInfo"),(0,i.kt)("p",null,"Extra text to be read in accessibility mode",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"circlebackgroundcolor"},"circleBackgroundColor"),(0,i.kt)("p",null,"Circle's background color",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"circlecolor"},"circleColor"),(0,i.kt)("p",null,"Color of the circle",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"circlesize"},"circleSize"),(0,i.kt)("p",null,"The step's circle size (diameter)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"color"},"color"),(0,i.kt)("p",null,"Color of the step index (or of the icon, when provided)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"connectorstyle"},"connectorStyle"),(0,i.kt)("p",null,"Additional styles for the connector",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"enabled"},"enabled"),(0,i.kt)("p",null,"Whether the step should be enabled",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"icon"},"icon"),(0,i.kt)("p",null,"Icon to replace the (default) index",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageProps ")," "),(0,i.kt)("h3",{id:"indexlabelstyle"},"indexLabelStyle"),(0,i.kt)("p",null,"Additional styles for the index's label (when icon is not provided)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"label"},"label"),(0,i.kt)("p",null,"The label of the item",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"labelstyle"},"labelStyle"),(0,i.kt)("p",null,"Additional styles for the label",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"The state of the step (Wizard.States.X)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"WizardStepStates ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,l,c=o(e),p=1;p<arguments.length;p++){for(var s in a=Object(arguments[p]))r.call(a,s)&&(c[s]=a[s]);if(t){l=t(a);for(var u=0;u<l.length;u++)n.call(a,l[u])&&(c[l[u]]=a[l[u]])}}return c}},1535:function(e,t,r){var n=r(2525),o=60103,i=60106;var a=60109,l=60110,c=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),a=u("react.provider"),l=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function y(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}function h(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var v=k.prototype=new h;v.constructor=k,n(v,y.prototype),v.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,i={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,n)&&!S.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var p=Array(c),s=0;s<c;s++)p[s]=arguments[s+2];i.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:g.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+z(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),C(a,t,r,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(x,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=n+z(l=e[p],p);c+=C(l,t,r,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),p=0;!(l=e.next()).done;)c+=C(l=l.value,t,r,s=n+z(l,p++),a);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function N(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function W(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function T(){var e=P.current;if(null===e)throw Error(f(321));return e}},7378:function(e,t,r){r(1535)}}]);