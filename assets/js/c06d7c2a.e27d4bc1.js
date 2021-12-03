/*! For license information please see c06d7c2a.e27d4bc1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[3066],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8721:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7378),n(3905)),a=["components"],l={id:"Button",title:"Button",sidebar_label:"Button"},u=void 0,c={unversionedId:"components/basic/Button",id:"components/basic/Button",isDocsHomePage:!1,title:"Button",description:"Customizable button component that handles press events",source:"@site/../docs/components/basic/Button.md",sourceDirName:"components/basic",slug:"/components/basic/Button",permalink:"/docs/components/basic/Button",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/basic/Button.md",tags:[],version:"current",frontMatter:{id:"Button",title:"Button",sidebar_label:"Button"},sidebar:"tutorialSidebar",previous:{title:"Badge",permalink:"/docs/components/basic/Badge"},next:{title:"Card",permalink:"/docs/components/basic/Card"}},p=[{value:"API",id:"api",children:[{value:"animateLayout",id:"animatelayout",children:[]},{value:"animateTo",id:"animateto",children:[]},{value:"avoidInnerPadding",id:"avoidinnerpadding",children:[]},{value:"avoidMinWidth",id:"avoidminwidth",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"color",id:"color",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"disabledBackgroundColor",id:"disabledbackgroundcolor",children:[]},{value:"enableShadow",id:"enableshadow",children:[]},{value:"fullWidth",id:"fullwidth",children:[]},{value:"getActiveBackgroundColor",id:"getactivebackgroundcolor",children:[]},{value:"hyperlink",id:"hyperlink",children:[]},{value:"iconOnRight",id:"icononright",children:[]},{value:"iconSource",id:"iconsource",children:[]},{value:"iconStyle",id:"iconstyle",children:[]},{value:"label",id:"label",children:[]},{value:"labelProps",id:"labelprops",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"link",id:"link",children:[]},{value:"linkColor",id:"linkcolor",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"outline",id:"outline",children:[]},{value:"outlineColor",id:"outlinecolor",children:[]},{value:"outlineWidth",id:"outlinewidth",children:[]},{value:"round",id:"round",children:[]},{value:"size",id:"size",children:[]},{value:"supportRTL",id:"supportrtl",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Customizable button component that handles press events",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ButtonsScreen.tsx"},"(code example)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This component extends ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/wix/react-native-ui-lib/blob/master/src/components/touchableOpacity/index.tsx"},"TouchableOpacity"))," props."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This component support ",(0,i.kt)("strong",{parentName:"p"},"margin, background")," modifiers."))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Sizes.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Typographies.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Outlines.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Corners.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Custom.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Inspirations.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Round.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Full.png?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Button/Button%20Animated.gif?raw=true"})),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"animatelayout"},"animateLayout"),(0,i.kt)("p",null,"should animate layout change. Note: For Android you must set 'setLayoutAnimationEnabledExperimental(true)' via RN's 'UIManager'",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"animateto"},"animateTo"),(0,i.kt)("p",null,"the direction of the animation ('left' and 'right' will effect the button's own alignment)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonAnimationDirection ")," "),(0,i.kt)("h3",{id:"avoidinnerpadding"},"avoidInnerPadding"),(0,i.kt)("p",null,"avoid inner button padding",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"avoidminwidth"},"avoidMinWidth"),(0,i.kt)("p",null,"avoid minimum width constraints",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,i.kt)("p",null,"Color of the button background",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"borderradius"},"borderRadius"),(0,i.kt)("p",null,"Custom border radius.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"color"},"color"),(0,i.kt)("p",null,"The Button text color (inherited from Text component)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"disabled"},"disabled"),(0,i.kt)("p",null,"Disable interactions for the component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"disabledbackgroundcolor"},"disabledBackgroundColor"),(0,i.kt)("p",null,"Color of the disabled button background",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"enableshadow"},"enableShadow"),(0,i.kt)("p",null,"Control shadow visibility (iOS-only)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"fullwidth"},"fullWidth"),(0,i.kt)("p",null,"should the button act as a coast to coast button (no border radius)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"getactivebackgroundcolor"},"getActiveBackgroundColor"),(0,i.kt)("p",null,"callback for getting activeBackgroundColor (e.g. (calculatedBackgroundColor, prop) => {...}). Better set using ThemeManager",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(backgroundColor: string, props: any) => string ")," "),(0,i.kt)("h3",{id:"hyperlink"},"hyperlink"),(0,i.kt)("p",null,"Button will look like a hyperlink",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"icononright"},"iconOnRight"),(0,i.kt)("p",null,"Should the icon be right to the label",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"iconsource"},"iconSource"),(0,i.kt)("p",null,"Icon image source or a callback function that returns a source",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageProps['source'] | Function ")," "),(0,i.kt)("h3",{id:"iconstyle"},"iconStyle"),(0,i.kt)("p",null,"Icon image style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageStyle ")," "),(0,i.kt)("h3",{id:"label"},"label"),(0,i.kt)("p",null,"Text to show inside the button",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"labelprops"},"labelProps"),(0,i.kt)("p",null,"Props that will be passed to the button's Text label.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextProps ")," "),(0,i.kt)("h3",{id:"labelstyle"},"labelStyle"),(0,i.kt)("p",null,"Additional styles for label text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"link"},"link"),(0,i.kt)("p",null,"Button will look like a link",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"linkcolor"},"linkColor"),(0,i.kt)("p",null,"label color for when it's displayed as link or hyperlink",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"onpress"},"onPress"),(0,i.kt)("p",null,"Actions handler",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(props: any) => void ")," "),(0,i.kt)("h3",{id:"outline"},"outline"),(0,i.kt)("p",null,"Button will have outline style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"outlinecolor"},"outlineColor"),(0,i.kt)("p",null,"The outline color",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"outlinewidth"},"outlineWidth"),(0,i.kt)("p",null,"The outline width",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"round"},"round"),(0,i.kt)("p",null,"should the button be a round button",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"size"},"size"),(0,i.kt)("p",null,"Size of the button ","[large, medium, small, xSmall]",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonSize ")," "),(0,i.kt)("h3",{id:"supportrtl"},"supportRTL"),(0,i.kt)("p",null,"whether the icon should flip horizontally on RTL locals",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,l,u=o(e),c=1;c<arguments.length;c++){for(var p in a=Object(arguments[c]))n.call(a,p)&&(u[p]=a[p]);if(t){l=t(a);for(var s=0;s<l.length;s++)r.call(a,l[s])&&(u[l[s]]=a[l[s]])}}return u}},1535:function(e,t,n){var r=n(2525),o=60103,i=60106;var a=60109,l=60110,u=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),i=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),a=s("react.provider"),l=s("react.context"),u=s("react.forward_ref"),s("react.suspense"),c=s("react.memo"),p=s("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||h}function f(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=k.prototype;var v=g.prototype=new f;v.constructor=g,r(v,k.prototype),v.isPureReactComponent=!0;var y={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,i={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:y.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===r?"."+B(u,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),j(a,t,n,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=r+B(l=e[c],c);u+=j(l,t,n,p,a)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),c=0;!(l=e.next()).done;)u+=j(l=l.value,t,n,p=r+B(l,c++),a);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function S(e,t,n){if(null==e)return e;var r=[],o=0;return j(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(m(321));return e}},7378:function(e,t,n){n(1535)}}]);