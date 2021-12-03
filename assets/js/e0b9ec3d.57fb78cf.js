/*! For license information please see e0b9ec3d.57fb78cf.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[4463],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7378),n(3905)),i=["components"],l={sidebar_position:4,sidebar_label:"Migrating v5 -> v6",title:"Migrating v5 -> v6"},u=void 0,p={unversionedId:"getting-started/v6",id:"getting-started/v6",isDocsHomePage:!1,title:"Migrating v5 -> v6",description:"react-native-ui-lib@6.x.x",source:"@site/../docs/getting-started/v6.md",sourceDirName:"getting-started",slug:"/getting-started/v6",permalink:"/docs/getting-started/v6",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/getting-started/v6.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Migrating v5 -> v6",title:"Migrating v5 -> v6"},sidebar:"tutorialSidebar",previous:{title:"Migrating v4 -> v5",permalink:"/docs/getting-started/v5"},next:{title:"Style",permalink:"/docs/foundation/style"}},s=[{value:"<code>react-native-ui-lib@6.x.x</code>",id:"react-native-ui-lib6xx",children:[{value:"Presets",id:"presets",children:[]},{value:"Components",id:"components",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"react-native-ui-lib6xx"},(0,o.kt)("inlineCode",{parentName:"h2"},"react-native-ui-lib@6.x.x")),(0,o.kt)("h3",{id:"presets"},"Presets"),(0,o.kt)("h4",{id:"colors"},"Colors"),(0,o.kt)("p",null,"The colors of the palette were updated to more accessible ones.\nRenamed dark preset (dark10, dark20, ...) to grey (grey10, grey20, ...)"),(0,o.kt)("h4",{id:"shadows"},"Shadows"),(0,o.kt)("p",null,"Old shadow presets changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"Shadows.sh10.top/bottom"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Shadows.sh20.top/bottom")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"Shadows.sh30.top/bottom")),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("h4",{id:"typings"},"Typings"),(0,o.kt)("p",null,"Various components typings were renamed ('ComponentPropTypes' is now 'ComponentProps')"),(0,o.kt)("h4",{id:"selectablecomponent"},"SelectableComponent"),(0,o.kt)("p",null,"Component was removed"),(0,o.kt)("h4",{id:"animationmanager"},"AnimationManager"),(0,o.kt)("p",null,"Service was removed"),(0,o.kt)("h4",{id:"tagsinput"},"TagsInput"),(0,o.kt)("p",null,"Component was removed, please use ",(0,o.kt)("inlineCode",{parentName:"p"},"ChipsInput")," instead"),(0,o.kt)("h4",{id:"thememanager"},"ThemeManager"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ThemeManager.setTheme")," API was removed"),(0,o.kt)("h4",{id:"avatar"},"Avatar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isOnline")," removed (use badgeProps instead)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status")," removed (use badgeProps instead)")),(0,o.kt)("h4",{id:"badge"},"Badge"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"animationProps")," (please wrap with your own animated view)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testId")," (renamed ",(0,o.kt)("inlineCode",{parentName:"li"},"testID"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size")," will not accept enum 'BADGE_SIZES' anymore, pass a number instead  ")),(0,o.kt)("p",null,"See conversion map"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pimpleSmall -> 6\npimpleBig -> 10\npimpleHuge -> 14\nsmall -> 16\ndefault -> 20\nlarge -> 24\n")),(0,o.kt)("h4",{id:"cardimage"},"Card.Image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"imageSource")," (renamed ",(0,o.kt)("inlineCode",{parentName:"li"},"source"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"borderRadius")," (should be passed to the Card component)")),(0,o.kt)("h4",{id:"panningproviderdirection"},"PanningProviderDirection"),(0,o.kt)("p",null,"Renamed ",(0,o.kt)("inlineCode",{parentName:"p"},"PanningDirection")),(0,o.kt)("h4",{id:"keyboardtrackingview"},"KeyboardTrackingView"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSafeArea")," prop default value changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h4",{id:"react-native-animatable"},"react-native-animatable"),(0,o.kt)("p",null,"Dependency was removed"),(0,o.kt)("h4",{id:"stepper"},"Stepper"),(0,o.kt)("p",null,"New design and API."),(0,o.kt)("h4",{id:"progressbar"},"ProgressBar"),(0,o.kt)("p",null,"New design and API."),(0,o.kt)("h4",{id:"dialog"},"Dialog"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"onModalDismissed")," removed, use 'onDialogDismissed' instead"),(0,o.kt)("h4",{id:"cardsection"},"CardSection"),(0,o.kt)("p",null,"Removed ",(0,o.kt)("inlineCode",{parentName:"p"},"source"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"imageSource")),(0,o.kt)("h4",{id:"statescreen"},"StateScreen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removed ",(0,o.kt)("inlineCode",{parentName:"li"},"source"),", use ",(0,o.kt)("inlineCode",{parentName:"li"},"imageSource")," instead"),(0,o.kt)("li",{parentName:"ul"},"Removed ",(0,o.kt)("inlineCode",{parentName:"li"},"testId"),", use ",(0,o.kt)("inlineCode",{parentName:"li"},"testID"))),(0,o.kt)("h4",{id:"tabbaritem"},"TabBarItem"),(0,o.kt)("p",null,"Removed ",(0,o.kt)("inlineCode",{parentName:"p"},"badge"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"badgeProps")," instead"),(0,o.kt)("h4",{id:"tabcontroller"},"TabController"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The component has been re-implemented using reanimated v2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TabController.TabBar")," ",(0,o.kt)("inlineCode",{parentName:"li"},"childrend")," props is not supported anymore, pass ",(0,o.kt)("inlineCode",{parentName:"li"},"items")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"TabController")," instead "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Incubator.TabController")," removed")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,u=a(e),p=1;p<arguments.length;p++){for(var s in i=Object(arguments[p]))n.call(i,s)&&(u[s]=i[s]);if(t){l=t(i);for(var c=0;c<l.length;c++)r.call(i,l[c])&&(u[l[c]]=i[l[c]])}}return u}},1535:function(e,t,n){var r=n(2525),a=60103,o=60106;var i=60109,l=60110,u=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),o=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),l=c("react.context"),u=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),s=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function g(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var y=b.prototype=new v;y.constructor=b,r(y,g.prototype),y.isPureReactComponent=!0;var h={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var p=Array(u),s=0;s<u;s++)p[s]=arguments[s+2];o.children=p}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:h.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var j=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return i=i(u=e),e=""===r?"."+S(u,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),P(i,t,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=r+S(l=e[p],p);u+=P(l,t,n,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),p=0;!(l=e.next()).done;)u+=P(l=l.value,t,n,s=r+S(l,p++),i);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function _(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function D(){var e=T.current;if(null===e)throw Error(m(321));return e}},7378:function(e,t,n){n(1535)}}]);