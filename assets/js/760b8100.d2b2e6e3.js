/*! For license information please see 760b8100.d2b2e6e3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[9252],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),l=(n(7378),n(3905)),o=["components"],a={id:"Drawer",title:"Drawer",sidebar_label:"Drawer"},p=void 0,u={unversionedId:"components/basic/Drawer",id:"components/basic/Drawer",isDocsHomePage:!1,title:"Drawer",description:"Drawer Component",source:"@site/../docs/components/basic/Drawer.md",sourceDirName:"components/basic",slug:"/components/basic/Drawer",permalink:"/docs/components/basic/Drawer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/basic/Drawer.md",tags:[],version:"current",frontMatter:{id:"Drawer",title:"Drawer",sidebar_label:"Drawer"},sidebar:"tutorialSidebar",previous:{title:"ConnectionStatusBar",permalink:"/docs/components/basic/ConnectionStatusBar"},next:{title:"ExpandableSection",permalink:"/docs/components/basic/ExpandableSection"}},s=[{value:"API",id:"api",children:[{value:"bounciness",id:"bounciness",children:[]},{value:"customValue",id:"customvalue",children:[]},{value:"disableHaptic",id:"disablehaptic",children:[]},{value:"fullLeftThreshold",id:"fullleftthreshold",children:[]},{value:"fullRightThreshold",id:"fullrightthreshold",children:[]},{value:"fullSwipeLeft",id:"fullswipeleft",children:[]},{value:"fullSwipeRight",id:"fullswiperight",children:[]},{value:"itemsIconSize",id:"itemsiconsize",children:[]},{value:"itemsMinWidth",id:"itemsminwidth",children:[]},{value:"itemsTextStyle",id:"itemstextstyle",children:[]},{value:"itemsTintColor",id:"itemstintcolor",children:[]},{value:"leftItem",id:"leftitem",children:[]},{value:"leftToggleHapticTrigger",id:"lefttogglehaptictrigger",children:[]},{value:"onDragStart",id:"ondragstart",children:[]},{value:"onFullSwipeLeft",id:"onfullswipeleft",children:[]},{value:"onFullSwipeRight",id:"onfullswiperight",children:[]},{value:"onSwipeableWillClose",id:"onswipeablewillclose",children:[]},{value:"onSwipeableWillOpen",id:"onswipeablewillopen",children:[]},{value:"onToggleSwipeLeft",id:"ontoggleswipeleft",children:[]},{value:"onWillFullSwipeLeft",id:"onwillfullswipeleft",children:[]},{value:"onWillFullSwipeRight",id:"onwillfullswiperight",children:[]},{value:"rightItems",id:"rightitems",children:[]},{value:"style",id:"style",children:[]},{value:"testID",id:"testid",children:[]},{value:"useNativeAnimations",id:"usenativeanimations",children:[]}]}],c={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Drawer Component",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/DrawerScreen.tsx"},"(code example)")),(0,l.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,l.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Drawer/Drawer.gif?raw=true"})),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"bounciness"},"bounciness"),(0,l.kt)("p",null,"The drawer animation bounciness",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,l.kt)("h3",{id:"customvalue"},"customValue"),(0,l.kt)("p",null,"Custom value of any type to pass on to the component and receive back in the action callbacks",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"any ")," "),(0,l.kt)("h3",{id:"disablehaptic"},"disableHaptic"),(0,l.kt)("p",null,"Whether to disable the haptic",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,l.kt)("h3",{id:"fullleftthreshold"},"fullLeftThreshold"),(0,l.kt)("p",null,"Threshold for a left full swipe (0-1)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,l.kt)("h3",{id:"fullrightthreshold"},"fullRightThreshold"),(0,l.kt)("p",null,"Threshold for a right full swipe (0-1)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,l.kt)("h3",{id:"fullswipeleft"},"fullSwipeLeft"),(0,l.kt)("p",null,"Whether to allow a full left swipe",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,l.kt)("h3",{id:"fullswiperight"},"fullSwipeRight"),(0,l.kt)("p",null,"Whether to allow a full right swipe",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,l.kt)("h3",{id:"itemsiconsize"},"itemsIconSize"),(0,l.kt)("p",null,"The items' icon size",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,l.kt)("h3",{id:"itemsminwidth"},"itemsMinWidth"),(0,l.kt)("p",null,"Set a different minimum width",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,l.kt)("h3",{id:"itemstextstyle"},"itemsTextStyle"),(0,l.kt)("p",null,"The items' text style",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,l.kt)("h3",{id:"itemstintcolor"},"itemsTintColor"),(0,l.kt)("p",null,"The color for the text and icon tint of the items",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,l.kt)("h3",{id:"leftitem"},"leftItem"),(0,l.kt)("p",null,"The bottom layer's item to appear when opened from the left (a single item)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ItemProps ")," "),(0,l.kt)("h3",{id:"lefttogglehaptictrigger"},"leftToggleHapticTrigger"),(0,l.kt)("p",null,"Haptic trigger callback to use onToggleSwipeLeft",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,l.kt)("h3",{id:"ondragstart"},"onDragStart"),(0,l.kt)("p",null,"Called when drag gesture starts",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => any ")," "),(0,l.kt)("h3",{id:"onfullswipeleft"},"onFullSwipeLeft"),(0,l.kt)("p",null,"Callback for left item full swipe",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,l.kt)("h3",{id:"onfullswiperight"},"onFullSwipeRight"),(0,l.kt)("p",null,"Callback for right item full swipe",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,l.kt)("h3",{id:"onswipeablewillclose"},"onSwipeableWillClose"),(0,l.kt)("p",null,"Callback for close action",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,l.kt)("h3",{id:"onswipeablewillopen"},"onSwipeableWillOpen"),(0,l.kt)("p",null,"Callback for open action",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,l.kt)("h3",{id:"ontoggleswipeleft"},"onToggleSwipeLeft"),(0,l.kt)("p",null,"Callback for left item toggle swipe",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => {rowWidth, leftWidth, dragX, resetItemPosition} ")," "),(0,l.kt)("h3",{id:"onwillfullswipeleft"},"onWillFullSwipeLeft"),(0,l.kt)("p",null,"Callback for just before left item full swipe",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,l.kt)("h3",{id:"onwillfullswiperight"},"onWillFullSwipeRight"),(0,l.kt)("p",null,"Callback for just before right item full swipe",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,l.kt)("h3",{id:"rightitems"},"rightItems"),(0,l.kt)("p",null,"The bottom layer's items to appear when opened from the right",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ItemProps[] ")," "),(0,l.kt)("h3",{id:"style"},"style"),(0,l.kt)("p",null,"Component's style",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,l.kt)("h3",{id:"testid"},"testID"),(0,l.kt)("p",null,"The test id for e2e tests",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,l.kt)("h3",{id:"usenativeanimations"},"useNativeAnimations"),(0,l.kt)("p",null,"Perform the animation in natively",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"boolean ")))}f.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,l){for(var o,a,p=i(e),u=1;u<arguments.length;u++){for(var s in o=Object(arguments[u]))n.call(o,s)&&(p[s]=o[s]);if(t){a=t(o);for(var c=0;c<a.length;c++)r.call(o,a[c])&&(p[a[c]]=o[a[c]])}}return p}},1535:function(e,t,n){var r=n(2525),i=60103,l=60106;var o=60109,a=60110,p=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),l=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),o=c("react.provider"),a=c("react.context"),p=c("react.forward_ref"),c("react.suspense"),u=c("react.memo"),s=c("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function k(){}function w(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var g=w.prototype=new k;g.constructor=w,r(g,b.prototype),g.isPureReactComponent=!0;var y={current:null},v=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,l={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,r)&&!N.hasOwnProperty(r)&&(l[r]=t[r]);var p=arguments.length-2;if(1===p)l.children=n;else if(1<p){for(var u=Array(p),s=0;s<p;s++)u[s]=arguments[s+2];l.children=u}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===l[r]&&(l[r]=p[r]);return{$$typeof:i,type:e,key:o,ref:a,props:l,_owner:y.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,r,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var p=!1;if(null===e)p=!0;else switch(a){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case i:case l:p=!0}}if(p)return o=o(p=e),e=""===r?"."+j(p,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),T(o,t,n,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+j(a=e[u],u);p+=T(a,t,n,s,o)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),u=0;!(a=e.next()).done;)p+=T(a=a.value,t,n,s=r+j(a,u++),o);else if("object"===a)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function x(e,t,n){if(null==e)return e;var r=[],i=0;return T(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function _(){var e=P.current;if(null===e)throw Error(d(321));return e}},7378:function(e,t,n){n(1535)}}]);