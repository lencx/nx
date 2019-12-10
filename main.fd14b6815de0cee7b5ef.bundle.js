(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(module,exports,__webpack_require__){__webpack_require__(254),__webpack_require__(366),module.exports=__webpack_require__(367)},275:function(module,exports){},367:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(57);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(551),module)}.call(this,__webpack_require__(127)(module))},551:function(module,exports,__webpack_require__){var map={"./hooks/useDebounce.story.tsx":552,"./hooks/useToggle.story.tsx":553};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=551},552:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(76);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Hooks|useDebounce",module).add("Simple",(function(){var _useDebounce=Object(_hooks__WEBPACK_IMPORTED_MODULE_2__.a)({initCall:!0,payload:"test",callback:function callback(data){console.log("fetch api:",data)}},2e3),payload=_useDebounce.payload,setPayload=_useDebounce.setPayload;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{value:payload,type:"text",onChange:function onChange(e){return setPayload(e.target.value)}})})).add("Mulit Fields",(function(){var _useDebounce2=Object(_hooks__WEBPACK_IMPORTED_MODULE_2__.a)({payload:{language:"html"},callback:function callback(data){console.log("fetch api:",data)}},2e3),payload=_useDebounce2.payload,setPayload=_useDebounce2.setPayload;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select",{value:payload.language,onChange:function onChange(e){return setPayload({language:e.target.value})}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"js"},"JS"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"html"},"HTML"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"css"},"CSS")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",onChange:function onChange(e){return setPayload({query:e.target.value})}}))}))}.call(this,__webpack_require__(127)(module))},553:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _Users_zakj_github_nofwl_nx_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(58),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(57),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(76);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Hooks|useToggle",module).add("Simple",(function(){var _useToggle=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__.b)(!1),_useToggle2=Object(_Users_zakj_github_nofwl_nx_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useToggle,2),status=_useToggle2[0],toggle=_useToggle2[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:toggle},"toggle-","".concat(status))}))}.call(this,__webpack_require__(127)(module))},76:function(module,__webpack_exports__,__webpack_require__){"use strict";var defineProperty=__webpack_require__(252),slicedToArray=__webpack_require__(58),react=__webpack_require__(6);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function useDebounce(debounce,delay){var payload=debounce.payload,callback=debounce.callback,_debounce$initCall=debounce.initCall,initCall=void 0!==_debounce$initCall&&_debounce$initCall,timer=Object(react.useRef)(),_useReducer=Object(react.useReducer)((function(o,n){return _objectSpread({},o,{},n)}),{payload:payload,initCall:initCall}),_useReducer2=Object(slicedToArray.a)(_useReducer,2),state=_useReducer2[0],setState=_useReducer2[1];Object(react.useEffect)((function(){return timer.current=setTimeout((function(){state.initCall&&function handleCall(data){"function"==typeof callback&&callback(data)}(state.payload)}),delay),function(){return timer.current&&clearTimeout(timer.current)}}),[state.payload,delay]),Object(react.useEffect)((function(){state.initCall||setState({initCall:!0})}),[state.payload]);return{payload:state.payload,setPayload:function setPayload(data){"string"==typeof data&&setState({payload:data}),"object"==typeof data&&setState({payload:_objectSpread({},state.payload,{},data)})}}}function useToggle(status){var _useState=Object(react.useState)(status),_useState2=Object(slicedToArray.a)(_useState,2),state=_useState2[0],setState=_useState2[1];return[state,function toggle(){return setState(!state)}]}__webpack_require__.d(__webpack_exports__,"a",(function(){return useDebounce})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useToggle}))}},[[253,1,2]]]);
//# sourceMappingURL=main.fd14b6815de0cee7b5ef.bundle.js.map