(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  dark: "#293176",
  purple: "#53549E",
  lavander: "#D1CAFF",
  lavanderDark: "#A5A1F3",
  purpleLight: "#7C79C8",
  white: "#ffffff",
  secondaryColor: "#00C895",
  gradientWarm: "linear-gradient(to bottom left, #293176, #893b82, #cf5079, #fb7d66, #ffb95a, #f9f871)",
  gradientCool: "linear-gradient(to top left, #293176, #00559e,  #0077b8,  #0099c1,  #00b9bb, #00d7a9)",
  gradientCoolButton: "linear-gradient(to top left, #00559e,  #00d7a9)",
  gradientBlueShades: "linear-gradient(to bottom, #293176, #53549e, #7c79c8, #a5a1f3, #d1caff)",
  gradientBlueShadesButton: "linear-gradient(to top left,#53549e,#d1caff)"
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-reveal");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ typography_H1; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ typography_H4; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ components_HomeLanding; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_GetToKnowMe; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Acronym; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ components_ToCome; });

// UNUSED EXPORTS: H2, H3, P, Subtitle, Tag, HeaderLink, MoreLink, PoetrySection

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/H1.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4;




var H1_H1 = function H1(props) {
  return /*#__PURE__*/external_react_default.a.createElement(H1Container, props, props.children);
};

var H1Container = external_styled_components_default.a.h1(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\nfont-family: 'Unica One', serif;\nposition:relative;\n  font-weight: ", ";\n  padding-bottom:", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin: 0;\n  color: ", ";\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.light ? 'normal' : '600';
}, function (props) {
  return props.noMargin ? '0' : '20px';
}, function (props) {
  return props.quotation ? '40px' : '36px';
}, function (props) {
  return props.quotation ? '46px' : '42px';
}, function (props) {
  return props.color ? props.color : props.white ? 'white' : 'initial';
}, function (props) {
  return props.cta && Object(external_styled_components_["css"])(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n    font-size:46px;\n    line-height:52px;\n    font-weight:500;\n  "])));
}, function (props) {
  return props.italic && Object(external_styled_components_["css"])(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n    font-style:italic;\n  "])));
}, function (props) {
  return props.xl && Object(external_styled_components_["css"])(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n    font-size: 52px;\n    line-height:58px;\n  "])));
});
/* harmony default export */ var typography_H1 = (H1_H1);
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(9);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/H2.js




var H2_templateObject;




var H2_H2 = function H2(_ref) {
  var children = _ref.children,
      white = _ref.white,
      color = _ref.color,
      props = objectWithoutProperties_default()(_ref, ["children", "white", "color"]);

  return /*#__PURE__*/external_react_default.a.createElement(H2Container, extends_default()({}, props, {
    white: white,
    color: color
  }), children);
};

var H2Container = external_styled_components_default.a.h2(H2_templateObject || (H2_templateObject = taggedTemplateLiteral_default()(["\nfont-family: 'Josefin Slab', serif;\n\n  display:flex;\n  align-items:center;\n  font-weight: ", ";\n  font-size: 26px;\n  line-height: 32px;\n  margin: 0;\n  color:", ";\n  >img {\n    margin-right:10px;\n  }\n"])), function (props) {
  return props.light ? "normal" : "600";
}, function (props) {
  return props.white ? props.theme.greyScale.white : props.color ? props.color : 'initial';
});
/* harmony default export */ var typography_H2 = (H2_H2);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/H3.js



var H3_templateObject, H3_templateObject2;




var H3_H3 = function H3(_ref) {
  var props = extends_default()({}, _ref);

  return /*#__PURE__*/external_react_default.a.createElement(H3Container, props, props.children);
};

var H3Container = external_styled_components_default.a.h3(H3_templateObject || (H3_templateObject = taggedTemplateLiteral_default()(["\nfont-family: 'Josefin Slab', serif;\n\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 25px;\n  margin: 0;\n  ", ";\n  color:", ";\n"])), function (props) {
  return props.uppercase && Object(external_styled_components_["css"])(H3_templateObject2 || (H3_templateObject2 = taggedTemplateLiteral_default()(["text-transform:uppercase"])));
}, function (props) {
  return props.white ? props.theme.greyScale.white : props.color ? props.color : 'initial';
});
/* harmony default export */ var typography_H3 = (H3_H3);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/H4.js



var H4_templateObject, H4_templateObject2;




var H4_H4 = function H4(_ref) {
  var props = extends_default()({}, _ref);

  return /*#__PURE__*/external_react_default.a.createElement(H4Container, props, props.children);
};

var H4Container = external_styled_components_default.a.h4(H4_templateObject || (H4_templateObject = taggedTemplateLiteral_default()(["\n  font-family: \"Open Sans\", sans-serif;\n\n  font-weight: 300;\n  font-size: 22px;\n  line-height: 25px;\n  margin: 0;\n  ", ";\n  color: ", ";\n"])), function (props) {
  return props.uppercase && Object(external_styled_components_["css"])(H4_templateObject2 || (H4_templateObject2 = taggedTemplateLiteral_default()(["\n      text-transform: uppercase;\n    "])));
}, function (props) {
  return props.white ? props.theme.white : props.color ? props.color : "initial";
});
/* harmony default export */ var typography_H4 = (H4_H4);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/P.js



var P_templateObject, P_templateObject2, P_templateObject3, P_templateObject4, _templateObject5;




var P_P = function P(props) {
  return /*#__PURE__*/external_react_default.a.createElement(PContainer, extends_default()({}, props, {
    onClick: props.onClick
  }), props.children);
};

var PContainer = external_styled_components_default.a.p(P_templateObject || (P_templateObject = taggedTemplateLiteral_default()(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: 1px;\n  color: ", ";\n  margin: 0;\n  text-transform: ", ";\n  ", "\n\n  ", "\n\n  ", "\n    ", "\n"])), function (props) {
  return props.bold ? "600" : props.superBold ? "bold" : "normal";
}, function (props) {
  return props.small ? "16px" : props.xSmall ? "12px" : "18px";
}, function (props) {
  return props.wide ? "34px" : props.span ? "18px" : "24px";
}, function (props) {
  return props.white ? "white" : props.opaque ? props.theme.greyScale.grey3 : props.color ? props.color : "initial";
}, function (props) {
  return props.uppercase && "uppercase";
}, function (props) {
  return props.small && props.wide && Object(external_styled_components_["css"])(P_templateObject2 || (P_templateObject2 = taggedTemplateLiteral_default()(["\n      font-size: 16px;\n      line-height: 30px;\n    "])));
}, function (props) {
  return props.padding && Object(external_styled_components_["css"])(P_templateObject3 || (P_templateObject3 = taggedTemplateLiteral_default()(["\n      padding: ", ";\n    "])), function (props) {
    return props.padding;
  });
}, function (props) {
  return props.underline && Object(external_styled_components_["css"])(P_templateObject4 || (P_templateObject4 = taggedTemplateLiteral_default()(["\n      text-decoration: underline;\n      cursor: pointer;\n    "])));
}, function (props) {
  return props.italic && Object(external_styled_components_["css"])(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n      font-style: italic;\n    "])));
});
/* harmony default export */ var typography_P = (P_P);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/Subtitle.js


var Subtitle_templateObject;




var Subtitle_Subtitle = function Subtitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement(SubtitleContainer, null, children);
};

var SubtitleContainer = external_styled_components_default.a.p(Subtitle_templateObject || (Subtitle_templateObject = taggedTemplateLiteral_default()(["\n  font-weight: 600;\n  color: ", ";\n  font-size: 26px;\n  line-height: 30px;\n  margin: 0;\n"])), function (props) {
  return props.theme.greyScale.grey3;
});
/* harmony default export */ var typography_Subtitle = (Subtitle_Subtitle);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/Tag.js


var Tag_templateObject, Tag_templateObject2, Tag_templateObject3;




var Tag_Tag = function Tag(props) {
  return /*#__PURE__*/external_react_default.a.createElement(TagContainer, props, props.children, props.download && /*#__PURE__*/external_react_default.a.createElement(Icon, {
    src: "/svg/download.svg"
  }));
};

var TagContainer = external_styled_components_default.a.p(Tag_templateObject || (Tag_templateObject = taggedTemplateLiteral_default()(["\nz-index:1;\n  font-weight: 600;\n  text-transform:uppercase;\n  font-size: 16px;\n  line-height:18px;\n  padding:6px 15px;\n  border-radius:4px;\n  color: ", ";\n  background-color:   ", ";\n  display:inline-block;\n  border:", ";\n  margin: ", ";\n  ", "\n"])), function (props) {
  return props.color && props.color;
}, function (props) {
  return props.backgroundColor && props.backgroundColor;
}, function (props) {
  return props.border && '1px solid currentColor';
}, function (props) {
  return props.margin ? '15px 0' : '0';
}, function (props) {
  return props.download && Object(external_styled_components_["css"])(Tag_templateObject2 || (Tag_templateObject2 = taggedTemplateLiteral_default()(["\n    text-transform:none;\n    cursor:pointer;\n    transition:0.1s ease-in;\n    &:hover {\n      box-shadow:", ";\n    }\n  "])), function (props) {
    return props.theme.boxShadowS;
  });
});
var Icon = external_styled_components_default.a.img(Tag_templateObject3 || (Tag_templateObject3 = taggedTemplateLiteral_default()(["\nmargin-left:10px;"])));
/* harmony default export */ var typography_Tag = (Tag_Tag);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/HeaderLink.js




var HeaderLink_templateObject, HeaderLink_templateObject2, HeaderLink_templateObject3;




var HeaderLink_HeaderLink = function HeaderLink(_ref) {
  var children = _ref.children,
      white = _ref.white,
      focused = _ref.focused,
      marginTop = _ref.marginTop,
      props = objectWithoutProperties_default()(_ref, ["children", "white", "focused", "marginTop"]);

  return /*#__PURE__*/external_react_default.a.createElement(HeaderLinkContainer, extends_default()({}, props, {
    marginTop: marginTop,
    white: white,
    focused: focused
  }), children);
};

var HeaderLinkContainer = external_styled_components_default.a.p(HeaderLink_templateObject || (HeaderLink_templateObject = taggedTemplateLiteral_default()(["\nfont-family: 'Unica One', cursive;\n\n  font-weight: 600;\n  font-size: 20px;\n  line-height:23px;\n  margin: 0;\n  position:relative;\n  display:inline-block;\n  cursor:pointer;\n  &:hover a {\n    color: ", ";\n  }\n  a {\nfont-family: 'Unica One', cursive;\n\n    text-decoration:none;\n    color: ", ";\n    transition: all 0.1s ease-in;\n    padding: 20px 30px;\n\n  }\n  ", "\n  ", "\n\n  \n"])), function (props) {
  return props.white ? props.theme.white : props.theme.lavander;
}, function (props) {
  return props.white && props.focused ? props.theme.white : props.focused ? props.theme.lavander : props.white ? props.theme.white : props.theme.lavander;
}, function (props) {
  return props.focused && Object(external_styled_components_["css"])(HeaderLink_templateObject2 || (HeaderLink_templateObject2 = taggedTemplateLiteral_default()(["\n    &:before {\n        position:absolute;\n        left:50%;\n        transform: translatX(-50%);\n        top:120%;\n        height:5px;\n        width:5px;\n        border-radius:50%;\n        content:'';\n        background-color:", ";\n    }\n  "])), function (props) {
    return props.theme.white;
  });
}, function (props) {
  return props.marginTop && Object(external_styled_components_["css"])(HeaderLink_templateObject3 || (HeaderLink_templateObject3 = taggedTemplateLiteral_default()(["\n    margin: 10px 0;\n  "])));
});
/* harmony default export */ var typography_HeaderLink = (HeaderLink_HeaderLink);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/typography/MoreLink.js


var MoreLink_templateObject;




var MoreLink_MoreLink = function MoreLink(_ref) {
  var children = _ref.children,
      white = _ref.white,
      color = _ref.color;
  return /*#__PURE__*/external_react_default.a.createElement(MoreLinkContainer, {
    color: color,
    white: white
  }, children);
};

var MoreLinkContainer = external_styled_components_default.a.a(MoreLink_templateObject || (MoreLink_templateObject = taggedTemplateLiteral_default()(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 18px;\n  color: ", ";\n  margin: 0;\n  text-decoration: ", ";\n  cursor: pointer;\n"])), function (props) {
  return props.white ? props.theme.greyScale.white : props.color ? props.color : props.theme.uiSecondaryColors.accentBlue;
}, function (props) {
  return props.underlined ? "underline" : "none";
});
/* harmony default export */ var typography_MoreLink = (MoreLink_MoreLink);
// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: /Users/mariaburlando/Desktop/maria_website/src/styles/theme.js
var theme = __webpack_require__(3);

// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(4);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/HomeLanding.js



var HomeLanding_templateObject, HomeLanding_templateObject2, HomeLanding_templateObject3, HomeLanding_templateObject4, HomeLanding_templateObject5, _templateObject6, _templateObject7;






var HomeLanding_HomeLanding = function HomeLanding() {
  var _useState = Object(external_react_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      stars = _useState2[0],
      setStars = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var starsToAdd = [];

    for (var i = 0; i < 100; i++) {
      var randomSize = Math.floor(Math.random() * 6 + 1);
      var randomTop = Math.floor(Math.random() * height + 1);
      var randomLeft = Math.floor(Math.random() * width + 1);
      var randomOpacity = Math.floor(Math.random() * 10 + 5) / 10;
      var randomDuration = Math.floor(Math.random() * 20 + 5) / 10;
      var randomColor = Math.floor(Math.random() * 360 + 1);
      var revOrNot = Math.floor(Math.random() * 2 + 1);
      var rev = "normal";
      if (revOrNot == 1) rev = "reverse";
      console.log(i);
      starsToAdd.push( /*#__PURE__*/external_react_default.a.createElement(Star, {
        style: {
          backgroundColor: "hsl(".concat(randomColor, ",100%,90%)"),
          top: "".concat(randomTop, "px"),
          left: "".concat(randomLeft, "px"),
          opacity: "".concat(randomOpacity),
          animationDirection: "".concat(rev),
          width: "".concat(randomSize, "px"),
          height: "".concat(randomSize, "px"),
          animation: "pulse linear ".concat(randomDuration, "s infinite ").concat(randomOpacity, "s")
        }
      }));
      setStars(starsToAdd);
    }
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(MainContainer, null, /*#__PURE__*/external_react_default.a.createElement(Gradient1, null), /*#__PURE__*/external_react_default.a.createElement(Gradient2, null), /*#__PURE__*/external_react_default.a.createElement(Gradient3, null), stars, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Fade"], {
    top: true,
    duration: 1000
  }, /*#__PURE__*/external_react_default.a.createElement(MariaBurlando, null, "Maria Burlando")), /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Fade"], {
    delay: 700,
    duration: 2000,
    bottom: true
  }, /*#__PURE__*/external_react_default.a.createElement(Role, null, "/DEVELOPER /DESIGNER /DREAMER"))));
};

var MainContainer = external_styled_components_default.a.div(HomeLanding_templateObject || (HomeLanding_templateObject = taggedTemplateLiteral_default()(["\n  width: 100%;\n  left: 0;\n  top: 0px;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 12px;\n"])));
var Gradient1 = external_styled_components_default.a.div(HomeLanding_templateObject2 || (HomeLanding_templateObject2 = taggedTemplateLiteral_default()(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: ", ";\n  top: 0;\n  left: 0;\n  z-index: -1;\n  animation: gradient1 15s linear infinite;\n"])), function (props) {
  return props.theme.gradientBlueShades;
});
var Gradient2 = external_styled_components_default.a.div(HomeLanding_templateObject3 || (HomeLanding_templateObject3 = taggedTemplateLiteral_default()(["\n  background: ", ";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  animation: gradient2 15s linear infinite;\n"])), function (props) {
  return props.theme.gradientWarm;
});
var Gradient3 = external_styled_components_default.a.div(HomeLanding_templateObject4 || (HomeLanding_templateObject4 = taggedTemplateLiteral_default()(["\n  background: ", ";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: -3;\n"])), function (props) {
  return props.theme.gradientCool;
});
var Star = external_styled_components_default.a.div(HomeLanding_templateObject5 || (HomeLanding_templateObject5 = taggedTemplateLiteral_default()(["\n  border-radius: 50%;\n  box-shadow: 0 0 20px white;\n  position: absolute;\n"])));
var MariaBurlando = external_styled_components_default.a.p(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n  font-family: \"Italiana\", serif;\n  color: white;\n  font-size: 80px;\n  text-align: center;\n\n  @media (min-width: 600px) {\n    font-size: 150px;\n  }\n"])));
var Role = external_styled_components_default.a.p(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n  text-align: center;\n  color: white;\n  color: ", ";\n  animation: appear 1s ease-in-out forwards;\n  margin: 0;\n\n  @media (min-width: 600px) {\n    text-align: right;\n    margin-top: -1rem;\n  }\n  @keyframes slideIn {\n    0% {\n      opacity: 0;\n      margin-bottom: 100px;\n    }\n    100% {\n      opacity: 1;\n      margin-bottom: 0px;\n    }\n  }\n\n  @keyframes appear {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @keyframes gradient1 {\n    0% {\n      opacity: 1;\n    }\n    16% {\n      opacity: 1;\n    }\n    32% {\n      opacity: 0;\n    }\n    76% {\n      opacity: 0;\n    }\n    92% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes gradient2 {\n    0% {\n      opacity: 1;\n    }\n    48% {\n      opacity: 1;\n    }\n    64% {\n      opacity: 0;\n    }\n    92% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @keyframes pulse {\n    from {\n      transform: rotate(0deg) translateX(1px) rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg) translateX(1px) rotate(-360deg);\n    }\n  }\n"])), function (props) {
  return props.theme.white;
});
/* harmony default export */ var components_HomeLanding = (HomeLanding_HomeLanding);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/Button.js


var Button_templateObject, Button_templateObject2, Button_templateObject3, Button_templateObject4, Button_templateObject5, Button_templateObject6, Button_templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;




var Button_Button = function Button(props) {
  return /*#__PURE__*/external_react_default.a.createElement(ButtonContainer, props, props.icon && /*#__PURE__*/external_react_default.a.createElement(Button_Icon, {
    src: props.icon
  }), props.children);
};

var Button_Icon = external_styled_components_default.a.img(Button_templateObject || (Button_templateObject = taggedTemplateLiteral_default()(["\n  width: 20px;\n  display: inline;\n  margin-right: 10px;\n"])));
var ButtonContainer = external_styled_components_default.a.button(Button_templateObject2 || (Button_templateObject2 = taggedTemplateLiteral_default()(["\n  z-index: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 44px;\n  padding: 0 24px;\n  border-radius: 22px;\n  border: none;\n  outline: none;\n  color: ", ";\n  background: ", ";\n  transition: all 0.2s ease-out;\n  margin: 0;\n  width: ", ";\n  &:hover {\n    color: ", ";\n    background: ", ";\n    transform: translateY(-5px);\n  }\n  ", "\n  ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\n    ", "\n\n    \n\n    ", "\n"])), function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.gradientBlueShadesButton;
}, function (props) {
  return props.noStretch ? "initial" : "100%";
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.center && Object(external_styled_components_["css"])(Button_templateObject3 || (Button_templateObject3 = taggedTemplateLiteral_default()(["\n      margin-left: auto;\n      margin-right: auto;\n    "])));
}, function (props) {
  return props.margin && Object(external_styled_components_["css"])(Button_templateObject4 || (Button_templateObject4 = taggedTemplateLiteral_default()(["\n      margin-top: 20px;\n      margin-bottom: 10px;\n    "])));
}, function (props) {
  return props.color && Object(external_styled_components_["css"])(Button_templateObject5 || (Button_templateObject5 = taggedTemplateLiteral_default()(["\n      color: ", ";\n      &:hover {\n        color: ", ";\n      }\n    "])), function (props) {
    return props.color;
  }, function (props) {
    return props.color;
  });
}, function (props) {
  return props.full && Object(external_styled_components_["css"])(Button_templateObject6 || (Button_templateObject6 = taggedTemplateLiteral_default()(["\n      color: ", ";\n      background: ", ";\n      &:hover {\n        color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
    return props.theme.white;
  }, function (props) {
    return props.theme.secondaryColor;
  }, function (props) {
    return props.color;
  }, function (props) {
    return props.theme.dark;
  });
}, function (props) {
  return props.transparent && Object(external_styled_components_["css"])(Button_templateObject7 || (Button_templateObject7 = taggedTemplateLiteral_default()(["\n      color: rgba(255, 255, 255, 0.8);\n      background: transparent;\n      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);\n      &:hover {\n        color: ", ";\n        background: ", ";\n        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);\n      }\n\n      ", "\n    "])), function (props) {
    return props.theme.dark;
  }, function (props) {
    return props.theme.white;
  }, function (props) {
    return props.noHover && Object(external_styled_components_["css"])(_templateObject8 || (_templateObject8 = taggedTemplateLiteral_default()(["\n          &:hover {\n            color: ", ";\n            background: transparent;\n            box-shadow: inset 0 0 0 2px ", ";\n          }\n        "])), function (props) {
      return props.theme.white;
    }, function (props) {
      return props.theme.white;
    });
  });
}, function (props) {
  return props.white && Object(external_styled_components_["css"])(_templateObject9 || (_templateObject9 = taggedTemplateLiteral_default()(["\n      box-shadow: inset 0 0 0 2px ", ";\n      &:hover {\n        background: ", ";\n        box-shadow: inset 0 0 0 2px ", ",\n          ", ";\n        transform: translateY(-5px);\n      }\n    "])), function (props) {
    return props.theme.white;
  }, function (props) {
    return props.theme.white;
  }, function (props) {
    return props.theme.white;
  }, function (props) {
    return props.theme.boxShadowButtonWhite;
  });
}, function (props) {
  return props.error404 && Object(external_styled_components_["css"])(_templateObject10 || (_templateObject10 = taggedTemplateLiteral_default()(["\n      box-shadow: none;\n      color: white;\n      background: linear-gradient(\n        110.55deg,\n        #ec7521 0%,\n        #e2181d 33.33%,\n        #962f7b 68.75%,\n        #174592 100%\n      );\n      &:hover {\n        box-shadow: none;\n      }\n    "])));
}, function (props) {
  return props.eventButton && Object(external_styled_components_["css"])(_templateObject11 || (_templateObject11 = taggedTemplateLiteral_default()(["\n      background: linear-gradient(157.6deg, #f08300 -5.11%, #e3000f 109.6%);\n      color: white;\n      border: none;\n      box-shadow: none;\n      transition: 0.1s ease-in;\n      z-index: 2;\n      &:hover {\n        box-shadow: ", ";\n      }\n      > img {\n        padding: 0 20px 0 40px;\n      }\n      ", "\n      ", "\n    "])), function (props) {
    return props.theme.boxShadowS;
  }, function (props) {
    return props.noIcon && Object(external_styled_components_["css"])(_templateObject12 || (_templateObject12 = taggedTemplateLiteral_default()(["\n          > img {\n            display: none;\n          }\n        "])));
  }, function (props) {
    return props.disabled && Object(external_styled_components_["css"])(_templateObject13 || (_templateObject13 = taggedTemplateLiteral_default()(["\n          cursor: initial;\n          opacity: 0.3;\n        "])));
  });
});
/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/GetToKnowMe.js


var GetToKnowMe_templateObject, GetToKnowMe_templateObject2, GetToKnowMe_templateObject3;










var GetToKnowMe_GetToKnowMe = function GetToKnowMe() {
  return /*#__PURE__*/external_react_default.a.createElement(GetToKnowMe_MainContainer, null, /*#__PURE__*/external_react_default.a.createElement(MariaOutline, {
    src: "/maria_outline.png"
  }), /*#__PURE__*/external_react_default.a.createElement(GetToKnowMeText, null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Fade"], {
    top: true
  }, /*#__PURE__*/external_react_default.a.createElement(typography_H1, {
    color: theme["a" /* default */].lavander,
    xl: true,
    white: true
  }, "Hello everybody!")), /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Fade"], {
    top: true,
    delay: 500,
    distance: "20px"
  }, /*#__PURE__*/external_react_default.a.createElement(typography_P, {
    small: true,
    white: true
  }, "I'm a web developer and designer always looking for that bit of spice to brighten up your ideas."), /*#__PURE__*/external_react_default.a.createElement(typography_P, {
    small: true,
    white: true,
    padding: "0 0 24px 0 "
  }, "I love experimenting and I love creating beautiful things.")), /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Fade"], {
    bottom: true,
    delay: 700,
    distance: "20px"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "/Maria_Burlando_CV.pdf",
    download: true
  }, /*#__PURE__*/external_react_default.a.createElement(components_Button, {
    transparent: true,
    margin: true,
    noStretch: true
  }, "Download my CV")))));
};

var GetToKnowMe_MainContainer = external_styled_components_default.a.div(GetToKnowMe_templateObject || (GetToKnowMe_templateObject = taggedTemplateLiteral_default()(["\n  width: 100vw;\n  margin-top: 100vh;\n  position: relative;\n  text-align: center;\n  background: linear-gradient(\n    to top,\n    rgba(41, 49, 118, 1),\n    rgba(41, 49, 118, 1) 40%,\n    rgba(41, 49, 118, 0)\n  );\n  z-index: 1;\n  padding: 0 12px;\n  box-sizing: border-box;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    top: calc(100% - 1px);\n    left: 0;\n    border-top: 100px solid rgba(41, 49, 118, 1);\n    border-left: 25vw solid rgba(41, 49, 118, 0);\n    border-right: 75vw solid rgba(41, 49, 118, 0);\n  }\n\n  @media (min-width: 600px) and (max-width: 1000px) {\n    background: linear-gradient(\n      to top,\n      rgba(41, 49, 118, 1),\n      rgba(41, 49, 118, 0)\n    );\n    &:before {\n      border-top: 200px solid rgba(41, 49, 118, 1);\n      border-left: 35vw solid rgba(41, 49, 118, 0);\n      border-right: 65vw solid rgba(41, 49, 118, 0);\n    }\n  }\n\n  @media (min-width: 1001px) {\n    background: linear-gradient(\n      to top,\n      rgba(41, 49, 118, 1),\n      rgba(41, 49, 118, 0)\n    );\n    &:before {\n      border-top: 200px solid rgba(41, 49, 118, 1);\n      border-left: 40vw solid rgba(41, 49, 118, 0);\n      border-right: 60vw solid rgba(41, 49, 118, 0);\n    }\n  }\n"])));
var MariaOutline = external_styled_components_default.a.img(GetToKnowMe_templateObject2 || (GetToKnowMe_templateObject2 = taggedTemplateLiteral_default()(["\n  width: 100%;\n\n  @media (min-width: 600px) {\n    width: 60vw;\n  }\n"])));
var GetToKnowMeText = external_styled_components_default.a.div(GetToKnowMe_templateObject3 || (GetToKnowMe_templateObject3 = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 100px 0 20px 0;\n  width: 100%;\n  color: white;\n\n  @media (min-width: 600px) {\n    width: 50vw;\n  }\n"])));
/* harmony default export */ var components_GetToKnowMe = (GetToKnowMe_GetToKnowMe);
// EXTERNAL MODULE: external "react-reveal/Pulse"
var Pulse_ = __webpack_require__(7);
var Pulse_default = /*#__PURE__*/__webpack_require__.n(Pulse_);

// EXTERNAL MODULE: external "react-reveal/Wobble"
var Wobble_ = __webpack_require__(45);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/Acronym.js


var Acronym_templateObject, Acronym_templateObject2, Acronym_templateObject3, Acronym_templateObject4, Acronym_templateObject5, Acronym_templateObject6, Acronym_templateObject7, Acronym_templateObject8;









var Acronym_Acronym = function Acronym() {
  return /*#__PURE__*/external_react_default.a.createElement(Acronym_MainContainer, null, /*#__PURE__*/external_react_default.a.createElement(Bubble1, {
    bottom: "40%",
    right: "30%"
  }), /*#__PURE__*/external_react_default.a.createElement(Bubble1, {
    bottom: "10%",
    right: "10%"
  }), /*#__PURE__*/external_react_default.a.createElement(Bubble2, {
    bottom: "30%",
    right: "-40px"
  }), /*#__PURE__*/external_react_default.a.createElement(Bubble2, {
    bottom: "-30px",
    right: "20%"
  }), /*#__PURE__*/external_react_default.a.createElement(Bubble3, {
    bottom: "40px",
    left: "20%"
  }), /*#__PURE__*/external_react_default.a.createElement(Bubble3, {
    bottom: "20%",
    left: "10%"
  }), /*#__PURE__*/external_react_default.a.createElement(Bubble4, {
    bottom: "20%",
    left: "20%"
  }), /*#__PURE__*/external_react_default.a.createElement(Bubble4, {
    bottom: "10%",
    left: "-40px"
  }), /*#__PURE__*/external_react_default.a.createElement(LettersContainer, null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Fade"], {
    top: true,
    cascade: true
  }, /*#__PURE__*/external_react_default.a.createElement(AdjectiveBlock, null, /*#__PURE__*/external_react_default.a.createElement(Pulse_default.a, {
    duration: 3000,
    forever: true
  }, /*#__PURE__*/external_react_default.a.createElement(NameLetter, {
    color: theme["a" /* default */].lavander
  }, "M")), /*#__PURE__*/external_react_default.a.createElement(typography_H4, null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Bounce"], {
    right: true,
    cascade: true
  }, "AGNETIC"))), /*#__PURE__*/external_react_default.a.createElement(AdjectiveBlock, null, /*#__PURE__*/external_react_default.a.createElement(Pulse_default.a, {
    duration: 3000,
    forever: true
  }, /*#__PURE__*/external_react_default.a.createElement(NameLetter, {
    color: theme["a" /* default */].lavanderDark
  }, "A")), /*#__PURE__*/external_react_default.a.createElement(typography_H4, null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Bounce"], {
    right: true,
    cascade: true
  }, "ACTIVE"))), /*#__PURE__*/external_react_default.a.createElement(AdjectiveBlock, null, /*#__PURE__*/external_react_default.a.createElement(Pulse_default.a, {
    duration: 3000,
    forever: true
  }, /*#__PURE__*/external_react_default.a.createElement(NameLetter, {
    color: theme["a" /* default */].purple
  }, "R")), /*#__PURE__*/external_react_default.a.createElement(typography_H4, null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Bounce"], {
    right: true,
    cascade: true
  }, "APID"))), /*#__PURE__*/external_react_default.a.createElement(AdjectiveBlock, null, /*#__PURE__*/external_react_default.a.createElement(Pulse_default.a, {
    duration: 3000,
    forever: true
  }, /*#__PURE__*/external_react_default.a.createElement(NameLetter, {
    color: theme["a" /* default */].purpleLight
  }, "I")), /*#__PURE__*/external_react_default.a.createElement(typography_H4, null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Bounce"], {
    right: true,
    cascade: true
  }, "MAGINATIVE"))), /*#__PURE__*/external_react_default.a.createElement(AdjectiveBlock, null, /*#__PURE__*/external_react_default.a.createElement(Pulse_default.a, {
    duration: 3000,
    forever: true
  }, /*#__PURE__*/external_react_default.a.createElement(NameLetter, {
    color: theme["a" /* default */].lavander
  }, "A")), /*#__PURE__*/external_react_default.a.createElement(typography_H4, null, /*#__PURE__*/external_react_default.a.createElement(external_react_reveal_["Bounce"], {
    right: true,
    cascade: true
  }, "DAPTABLE"))))));
};

var Acronym_MainContainer = external_styled_components_default.a.div(Acronym_templateObject || (Acronym_templateObject = taggedTemplateLiteral_default()(["\n  width: 100%;\n  position: relative;\n  text-align: center;\n  //height: 650px;\n  text-align: center;\n  background-color: white;\n  overflow: hidden;\n"])));
var LettersContainer = external_styled_components_default.a.div(Acronym_templateObject2 || (Acronym_templateObject2 = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  width: 100%;\n  padding: 150px 24px 42px 24px;\n\n  @media (min-width: 600px) {\n    padding: 250px 24px 42px 24px;\n    width: 400px;\n  }\n"])));
var AdjectiveBlock = external_styled_components_default.a.div(Acronym_templateObject3 || (Acronym_templateObject3 = taggedTemplateLiteral_default()(["\n  display: flex;\n\n  align-items: center;\n  justify-content: flex-start;\n  padding: 18px 0;\n  > h4 {\n    letter-spacing: 3px;\n    font-weight: 600;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.purpleLight;
});
var NameLetter = external_styled_components_default.a.h1(Acronym_templateObject4 || (Acronym_templateObject4 = taggedTemplateLiteral_default()(["\n  width: 80px;\n  height: 80px;\n  background-color: ", ";\n  box-shadow: -5px 5px 20px ", ";\n  color: white;\n  line-height: 80px;\n  font-size: 60px;\n  font-family: \"Unica One\";\n  border-radius: 8px;\n  margin-right: 12px;\n"])), function (props) {
  return props.color;
}, function (props) {
  return props.theme.lavander;
});
var Bubble1 = external_styled_components_default.a.div(Acronym_templateObject5 || (Acronym_templateObject5 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: ", ";\n  right: ", ";\n  width: 100px;\n  border-radius: 50%;\n  height: 100px;\n  background-color: rgba(0, 200, 149, 0.2);\n  @media (min-width: 800px) {\n    height: 200px;\n    width: 200px;\n  }\n"])), function (props) {
  return props.bottom;
}, function (props) {
  return props.right;
});
var Bubble2 = external_styled_components_default.a.div(Acronym_templateObject6 || (Acronym_templateObject6 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: ", ";\n  right: ", ";\n  width: 150px;\n  border-radius: 50%;\n  height: 150px;\n  background-color: rgba(95, 95, 171, 0.2);\n  @media (min-width: 800px) {\n    height: 300px;\n    width: 300px;\n  }\n"])), function (props) {
  return props.bottom;
}, function (props) {
  return props.right;
});
var Bubble3 = external_styled_components_default.a.div(Acronym_templateObject7 || (Acronym_templateObject7 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: ", ";\n  left: ", ";\n  width: 50px;\n  border-radius: 50%;\n  height: 50px;\n  background-color: rgba(255, 185, 90, 0.2);\n  @media (min-width: 800px) {\n    height: 100px;\n    width: 100px;\n  }\n"])), function (props) {
  return props.bottom;
}, function (props) {
  return props.left;
});
var Bubble4 = external_styled_components_default.a.div(Acronym_templateObject8 || (Acronym_templateObject8 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: ", ";\n  left: ", ";\n  width: 125px;\n  border-radius: 50%;\n  height: 125px;\n  background-color: rgba(83, 84, 158, 0.1);\n  @media (min-width: 800px) {\n    height: 250px;\n    width: 250px;\n  }\n"])), function (props) {
  return props.bottom;
}, function (props) {
  return props.left;
});
/* harmony default export */ var components_Acronym = (Acronym_Acronym);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/PoetrySection.js


var PoetrySection_templateObject, PoetrySection_templateObject2, PoetrySection_templateObject3;





var PoetrySection_PoetrySection = function PoetrySection() {
  return /*#__PURE__*/external_react_default.a.createElement(PoetrySection_MainContainer, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Title, null, "What is life without poetry?")), /*#__PURE__*/external_react_default.a.createElement(PoetryCardsContainer, null));
};

var PoetrySection_MainContainer = external_styled_components_default.a.div(PoetrySection_templateObject || (PoetrySection_templateObject = taggedTemplateLiteral_default()(["\nwidth:100%;\nposition:relative;\nbackground-image: url('/lighthouse.jpg');\nbackground-position:top center;\n\n>div:first-of-type {\n    width:100%;\n    padding:600px 0;\n    background-image:linear-gradient(to top, rgba(31,29,31,1), rgba(31,29,31,0));\n}\n"])));
var Title = external_styled_components_default.a.p(PoetrySection_templateObject2 || (PoetrySection_templateObject2 = taggedTemplateLiteral_default()(["\nfont-family: 'Italiana', serif;\nmax-width:1300px;\nwidth:90%;\nmargin:0 auto;\ncolor:white;\nfont-size:150px;\n"])));
var PoetryCardsContainer = external_styled_components_default.a.div(PoetrySection_templateObject3 || (PoetrySection_templateObject3 = taggedTemplateLiteral_default()(["\n    background-color:rgba(31,29,31,1);\n    width:100%;\n    height:100vh;\n"])));
/* harmony default export */ var components_PoetrySection = (PoetrySection_PoetrySection);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/ToCome.js


var ToCome_templateObject, ToCome_templateObject2, ToCome_templateObject3, ToCome_templateObject4, ToCome_templateObject5, ToCome_templateObject6;






var ToCome_ToCome = function ToCome() {
  return /*#__PURE__*/external_react_default.a.createElement(ToCome_MainContainer, null, /*#__PURE__*/external_react_default.a.createElement(Holder, null, /*#__PURE__*/external_react_default.a.createElement(typography_H1, {
    color: theme["a" /* default */].white
  }, "More content to come soon...")));
};

var ToCome_MainContainer = external_styled_components_default.a.div(ToCome_templateObject || (ToCome_templateObject = taggedTemplateLiteral_default()(["\n  width: 100%;\n  position: relative;\n  height: 300px;\n  background-color: ", ";\n  padding: 0 12px;\n"])), function (props) {
  return props.theme.dark;
});
var Holder = external_styled_components_default.a.div(ToCome_templateObject2 || (ToCome_templateObject2 = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  width: 100%;\n  position: relative;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (min-width: 600px) {\n    width: 60%;\n  }\n"])));
var ToCome_Bubble1 = external_styled_components_default.a.div(ToCome_templateObject3 || (ToCome_templateObject3 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: 150px;\n  left: -40px;\n  width: 200px;\n  border-radius: 50%;\n  height: 200px;\n  background-color: rgba(0, 200, 149, 0.3);\n"])));
var ToCome_Bubble2 = external_styled_components_default.a.div(ToCome_templateObject4 || (ToCome_templateObject4 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: 30px;\n  right: -20px;\n  width: 300px;\n  border-radius: 50%;\n  height: 300px;\n  background-color: rgba(95, 95, 171, 0.3);\n"])));
var ToCome_Bubble3 = external_styled_components_default.a.div(ToCome_templateObject5 || (ToCome_templateObject5 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: 50px;\n  right: 50%;\n  width: 100px;\n  border-radius: 50%;\n  height: 100px;\n  background-color: rgba(255, 185, 90, 0.3);\n"])));
var ToCome_Bubble4 = external_styled_components_default.a.div(ToCome_templateObject6 || (ToCome_templateObject6 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  bottom: 50px;\n  left: 10%;\n  width: 250px;\n  border-radius: 50%;\n  height: 250px;\n  background-color: rgba(83, 84, 158, 0.1);\n"])));
/* harmony default export */ var components_ToCome = (ToCome_ToCome);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/index.js















/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Pulse");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(18);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(37)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(36);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(38);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(22);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(18);

var _helpers = __webpack_require__(39);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* HomeLanding */ "e"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* GetToKnowMe */ "b"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Acronym */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* ToCome */ "f"], null));
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(13);

// EXTERNAL MODULE: /Users/mariaburlando/Desktop/maria_website/src/pages/Home.js
var Home = __webpack_require__(12);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/mariaburlando/Desktop/maria_website/src/styles/theme.js
var theme = __webpack_require__(3);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/index.js + 15 modules
var components = __webpack_require__(6);

// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/components/Header.js



var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;





var Header_Header = function Header(_ref) {
  var white = _ref.white;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      menuDropDownOpen = _useState2[0],
      setMenuDropDownOpen = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      scrolled = _useState4[0],
      setScrolled = _useState4[1];

  var handleScroll = function handleScroll() {
    var scrollSize = window.pageYOffset;

    if (scrollSize <= 10) {
      setScrolled(false);
    }

    if (scrollSize > 10) {
      setScrolled(true);
    }
  };

  Object(external_react_["useEffect"])(function () {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(MainContainer, null, /*#__PURE__*/external_react_default.a.createElement(HeaderDesktopContainer, {
    scrolled: scrolled
  }, /*#__PURE__*/external_react_default.a.createElement(Logo, {
    white: true
    /* white={!scrolled} */

  })));
};

var Logo = external_styled_components_default.a.div(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  background-image: ", ";\n  width: 50px;\n  height: 50px;\n  margin-left: 20px;\n"])), function (props) {
  return props.white ? 'url("/svg/logo-white.svg")' : 'url("/svg/logo-black.svg")';
});
var MainContainer = external_styled_components_default.a.div(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  width: 100%;\n  //position: fixed;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n"])));
var HeaderDesktopContainer = external_styled_components_default.a.header(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  width: 100%;\n  transition: 0.1s linear;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  /* ", " */\n"])), function (props) {
  return props.scrolled && Object(external_styled_components_["css"])(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n      background-color: white;\n      box-shadow: ", ";\n    "])), function (props) {
    return props.theme.boxShadow;
  });
});
var HeaderMobileContainer = external_styled_components_default.a.header(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n  width: 100%;\n  display: flex;\n  background-color: white;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  z-index: 100;\n  @media (min-width: 1000px) {\n    display: none;\n  }\n"])));
var NavigationContainer = external_styled_components_default.a.nav(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n  display: flex;\n  padding: 30px 40px 30px 40px;\n"])));
var RainbowLogoContainer = external_styled_components_default.a.div(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"])));
var RainbowLogoHeader = external_styled_components_default.a.div(_templateObject8 || (_templateObject8 = taggedTemplateLiteral_default()(["\n  padding: 20px;\n"])));
var MobileDropDown = external_styled_components_default.a.div(_templateObject9 || (_templateObject9 = taggedTemplateLiteral_default()(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background-color: white;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/styles/GlobalStyles.js


var GlobalStyles_templateObject;


/* harmony default export */ var GlobalStyles = (Object(external_styled_components_["createGlobalStyle"])(GlobalStyles_templateObject || (GlobalStyles_templateObject = taggedTemplateLiteral_default()(["\nbody {\n    color:#323232;\n    overflow-x:hidden;\n    padding:0;\n    margin:0;\n  }\n\n  h1, h2, h3, h4 {\n    font-weight:600;\n  }\n\n  .Paragraph__component {\n    line-height:170%;\n    font-size:18px;\n  }\n  \n  \n  * {\n    box-sizing: border-box;\n    background-position:center;\n    background-size:cover;\n    padding:0;\n    margin:0;\n  }\n\n  html {\n    overscroll-behavior-y: none;\n    min-height: 100vh;\n  }\n\n  a {\n    text-decoration:none;\n  }\n\n  \n\n  @font-face {\n    font-family: 'Poppins', sans-serif;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: 'Poppins', sans-serif;\n"]))));
// CONCATENATED MODULE: /Users/mariaburlando/Desktop/maria_website/src/App.js


var App_templateObject;


 //





 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(["dynamic"]);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(GlobalStyles, null), /*#__PURE__*/external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme["a" /* default */]
  }, /*#__PURE__*/external_react_default.a.createElement(components_Header, {
    white: true
  }), /*#__PURE__*/external_react_default.a.createElement(App_MainContainer, null, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(Home["default"], null)))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);
var App_MainContainer = external_styled_components_default.a.div(App_templateObject || (App_templateObject = taggedTemplateLiteral_default()(["\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 120px;\n  min-height: 90vh;\n"])));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(8);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("/Users/mariaburlando/Desktop/maria_website/node_modules/react-static/lib/browser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("/Users/mariaburlando/Desktop/maria_website/artifacts/__react_static_root__/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(13);

var _router = __webpack_require__(32);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(33);
module.exports = __webpack_require__(40);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(31)["default"];

var _require = __webpack_require__(20),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(20),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(34),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);






Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 26, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Home.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Home.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Home";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/Home.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0,
  '__react_static_root__/src/pages/Home.js': t_1
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(18);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 8,
	"./": 8,
	"./index": 8,
	"./index.js": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(22);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(24);

var _interopRequireWildcard = __webpack_require__(25);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(41);

var _Suspense = _interopRequireDefault(__webpack_require__(42));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(43)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("/Users/mariaburlando/Desktop/maria_website/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(25);

var _interopRequireDefault = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(5));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(9));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(44)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Wobble");

/***/ })
/******/ ]);
});