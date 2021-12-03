/*! For license information please see 9642c2b8.0a2b8236.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[9440],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6079:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7378),n(3905)),a=["components"],s={id:"Chip",title:"Chip",sidebar_label:"Chip"},l=void 0,p={unversionedId:"components/basic/Chip",id:"components/basic/Chip",isDocsHomePage:!1,title:"Chip",description:"Chip component",source:"@site/../docs/components/basic/Chip.md",sourceDirName:"components/basic",slug:"/components/basic/Chip",permalink:"/docs/components/basic/Chip",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/basic/Chip.md",tags:[],version:"current",frontMatter:{id:"Chip",title:"Chip",sidebar_label:"Chip"},sidebar:"tutorialSidebar",previous:{title:"Carousel",permalink:"/docs/components/basic/Carousel"},next:{title:"ConnectionStatusBar",permalink:"/docs/components/basic/ConnectionStatusBar"}},c=[{value:"API",id:"api",children:[{value:"avatarProps",id:"avatarprops",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"badgeProps",id:"badgeprops",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"dismissColor",id:"dismisscolor",children:[]},{value:"dismissContainerStyle",id:"dismisscontainerstyle",children:[]},{value:"dismissIcon",id:"dismissicon",children:[]},{value:"dismissIconStyle",id:"dismissiconstyle",children:[]},{value:"iconProps",id:"iconprops",children:[]},{value:"iconSource",id:"iconsource",children:[]},{value:"iconStyle",id:"iconstyle",children:[]},{value:"label",id:"label",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"leftElement",id:"leftelement",children:[]},{value:"onDismiss",id:"ondismiss",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"resetSpacings",id:"resetspacings",children:[]},{value:"rightElement",id:"rightelement",children:[]},{value:"rightIconSource",id:"righticonsource",children:[]},{value:"size",id:"size",children:[]},{value:"testID",id:"testid",children:[]},{value:"useCounter",id:"usecounter",children:[]},{value:"useSizeAsMinimum",id:"usesizeasminimum",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Chip component",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ChipScreen.tsx"},"(code example)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This component extends ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/wix/react-native-ui-lib/blob/master/src/components/touchableOpacity/index.tsx,https://github.com/wix/react-native-ui-lib/blob/master/src/components/view/index.tsx"},"TouchableOpacity, View"))," props."))),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.kt)("img",{style:{maxHeight:"420px"},src:"https://user-images.githubusercontent.com/1780255/119636022-e9743180-be1c-11eb-8f02-22eeab6558cd.png"})),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"avatarprops"},"avatarProps"),(0,o.kt)("p",null,"Avatar props object",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"AvatarProps ")," "),(0,o.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,o.kt)("p",null,"Background color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"badgeprops"},"badgeProps"),(0,o.kt)("p",null,"Badge props object",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"BadgeProps ")," "),(0,o.kt)("h3",{id:"borderradius"},"borderRadius"),(0,o.kt)("p",null,"Border radius",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,o.kt)("p",null,"Component's container style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"dismisscolor"},"dismissColor"),(0,o.kt)("p",null,"Dismiss color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"dismisscontainerstyle"},"dismissContainerStyle"),(0,o.kt)("p",null,"Dismiss container style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageStyle ")," "),(0,o.kt)("h3",{id:"dismissicon"},"dismissIcon"),(0,o.kt)("p",null,"Dismiss asset",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,o.kt)("h3",{id:"dismissiconstyle"},"dismissIconStyle"),(0,o.kt)("p",null,"Dismiss style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageStyle ")," "),(0,o.kt)("h3",{id:"iconprops"},"iconProps"),(0,o.kt)("p",null,"Additional icon props",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Omit<ImageProps, 'source'> ")," "),(0,o.kt)("h3",{id:"iconsource"},"iconSource"),(0,o.kt)("p",null,"Left icon's source",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,o.kt)("h3",{id:"iconstyle"},"iconStyle"),(0,o.kt)("p",null,"Icon style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageStyle ")," "),(0,o.kt)("h3",{id:"label"},"label"),(0,o.kt)("p",null,"Main Chip text",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"labelstyle"},"labelStyle"),(0,o.kt)("p",null,"Label's style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,o.kt)("h3",{id:"leftelement"},"leftElement"),(0,o.kt)("p",null,"Left custom element",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,o.kt)("h3",{id:"ondismiss"},"onDismiss"),(0,o.kt)("p",null,"Adds a dismiss button and serves as its callback",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(props: any) => void ")," "),(0,o.kt)("h3",{id:"onpress"},"onPress"),(0,o.kt)("p",null,"On Chip press callback",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(props: any) => void ")," "),(0,o.kt)("h3",{id:"resetspacings"},"resetSpacings"),(0,o.kt)("p",null,"Disables all internal elements default spacings. Helps reach a custom design",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"rightelement"},"rightElement"),(0,o.kt)("p",null,"Right custom element",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,o.kt)("h3",{id:"righticonsource"},"rightIconSource"),(0,o.kt)("p",null,"Right icon's source",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,o.kt)("h3",{id:"size"},"size"),(0,o.kt)("p",null,"Chip's size. Number or a width and height object",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number | {{width: number, height: number}} ")," "),(0,o.kt)("h3",{id:"testid"},"testID"),(0,o.kt)("p",null,"The test id for e2e tests",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"usecounter"},"useCounter"),(0,o.kt)("p",null,"Display badge as counter (no background)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"usesizeasminimum"},"useSizeAsMinimum"),(0,o.kt)("p",null,"Uses size as minWidth and minHeight",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,s,l=i(e),p=1;p<arguments.length;p++){for(var c in a=Object(arguments[p]))n.call(a,c)&&(l[c]=a[c]);if(t){s=t(a);for(var u=0;u<s.length;u++)r.call(a,s[u])&&(l[s[u]]=a[s[u]])}}return l}},1535:function(e,t,n){var r=n(2525),i=60103,o=60106;var a=60109,s=60110,l=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),a=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=y.prototype=new k;v.constructor=y,r(v,b.prototype),v.isPureReactComponent=!0;var g={current:null},N=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)N.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];o.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return a=a(l=e),e=""===r?"."+j(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),P(a,t,n,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=r+j(s=e[p],p);l+=P(s,t,n,c,a)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),p=0;!(s=e.next()).done;)l+=P(s=s.value,t,n,c=r+j(s,p++),a);else if("object"===s)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function x(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function E(){var e=I.current;if(null===e)throw Error(m(321));return e}},7378:function(e,t,n){n(1535)}}]);