(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://pauloamgomes.github.io/CockpitCMS-React-Static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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

module.exports = require("reactstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageStyleUrl = getImageStyleUrl;

var _config = __webpack_require__(10);

var Config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getImageStyleUrl(style, image) {
  if (image && image.styles !== undefined) {
    var img = image.styles.find(function (imgStyle) {
      return imgStyle.style === style;
    });
    if (img && img.path) {
      if (Config.COCKPIT_LOCAL_IMAGES) {
        img.path = img.path.replace(Config.COCKPIT_HOST, Config.WEBSITE_SITE_ROOT + "/" + Config.WEBSITE_BASE_PATH);
      }
      return img.path.replace("//", "/");
    }
  }
  if (image && image.path && !image.path.startsWith(Config.COCKPIT_UPLOADS_DIR)) {
    if (Config.COCKPIT_LOCAL_IMAGES) {
      return (Config.WEBSITE_SITE_ROOT + "/" + Config.WEBSITE_BASE_PATH + "/" + Config.COCKPIT_UPLOADS_DIR + image.path).replace("//", "/");
    }
    return Config.COCKPIT_HOST + "/" + Config.COCKPIT_UPLOADS_DIR + image.path;
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Metatags = (0, _reactStatic.withSiteData)(function (_ref) {
  var title = _ref.title,
      siteName = _ref.siteName,
      description = _ref.description,
      pageDescription = _ref.pageDescription;
  return _react2.default.createElement(
    _reactStatic.Head,
    null,
    _react2.default.createElement(
      "title",
      null,
      title + " | " + siteName
    ),
    _react2.default.createElement("meta", { name: "description", content: pageDescription || description }),
    _react2.default.createElement("meta", {
      property: "og:description",
      content: pageDescription || description
    }),
    _react2.default.createElement("meta", { property: "og:type", content: "article" }),
    _react2.default.createElement("meta", { property: "og:title", content: title }),
    _react2.default.createElement("meta", { property: "og:site_name", content: siteName })
  );
});

exports.default = Metatags;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cockpit = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultComponents = {
  heading: _cockpit.Heading,
  text: _cockpit.Text,
  divider: _cockpit.Divider,
  customimage: _cockpit.CustomImage,
  bighero: _cockpit.BigHero,
  pagebanner: _cockpit.PageBanner,
  sectiondivider: _cockpit.SectionDivider,
  leafletmap: _cockpit.LeafletMap,
  grid: _cockpit.Grid,
  blogposts: _cockpit.BlogPosts,
  pagebannermedia: _cockpit.PageBannerMedia,
  codeblock: _cockpit.CodeBlock,
  form: _cockpit.Form,
  video: _cockpit.Video,
  subpages: _cockpit.SubPages
};

exports.default = function (_ref) {
  var components = _ref.components;
  return _react2.default.createElement(
    "div",
    { className: "page--components" },
    components && components.map(function (component_parsed, idx) {
      var name = component_parsed.component.toLowerCase();
      var settings = component_parsed.settings;
      var columns = component_parsed.columns || [];

      if (defaultComponents[name] === undefined) {
        return null;
      }

      var Component = defaultComponents[name];

      return _react2.default.createElement(Component, _extends({
        name: name
      }, settings, {
        columns: columns,
        key: "component-" + idx
      }));
    })
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = __webpack_require__(34);

Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Divider).default;
  }
});

var _Text = __webpack_require__(36);

Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Text).default;
  }
});

var _Heading = __webpack_require__(39);

Object.defineProperty(exports, "Heading", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Heading).default;
  }
});

var _CustomImage = __webpack_require__(15);

Object.defineProperty(exports, "CustomImage", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CustomImage).default;
  }
});

var _BigHero = __webpack_require__(42);

Object.defineProperty(exports, "BigHero", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BigHero).default;
  }
});

var _PageBanner = __webpack_require__(45);

Object.defineProperty(exports, "PageBanner", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PageBanner).default;
  }
});

var _SectionDivider = __webpack_require__(47);

Object.defineProperty(exports, "SectionDivider", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SectionDivider).default;
  }
});

var _LeafletMap = __webpack_require__(50);

Object.defineProperty(exports, "LeafletMap", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LeafletMap).default;
  }
});

var _Grid = __webpack_require__(53);

Object.defineProperty(exports, "Grid", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});

var _BlogPosts = __webpack_require__(56);

Object.defineProperty(exports, "BlogPosts", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BlogPosts).default;
  }
});

var _PageBannerMedia = __webpack_require__(59);

Object.defineProperty(exports, "PageBannerMedia", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PageBannerMedia).default;
  }
});

var _CodeBlock = __webpack_require__(61);

Object.defineProperty(exports, "CodeBlock", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CodeBlock).default;
  }
});

var _Form = __webpack_require__(64);

Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _Video = __webpack_require__(70);

Object.defineProperty(exports, "Video", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Video).default;
  }
});

var _SubPages = __webpack_require__(72);

Object.defineProperty(exports, "SubPages", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SubPages).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var COCKPIT_HOST = exports.COCKPIT_HOST = "http://localhost:8088";
var COCKPIT_UPLOADS_DIR = exports.COCKPIT_UPLOADS_DIR = "storage/uploads";
var COCKPIT_API_TOKEN = exports.COCKPIT_API_TOKEN = "74371aad38cc6a00cdba9a1f7792c9";
var COCKPIT_FORMS_API_TOKEN = exports.COCKPIT_FORMS_API_TOKEN = "44112136dc6dd498a1ac39c097d8dc";
// Set to true if using cockpit images from local folder.
var COCKPIT_LOCAL_IMAGES = exports.COCKPIT_LOCAL_IMAGES = true;
var WEBSITE_BASE_PATH = exports.WEBSITE_BASE_PATH = "CockpitCMS-React-Static";
var WEBSITE_SITE_ROOT = exports.WEBSITE_SITE_ROOT = "https://pauloamgomes.github.io";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  .breadcrumb {\n    background: transparent;\n    padding: 0.5rem;\n    margin: 0px;\n  }\n\n  .breadcrumb-item:before {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  a {\n    color: white;\n  }\n\n  .active {\n    color: rgba(255, 255, 255, 0.6);\n  }\n"], ["\n  .breadcrumb {\n    background: transparent;\n    padding: 0.5rem;\n    margin: 0px;\n  }\n\n  .breadcrumb-item:before {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  a {\n    color: white;\n  }\n\n  .active {\n    color: rgba(255, 255, 255, 0.6);\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n"], ["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreadcrumbStyled = (0, _styledComponents2.default)(_reactstrap.Breadcrumb)(_templateObject);

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject2);

exports.default = function (_ref) {
  var crumbs = _ref.crumbs;
  return _react2.default.createElement(
    ContainerStyled,
    { fluid: true },
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        BreadcrumbStyled,
        null,
        _react2.default.createElement(
          _reactstrap.BreadcrumbItem,
          null,
          _react2.default.createElement(
            _reactStatic.NavLink,
            { exact: true, to: "/" },
            "Home"
          )
        ),
        crumbs && crumbs.map(function (crumb, idx) {
          return _react2.default.createElement(
            _reactstrap.BreadcrumbItem,
            {
              key: "breadcrum-" + idx,
              active: crumb.active || false
            },
            crumb.link && _react2.default.createElement(
              _reactStatic.NavLink,
              { exact: true, to: crumb.link },
              crumb.text
            ),
            crumb.active && crumb.text
          );
        })
      )
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
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
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _Metatags = __webpack_require__(5);

var _Metatags2 = _interopRequireDefault(_Metatags);

var _PageComponents = __webpack_require__(6);

var _PageComponents2 = _interopRequireDefault(_PageComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var page = _ref.page;
  return _react2.default.createElement(
    "article",
    null,
    _react2.default.createElement(_Metatags2.default, { title: page.title, pageDescription: page.description }),
    _react2.default.createElement(_PageComponents2.default, { components: page.components || [] })
  );
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CustomImage = __webpack_require__(41);

var _CustomImage2 = _interopRequireDefault(_CustomImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CustomImage2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  padding-top: 56.25%;\n  width: 100%;\n"], ["\n  position: relative;\n  padding-top: 56.25%;\n  width: 100%;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = __webpack_require__(44);

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VideoWrapper = _styledComponents2.default.div(_templateObject);

var ReactPlayerStyled = (0, _styledComponents2.default)(_reactPlayer2.default)(_templateObject2);

exports.default = function (_ref) {
  var url = _ref.url,
      playing = _ref.playing;
  return _react2.default.createElement(
    VideoWrapper,
    null,
    _react2.default.createElement(ReactPlayerStyled, {
      url: url,
      playing: playing || false,
      width: "100%",
      height: "100%"
    })
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _Metatags = __webpack_require__(5);

var _Metatags2 = _interopRequireDefault(_Metatags);

var _Components = __webpack_require__(76);

var _Components2 = _interopRequireDefault(_Components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var Page404 = (0, _reactStatic.withRouteData)(function (_ref) {
  var page = _ref.page;
  return _react2.default.createElement(
    "article",
    null,
    _react2.default.createElement(_Metatags2.default, { title: page.title, pageDescription: page.description }),
    _react2.default.createElement(_Components2.default, { components: page.components || [] })
  );
});

exports.default = Page404;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _Metatags = __webpack_require__(5);

var _Metatags2 = _interopRequireDefault(_Metatags);

var _PostBanner = __webpack_require__(77);

var _PostBanner2 = _interopRequireDefault(_PostBanner);

var _PostComponents = __webpack_require__(79);

var _PostComponents2 = _interopRequireDefault(_PostComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    "article",
    null,
    _react2.default.createElement(_Metatags2.default, { title: post.title }),
    _react2.default.createElement(_PostBanner2.default, {
      title: post.title,
      summary: post.summary,
      image: post.image,
      categories: post.categories && post.categories.map(function (category) {
        return category.name;
      }) || []
    }),
    _react2.default.createElement(_PostComponents2.default, { components: post.components || [] })
  );
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preview = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Metatags = __webpack_require__(5);

var _Metatags2 = _interopRequireDefault(_Metatags);

var _PageComponents = __webpack_require__(6);

var _PageComponents2 = _interopRequireDefault(_PageComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var Preview = exports.Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

    _this.componentDidMount = function () {
      window.addEventListener("message", _this.handlePreviewEntry);
    };

    _this.componentWillUnmount = function () {
      window.removeEventListener("message", _this.handlePreviewEntry);
    };

    _this.handlePreviewEntry = function (event) {
      _this.setState({
        title: event.data.entry.title,
        description: event.data.entry.description,
        components: event.data.entry.components
      });
    };

    _this.state = {
      title: "",
      description: "",
      components: []
    };
    return _this;
  }

  _createClass(Preview, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          title = _state.title,
          description = _state.description,
          components = _state.components;

      return _react2.default.createElement(
        "article",
        null,
        _react2.default.createElement(_Metatags2.default, { title: title, pageDescription: description }),
        _react2.default.createElement(_PageComponents2.default, { components: components })
      );
    }
  }]);

  return Preview;
}(_react.Component);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== "undefined") {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById("root"));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  body {\n    font-family: ", ";\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    color: ", ";\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .content {\n    padding: 1rem;\n  }\n\n  .container-fluid {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n"], ["\n  body {\n    font-family: ", ";\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    color: ", ";\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .content {\n    padding: 1rem;\n  }\n\n  .container-fluid {\n    padding-right: 0px;\n    padding-left: 0px;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n"], ["\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  flex: 1 1 0%;\n"], ["\n  flex: 1 1 0%;\n"]);

__webpack_require__(23);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(24);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStaticRoutes = __webpack_require__(25);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Header = __webpack_require__(80);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(82);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var theme = {
  fontFamily: "Cabin, sans-serif",
  primaryColor: "rgb(41, 48, 132)"
};

(0, _styledComponents.injectGlobal)(_templateObject, theme.fontFamily, theme.primaryColor);

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject2);

var MainRow = (0, _styledComponents2.default)(_reactstrap.Row)(_templateObject3);

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        ContainerStyled,
        { fluid: true },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(_Header2.default, null)
          )
        ),
        _react2.default.createElement(
          MainRow,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              "main",
              null,
              _react2.default.createElement(_reactStaticRoutes2.default, null)
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(_Footer2.default, null)
          )
        )
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(26);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(27);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(28);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(29);

var _reactUniversalComponent = __webpack_require__(30);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Page',
  file: '/Users/pauloamgomes/Sites/CockpitReactStatic/react-app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/pages/Page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/pages/Page';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/pauloamgomes/Sites/CockpitReactStatic/react-app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Post',
  file: '/Users/pauloamgomes/Sites/CockpitReactStatic/react-app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/pages/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/pages/Post';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Preview',
  file: '/Users/pauloamgomes/Sites/CockpitReactStatic/react-app/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/pages/Preview', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Preview');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/pages/Preview';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 1

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(31);

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

var _reportChunks = __webpack_require__(32);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(33);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
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
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(12);

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
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
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
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
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
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
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
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
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
    load: load
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = __webpack_require__(35);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"], ["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  border: 0;\n  height: 1px;\n  background: rgb(130, 83, 221);\n  background-image: linear-gradient(\n    to right,\n    rgb(130, 83, 221),\n    rgb(88, 83, 208),\n    rgb(130, 83, 221)\n  );\n"], ["\n  border: 0;\n  height: 1px;\n  background: rgb(130, 83, 221);\n  background-image: linear-gradient(\n    to right,\n    rgb(130, 83, 221),\n    rgb(88, 83, 208),\n    rgb(130, 83, 221)\n  );\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

var Hr = _styledComponents2.default.hr(_templateObject2);

exports.default = function (_ref) {
  var name = _ref.name,
      className = _ref.className;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name },
    _react2.default.createElement(Hr, { className: className })
  );
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Text = __webpack_require__(37);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Text2.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _htmr = __webpack_require__(9);

var _htmr2 = _interopRequireDefault(_htmr);

var _reactstrap = __webpack_require__(2);

var _Image = __webpack_require__(38);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = {
  img: function img(node) {
    return _react2.default.createElement(_Image2.default, node);
  }
};
//

exports.default = function (_ref) {
  var name = _ref.name,
      text = _ref.text;
  return _react2.default.createElement(
    _reactstrap.Container,
    { className: "component--" + name },
    text && (0, _htmr2.default)(text, { transform: transform })
  );
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"], ["\n  width: 100%;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = __webpack_require__(10);

var Config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var Image = _styledComponents2.default.img(_templateObject);

exports.default = function (_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height;

  if (!/^(http)s?:\/\//i.test(src)) {
    src = "" + Config.COCKPIT_HOST + src;
  }

  return _react2.default.createElement(Image, {
    src: src,
    alt: alt,
    width: width || "100%",
    height: height || "100%"
  });
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Heading = __webpack_require__(40);

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Heading2.default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding: 1rem 15px;\n  color: rgb(96, 91, 229);\n"], ["\n  padding: 1rem 15px;\n  color: rgb(96, 91, 229);\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

exports.default = function (_ref) {
  var name = _ref.name,
      text = _ref.text,
      tag = _ref.tag;

  var Tag = "" + tag;

  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name },
    _react2.default.createElement(
      Tag,
      null,
      text
    )
  );
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"], ["\n  width: 100%;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var Image = _styledComponents2.default.img(_templateObject);

exports.default = function (_ref) {
  var name = _ref.name,
      title = _ref.title,
      asset = _ref.asset,
      style = _ref.style;
  return _react2.default.createElement(
    _reactstrap.Container,
    { className: "component--" + name },
    _react2.default.createElement(Image, { src: (0, _utils.getImageStyleUrl)(style, asset), alt: title })
  );
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BigHero = __webpack_require__(43);

var _BigHero2 = _interopRequireDefault(_BigHero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BigHero2.default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  position: relative;\n  max-height: 100vh;\n  background: url(", ") 50%\n      30% / cover no-repeat,\n    linear-gradient(rgb(41, 48, 97), rgb(41, 48, 132));\n  background-repeat: no-repeat;\n  background-position: 50% 30%;\n  margin-bottom: 1rem;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(\n      to bottom,\n      rgb(41, 48, 97),\n      rgb(41, 48, 132)\n    );\n    opacity: 0.3;\n  }\n"], ["\n  height: 100vh;\n  position: relative;\n  max-height: 100vh;\n  background: url(", ") 50%\n      30% / cover no-repeat,\n    linear-gradient(rgb(41, 48, 97), rgb(41, 48, 132));\n  background-repeat: no-repeat;\n  background-position: 50% 30%;\n  margin-bottom: 1rem;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(\n      to bottom,\n      rgb(41, 48, 97),\n      rgb(41, 48, 132)\n    );\n    opacity: 0.3;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 3rem 4rem;\n  padding-top: 6rem;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: center;\n    line-height: 1.25;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin: 1rem auto;\n  }\n\n  h2 {\n    font-size: 1.3rem;\n    opacity: 0.8;\n    max-width: 32rem;\n    text-align: center;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin: 1rem auto;\n  }\n"], ["\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 3rem 4rem;\n  padding-top: 6rem;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: center;\n    line-height: 1.25;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin: 1rem auto;\n  }\n\n  h2 {\n    font-size: 1.3rem;\n    opacity: 0.8;\n    max-width: 32rem;\n    text-align: center;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin: 1rem auto;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 0px auto;\n  max-width: 700px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n"], ["\n  text-align: center;\n  margin: 0px auto;\n  max-width: 700px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(4);

var _CustomImage = __webpack_require__(15);

var _CustomImage2 = _interopRequireDefault(_CustomImage);

var _Video = __webpack_require__(16);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject, function (props) {
  return (0, _utils.getImageStyleUrl)("BigHero", props.background);
});

var Head = _styledComponents2.default.div(_templateObject2);

var Media = _styledComponents2.default.div(_templateObject3);

exports.default = function (_ref) {
  var name = _ref.name,
      title = _ref.title,
      subtitle = _ref.subtitle,
      bgimage = _ref.bgimage,
      heroimage = _ref.heroimage,
      herovideo = _ref.herovideo;
  return _react2.default.createElement(
    ContainerStyled,
    { background: bgimage, className: "component--" + name, fluid: true },
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        Head,
        null,
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              "h1",
              null,
              title
            ),
            _react2.default.createElement(
              "h2",
              null,
              subtitle
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              Media,
              null,
              heroimage && _react2.default.createElement(_CustomImage2.default, heroimage),
              herovideo && _react2.default.createElement(_Video2.default, { url: herovideo, playing: true })
            )
          )
        )
      )
    )
  );
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PageBanner = __webpack_require__(46);

var _PageBanner2 = _interopRequireDefault(_PageBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PageBanner2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  max-height: 500px;\n  background: center 0px no-repeat,\n    linear-gradient(rgb(27, 68, 112), rgb(18, 53, 101));\n  background-repeat: no-repeat;\n  background-position: center 0px;\n  padding: 4rem 3rem;\n  margin-bottom: 1rem;\n\n  .container {\n    padding-top: 3rem;\n  }\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.05em;\n    font-weight: 600;\n    margin: 0px;\n    text-transform: uppercase;\n    padding-left: 0.5rem;\n  }\n\n  p {\n    font-size: 1rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n    padding-left: 0.5rem;\n  }\n"], ["\n  position: relative;\n  max-height: 500px;\n  background: center 0px no-repeat,\n    linear-gradient(rgb(27, 68, 112), rgb(18, 53, 101));\n  background-repeat: no-repeat;\n  background-position: center 0px;\n  padding: 4rem 3rem;\n  margin-bottom: 1rem;\n\n  .container {\n    padding-top: 3rem;\n  }\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.05em;\n    font-weight: 600;\n    margin: 0px;\n    text-transform: uppercase;\n    padding-left: 0.5rem;\n  }\n\n  p {\n    font-size: 1rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n    padding-left: 0.5rem;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Breadcrumb = __webpack_require__(11);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

exports.default = function (_ref) {
  var name = _ref.name,
      title = _ref.title,
      summary = _ref.summary;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name, fluid: true },
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        "h1",
        null,
        title
      ),
      summary && _react2.default.createElement(
        "p",
        null,
        summary
      )
    ),
    _react2.default.createElement(_Breadcrumb2.default, { crumbs: [{ text: title, active: true }] })
  );
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SectionDivider = __webpack_require__(48);

var _SectionDivider2 = _interopRequireDefault(_SectionDivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SectionDivider2.default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  height: auto;\n  max-height: 200px;\n  position: relative;\n  background: center 0px no-repeat,\n    linear-gradient(rgb(27, 68, 112), rgb(18, 53, 101));\n  background-repeat: no-repeat;\n  background-position: center 0px;\n  padding: 2rem 0;\n  margin: 3rem 0;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.1em;\n    font-weight: 600;\n    margin: 0px;\n    text-transform: lowercase;\n  }\n\n  h2 {\n    font-size: 1rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n  }\n\n  button {\n    margin-top: 1.2rem;\n  }\n"], ["\n  height: auto;\n  max-height: 200px;\n  position: relative;\n  background: center 0px no-repeat,\n    linear-gradient(rgb(27, 68, 112), rgb(18, 53, 101));\n  background-repeat: no-repeat;\n  background-position: center 0px;\n  padding: 2rem 0;\n  margin: 3rem 0;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.1em;\n    font-weight: 600;\n    margin: 0px;\n    text-transform: lowercase;\n  }\n\n  h2 {\n    font-size: 1rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n  }\n\n  button {\n    margin-top: 1.2rem;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Cta = __webpack_require__(49);

var _Cta2 = _interopRequireDefault(_Cta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

exports.default = function (_ref) {
  var name = _ref.name,
      title = _ref.title,
      subtitle = _ref.subtitle,
      linktext = _ref.linktext,
      linkurl = _ref.linkurl;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name, fluid: true },
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { sm: "10" },
          _react2.default.createElement(
            "h1",
            null,
            title
          ),
          subtitle && _react2.default.createElement(
            "h2",
            null,
            subtitle
          )
        ),
        _react2.default.createElement(
          _reactstrap.Col,
          { sm: "2" },
          _react2.default.createElement(_Cta2.default, { text: linktext, url: linkurl, type: "dark" })
        )
      )
    )
  );
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  color: white;\n  border-color: white;\n  line-height: 1.5rem;\n\n  :hover {\n    background-color: rgb(22, 76, 116);\n    color: rgb(96, 91, 229);\n    border-color: rgba(255, 255, 255, 0.5);\n  }\n\n  a {\n    color: white;\n  }\n\n  a:hover {\n    text-decoration: none;\n    color: white;\n  }\n"], ["\n  color: white;\n  border-color: white;\n  line-height: 1.5rem;\n\n  :hover {\n    background-color: rgb(22, 76, 116);\n    color: rgb(96, 91, 229);\n    border-color: rgba(255, 255, 255, 0.5);\n  }\n\n  a {\n    color: white;\n  }\n\n  a:hover {\n    text-decoration: none;\n    color: white;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  color: rgb(22, 76, 116);\n  border-color: rgb(22, 76, 116);\n  line-height: 1.5rem;\n\n  :hover {\n    background-color: transparent;\n    color: white;\n    border-color: rgba(22, 76, 116, 0.5);\n  }\n\n  a {\n    color: rgb(22, 76, 116);\n  }\n\n  a:hover {\n    text-decoration: none;\n    color: rgb(88, 83, 208);\n  }\n"], ["\n  color: rgb(22, 76, 116);\n  border-color: rgb(22, 76, 116);\n  line-height: 1.5rem;\n\n  :hover {\n    background-color: transparent;\n    color: white;\n    border-color: rgba(22, 76, 116, 0.5);\n  }\n\n  a {\n    color: rgb(22, 76, 116);\n  }\n\n  a:hover {\n    text-decoration: none;\n    color: rgb(88, 83, 208);\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonDarkStyled = (0, _styledComponents2.default)(_reactstrap.Button)(_templateObject);

var ButtonLightStyled = (0, _styledComponents2.default)(_reactstrap.Button)(_templateObject2);

exports.default = function (_ref) {
  var text = _ref.text,
      url = _ref.url,
      type = _ref.type;

  var Tag = type === "dark" ? ButtonDarkStyled : ButtonLightStyled;
  return _react2.default.createElement(
    Tag,
    { outline: true, type: true, color: "primary" },
    _react2.default.createElement(
      _reactStatic.NavLink,
      { to: url },
      text
    )
  );
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LeafletMap = __webpack_require__(51);

var _LeafletMap2 = _interopRequireDefault(_LeafletMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LeafletMap2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  height: 450px;\n  margin-bottom: 1rem;\n"], ["\n  height: 450px;\n  margin-bottom: 1rem;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactLeaflet = __webpack_require__(52);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _htmr = __webpack_require__(9);

var _htmr2 = _interopRequireDefault(_htmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MapStyled = (0, _styledComponents2.default)(_reactLeaflet.Map)(_templateObject);

var LeafletMap = function LeafletMap(_ref) {
  var name = _ref.name,
      location = _ref.location,
      zoom = _ref.zoom,
      marker = _ref.marker;

  if (!location) return null;

  var position = [location.lat, location.lng];

  return _react2.default.createElement(
    _reactstrap.Container,
    { className: "component--" + name },
    _react2.default.createElement("link", {
      rel: "stylesheet",
      media: "all",
      href: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.3/leaflet.css"
    }),
    _react2.default.createElement(
      MapStyled,
      { center: position, zoom: zoom },
      _react2.default.createElement(_reactLeaflet.TileLayer, {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
      }),
      marker && _react2.default.createElement(
        _reactLeaflet.Marker,
        { position: position },
        _react2.default.createElement(
          _reactLeaflet.Popup,
          null,
          _react2.default.createElement(
            "div",
            null,
            (0, _htmr2.default)(marker)
          )
        )
      )
    )
  );
};

LeafletMap.defaultProps = {
  zoom: 13
};

exports.default = LeafletMap;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Grid = __webpack_require__(54);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Grid2.default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  margin: 1rem auto;\n\n  .page--components {\n    .container {\n      padding: 0px;\n\n      &.component--text {\n        ul {\n        }\n      }\n    }\n  }\n"], ["\n  margin: 1rem auto;\n\n  .page--components {\n    .container {\n      padding: 0px;\n\n      &.component--text {\n        ul {\n        }\n      }\n    }\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Column = __webpack_require__(55);

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

exports.default = function (_ref) {
  var name = _ref.name,
      columns = _ref.columns;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name },
    _react2.default.createElement(
      _reactstrap.Row,
      null,
      columns && columns.map(function (column, idx) {
        return _react2.default.createElement(_Column2.default, _extends({}, column, { cols: columns.length, key: "key-" + idx }));
      })
    )
  );
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 1.5rem;\n  }\n  h2 {\n    font-size: 1.4rem;\n  }\n  h3 {\n    font-size: 1.3rem;\n  }\n  h4 {\n    font-size: 1.2rem;\n  }\n  img {\n    width: auto;\n  }\n"], ["\n  h1 {\n    font-size: 1.5rem;\n  }\n  h2 {\n    font-size: 1.4rem;\n  }\n  h3 {\n    font-size: 1.3rem;\n  }\n  h4 {\n    font-size: 1.2rem;\n  }\n  img {\n    width: auto;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _PageComponents = __webpack_require__(6);

var _PageComponents2 = _interopRequireDefault(_PageComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var ColStyled = (0, _styledComponents2.default)(_reactstrap.Col)(_templateObject);

exports.default = function (_ref) {
  var children = _ref.children,
      cols = _ref.cols;

  var sm = 12;
  var md = 12;
  if (cols === 2) {
    sm = 6;
    md = 6;
  } else if (cols === 3) {
    sm = 6;
    md = 4;
  } else if (cols === 4) {
    sm = 6;
    md = 3;
  }
  return _react2.default.createElement(
    ColStyled,
    { xs: "12", sm: sm, md: md },
    _react2.default.createElement(_PageComponents2.default, { components: children })
  );
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BlogPosts = __webpack_require__(57);

var _BlogPosts2 = _interopRequireDefault(_BlogPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BlogPosts2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"], ["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n"], ["\n  margin-bottom: 1rem;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Card = __webpack_require__(58);

var _Card2 = _interopRequireDefault(_Card);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

var RowInfo = (0, _styledComponents2.default)(_reactstrap.Row)(_templateObject2);

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts,
      info = _ref.info,
      max = _ref.max,
      cols = _ref.cols,
      name = _ref.name;

  if (max > 1) {
    posts = posts.slice(0, max);
  }
  if (!cols) {
    cols = 4;
  }
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name },
    _react2.default.createElement(
      RowInfo,
      null,
      _react2.default.createElement(
        _reactstrap.Col,
        null,
        info
      )
    ),
    _react2.default.createElement(
      _reactstrap.Row,
      null,
      posts && posts.map(function (post, idx) {
        return _react2.default.createElement(
          _reactstrap.Col,
          { xs: "12", md: "6", lg: cols === 4 ? 3 : 4, key: "post-" + idx },
          _react2.default.createElement(_Card2.default, {
            image: (0, _utils.getImageStyleUrl)("Card", post.image),
            title: post.title,
            text: post.summary,
            link: "/blog/" + post.slug
          })
        );
      })
    )
  );
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 2rem;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n\n  h5 {\n    min-height: 2.5rem;\n  }\n\n  img {\n    height: 180px;\n    max-width: 100%;\n    max-height: 170px;\n    -moz-transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n\n    :hover {\n      opacity: 0.9;\n      -moz-transform: scale(1.2);\n      -webkit-transform: scale(1.2);\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  margin-bottom: 2rem;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n\n  h5 {\n    min-height: 2.5rem;\n  }\n\n  img {\n    height: 180px;\n    max-width: 100%;\n    max-height: 170px;\n    -moz-transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n\n    :hover {\n      opacity: 0.9;\n      -moz-transform: scale(1.2);\n      -webkit-transform: scale(1.2);\n      transform: scale(1.2);\n    }\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  font-size: 0.9rem;\n\n  overflow: hidden;\n  position: relative;\n  line-height: 1.2rem;\n  max-height: 3.8rem;\n  min-height: 3.8rem;\n  :after {\n    content: \"\";\n    text-align: right;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 70%;\n    height: 1.2em;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 1) 50%\n    );\n  }\n"], ["\n  font-size: 0.9rem;\n\n  overflow: hidden;\n  position: relative;\n  line-height: 1.2rem;\n  max-height: 3.8rem;\n  min-height: 3.8rem;\n  :after {\n    content: \"\";\n    text-align: right;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 70%;\n    height: 1.2em;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 1) 50%\n    );\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: #444;\n  font-weight: 200;\n  :hover {\n    text-decoration: none;\n    color: black;\n  }\n"], ["\n  color: #444;\n  font-weight: 200;\n  :hover {\n    text-decoration: none;\n    color: black;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-size: 1.1rem;\n"], ["\n  font-size: 1.1rem;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var CardStyled = (0, _styledComponents2.default)(_reactstrap.Card)(_templateObject);

var Summary = (0, _styledComponents2.default)(_reactstrap.CardText)(_templateObject2);

var Zoom = _styledComponents2.default.div(_templateObject3);

var NavLinkStyled = (0, _styledComponents2.default)(_reactStatic.NavLink)(_templateObject4);

var CardTitleStyled = (0, _styledComponents2.default)(_reactstrap.CardTitle)(_templateObject5);

exports.default = function (_ref) {
  var image = _ref.image,
      title = _ref.title,
      text = _ref.text,
      link = _ref.link;
  return _react2.default.createElement(
    NavLinkStyled,
    { to: link },
    _react2.default.createElement(
      CardStyled,
      null,
      _react2.default.createElement(
        Zoom,
        null,
        image && _react2.default.createElement(_reactstrap.CardImg, { top: true, width: "100%", src: image, alt: title })
      ),
      _react2.default.createElement(
        _reactstrap.CardBody,
        null,
        _react2.default.createElement(
          CardTitleStyled,
          null,
          title
        ),
        _react2.default.createElement(
          Summary,
          null,
          text
        ),
        _react2.default.createElement(
          _reactstrap.CardText,
          null,
          _react2.default.createElement(
            "small",
            { className: "text-muted" },
            "Last updated 3 mins ago"
          )
        )
      )
    )
  );
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PageBannerMedia = __webpack_require__(60);

var _PageBannerMedia2 = _interopRequireDefault(_PageBannerMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PageBannerMedia2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  position: relative;\n  max-height: ", "px;\n  background: url(", ")\n      50% 30% / cover no-repeat,\n    linear-gradient(rgb(23, 34, 60), rgb(23, 34, 60));\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  margin-bottom: 1rem;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.05em;\n    font-weight: 600;\n    margin: 0px;\n    text-transform: uppercase;\n    padding-left: 0.5rem;\n  }\n\n  p {\n    font-size: 1rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n    padding-left: 0.5rem;\n  }\n"], ["\n  height: 100vh;\n  position: relative;\n  max-height: ", "px;\n  background: url(", ")\n      50% 30% / cover no-repeat,\n    linear-gradient(rgb(23, 34, 60), rgb(23, 34, 60));\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  margin-bottom: 1rem;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.05em;\n    font-weight: 600;\n    margin: 0px;\n    text-transform: uppercase;\n    padding-left: 0.5rem;\n  }\n\n  p {\n    font-size: 1rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n    padding-left: 0.5rem;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 4rem 4rem;\n"], ["\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 4rem 4rem;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 3.5rem;\n"], ["\n  margin-top: 3.5rem;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Breadcrumb = __webpack_require__(11);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject, function (props) {
  return props.height === "large" ? 400 : 260;
}, function (props) {
  return (0, _utils.getImageStyleUrl)(props.summary && "PageBannerMedia" || "PageBanner", props.image);
});

var Head = _styledComponents2.default.div(_templateObject2);

var InnerContainer = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject3);

exports.default = function (_ref) {
  var name = _ref.name,
      title = _ref.title,
      summary = _ref.summary,
      image = _ref.image,
      height = _ref.height;
  return _react2.default.createElement(
    ContainerStyled,
    {
      className: "component--" + name,
      fluid: true,
      image: image,
      height: height
    },
    _react2.default.createElement(
      Head,
      null,
      _react2.default.createElement(
        InnerContainer,
        null,
        _react2.default.createElement(
          "h1",
          null,
          title
        ),
        summary && _react2.default.createElement(
          "p",
          null,
          summary
        )
      )
    ),
    _react2.default.createElement(_Breadcrumb2.default, { crumbs: [{ text: title, active: true }] })
  );
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CodeBlock = __webpack_require__(62);

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CodeBlock2.default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n"], ["\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  code {\n    border: 1px solid rgb(225, 225, 225);\n    font-size: 0.8rem;\n  }\n"], ["\n  code {\n    border: 1px solid rgb(225, 225, 225);\n    font-size: 0.8rem;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHighlight = __webpack_require__(63);

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

var HighlightStyled = (0, _styledComponents2.default)(_reactHighlight2.default)(_templateObject2);

exports.default = function (_ref) {
  var name = _ref.name,
      code = _ref.code,
      language = _ref.language;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name },
    _react2.default.createElement("link", {
      rel: "stylesheet",
      href: "https://highlightjs.org/static/demo/styles/github.css"
    }),
    _react2.default.createElement(
      HighlightStyled,
      { language: language },
      code
    )
  );
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-highlight.js");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(65);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Form2.default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"], ["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 75%;\n  .row {\n    padding: 0.25rem 1rem;\n    input,\n    textarea {\n      width: 100%;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.9rem;\n    }\n  }\n"], ["\n  width: 75%;\n  .row {\n    padding: 0.25rem 1rem;\n    input,\n    textarea {\n      width: 100%;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.9rem;\n    }\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  color: red;\n  font-size: 0.8rem;\n  padding: 0.1rem 0.5rem;\n"], ["\n  color: red;\n  font-size: 0.8rem;\n  padding: 0.1rem 0.5rem;\n"]),
    _templateObject4 = _taggedTemplateLiteral([""], [""]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _formik = __webpack_require__(66);

var _fetch = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

var FormStyled = (0, _styledComponents2.default)(_formik.Form)(_templateObject2);

var ErrorStyled = (0, _styledComponents2.default)(_formik.ErrorMessage)(_templateObject3);

var TextArea = _styledComponents2.default.textarea(_templateObject4);

var initialValues = {
  name: "",
  email: "",
  message: ""
};

var validate = function validate(values) {
  var errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
};

exports.default = function (_ref) {
  var name = _ref.name,
      form = _ref.form;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name },
    _react2.default.createElement(
      _formik.Formik,
      {
        initialValues: initialValues,
        validate: validate,
        onSubmit: function onSubmit(values, _ref2) {
          var setStatus = _ref2.setStatus,
              setSubmitting = _ref2.setSubmitting;

          setTimeout(function () {
            (0, _fetch.submitForm)(form, values).then(function (result) {
              if (result === 200) {
                setStatus("success");
              } else {
                setStatus("danger");
              }
              setSubmitting(false);
            });
          }, 400);
        }
      },
      function (_ref3) {
        var isSubmitting = _ref3.isSubmitting,
            status = _ref3.status;
        return _react2.default.createElement(
          FormStyled,
          null,
          status && status === "success" && _react2.default.createElement(
            _reactstrap.Alert,
            { color: status },
            "Thank you so much for your message!"
          ),
          status && status === "danger" && _react2.default.createElement(
            _reactstrap.Alert,
            { color: status },
            "Oops! Something wrong happened. Please try again."
          ),
          _react2.default.createElement(
            _reactstrap.Row,
            null,
            _react2.default.createElement(_formik.Field, {
              type: "text",
              name: "name",
              placeholder: "Your name",
              className: "form-control"
            }),
            _react2.default.createElement(ErrorStyled, { name: "name", component: "div" })
          ),
          _react2.default.createElement(
            _reactstrap.Row,
            null,
            _react2.default.createElement(_formik.Field, {
              type: "email",
              name: "email",
              placeholder: "Your email",
              className: "form-control"
            }),
            _react2.default.createElement(ErrorStyled, { name: "email", component: "div" })
          ),
          _react2.default.createElement(
            _reactstrap.Row,
            null,
            _react2.default.createElement(_formik.Field, {
              name: "message",
              rows: "4",
              className: "form-control",
              component: "textarea"
            }),
            _react2.default.createElement(ErrorStyled, { name: "message", component: "div" })
          ),
          _react2.default.createElement(
            _reactstrap.Row,
            null,
            _react2.default.createElement(
              _reactstrap.Button,
              { type: "submit", disabled: isSubmitting },
              "Submit"
            )
          )
        );
      }
    )
  );
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.fetchSingleton = exports.fetchCollection = undefined;

var _regenerator = __webpack_require__(68);

var _regenerator2 = _interopRequireDefault(_regenerator);

var fetchCollection = exports.fetchCollection = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(collection) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios2.default.post(Config.COCKPIT_HOST + "/api/collections/get/" + collection + "?token=" + Config.COCKPIT_API_TOKEN, {
              filter: {
                published: true
              },
              populate: 1,
              simple: 1
            }).then(function (collection) {
              return collection.data;
            }).catch(function (error) {
              console.error(error);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchCollection(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchSingleton = exports.fetchSingleton = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(singleton) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _axios2.default.get(Config.COCKPIT_HOST + "/api/singletons/get/" + singleton + "?token=" + Config.COCKPIT_API_TOKEN).then(function (singletons) {
              return singletons.data;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchSingleton(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var submitForm = exports.submitForm = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(formName, values) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _axios2.default.post(Config.COCKPIT_HOST + "/api/forms/submit/" + formName + "?token=" + Config.COCKPIT_FORMS_API_TOKEN, { form: values }).then(function (response) {
              return response.status;
            }).catch(function (error) {
              console.error(error);
              return false;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function submitForm(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.fetchImageStyle = fetchImageStyle;

var _axios = __webpack_require__(69);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(10);

var Config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//


function fetchImageStyle(style, path) {
  if (!path.startsWith(Config.COCKPIT_UPLOADS_DIR)) {
    path = "" + Config.COCKPIT_UPLOADS_DIR + path;
  }

  return style && _axios2.default.get(Config.COCKPIT_HOST + "/api/imagestyles/style/" + style + "?token=" + Config.COCKPIT_API_TOKEN + "&src=" + path) || Config.COCKPIT_HOST + "/" + path;
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Video = __webpack_require__(71);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Video2.default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _Video = __webpack_require__(16);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var name = _ref.name,
      url = _ref.url,
      autoplay = _ref.autoplay;
  return _react2.default.createElement(
    _reactstrap.Container,
    { className: "component-" + name },
    _react2.default.createElement(_Video2.default, { url: url, playing: autoplay })
  );
};
//

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SubPages = __webpack_require__(73);

var _SubPages2 = _interopRequireDefault(_SubPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SubPages2.default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([""], [""]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Navigation = __webpack_require__(74);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Components = __webpack_require__(75);

var _Components2 = _interopRequireDefault(_Components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject);

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var name = _ref.name,
      title = _ref.title,
      page = _ref.page,
      match = _ref.match;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--" + name, fluid: true },
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      title && _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          "h1",
          null,
          title
        )
      ),
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { sm: "2" },
          _react2.default.createElement(_Navigation2.default, null)
        ),
        _react2.default.createElement(
          _reactstrap.Col,
          { sm: "10" },
          _react2.default.createElement(_Components2.default, {
            subpages: page.subpages,
            page: page.subpages && page.subpages.filter(function (subpage) {
              return match.url === "/" + page.slug + "/" + subpage.slug;
            })
          })
        )
      )
    )
  );
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding-top: 1rem;\n  li {\n    padding: 0.25rem 0.05rem;\n  }\n  &.none-active {\n    li:first-child a {\n      color: rgb(20, 20, 20);\n    }\n  }\n"], ["\n  padding-top: 1rem;\n  li {\n    padding: 0.25rem 0.05rem;\n  }\n  &.none-active {\n    li:first-child a {\n      color: rgb(20, 20, 20);\n    }\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  color: rgb(100, 100, 100);\n  font-size: 1rem;\n\n  font-weight: bold;\n  &.active {\n    color: rgb(20, 20, 20);\n  }\n  &:hover {\n    color: rgb(0, 0, 0);\n    text-decoration: none;\n  }\n"], ["\n  color: rgb(100, 100, 100);\n  font-size: 1rem;\n\n  font-weight: bold;\n  &.active {\n    color: rgb(20, 20, 20);\n  }\n  &:hover {\n    color: rgb(0, 0, 0);\n    text-decoration: none;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//
var NavStyled = (0, _styledComponents2.default)(_reactstrap.Nav)(_templateObject);

var NavLinkStyled = (0, _styledComponents2.default)(_reactStatic.NavLink)(_templateObject2);

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var page = _ref.page,
      match = _ref.match;
  return _react2.default.createElement(
    NavStyled,
    {
      vertical: true,
      className: match.url === "/" + page.slug && "none-active"
    },
    page.subpages && page.subpages.map(function (subpage, idx) {
      return _react2.default.createElement(
        _reactstrap.NavItem,
        { key: "submenu-" + idx },
        _react2.default.createElement(
          NavLinkStyled,
          { exact: true, to: "/" + page.slug + "/" + subpage.slug },
          subpage.title
        )
      );
    })
  );
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageComponents = __webpack_require__(6);

var _PageComponents2 = _interopRequireDefault(_PageComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var page = _ref.page,
      subpages = _ref.subpages;

  var components = [];
  if (page.length) {
    components = page[0] && page[0].components || [];
  } else {
    components = subpages[0] && subpages[0].components || [];
  }
  return _react2.default.createElement(_PageComponents2.default, { components: components });
};
//

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cockpit = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultComponents = {
  heading: _cockpit.Heading,
  text: _cockpit.Text,
  divider: _cockpit.Divider,
  customimage: _cockpit.CustomImage,
  pagebanner: _cockpit.PageBanner,
  grid: _cockpit.Grid
};

exports.default = function (_ref) {
  var components = _ref.components;
  return _react2.default.createElement(
    "div",
    { className: "page--components" },
    components && components.map(function (component_parsed, idx) {
      var name = component_parsed.component.toLowerCase();
      var settings = component_parsed.settings;
      var columns = component_parsed.columns || [];

      if (defaultComponents[name] === undefined) {
        return null;
      }

      var Component = defaultComponents[name];

      return _react2.default.createElement(Component, _extends({
        name: name
      }, settings, {
        columns: columns,
        key: "component-" + idx
      }));
    })
  );
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  min-height: 350px;\n  max-height: 500px;\n  background: url(", ")\n      50% 30% / cover no-repeat,\n    linear-gradient(rgb(23, 34, 60), rgb(23, 34, 60));\n  background-repeat: no-repeat;\n  background-position: center 0px;\n  padding: 4rem 3rem;\n  margin-bottom: 1rem;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(to bottom, rgb(0, 0, 0), transparent);\n    opacity: 0.8;\n  }\n"], ["\n  position: relative;\n  min-height: 350px;\n  max-height: 500px;\n  background: url(", ")\n      50% 30% / cover no-repeat,\n    linear-gradient(rgb(23, 34, 60), rgb(23, 34, 60));\n  background-repeat: no-repeat;\n  background-position: center 0px;\n  padding: 4rem 3rem;\n  margin-bottom: 1rem;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(to bottom, rgb(0, 0, 0), transparent);\n    opacity: 0.8;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 3rem 4rem;\n  padding-top: 6rem;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.05em;\n    font-weight: 600;\n    margin-top: 2rem;\n    text-transform: uppercase;\n    padding: 0.5rem;\n  }\n\n  p {\n    font-size: 1rem;\n    padding: 0.5rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n  }\n"], ["\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 3rem 4rem;\n  padding-top: 6rem;\n\n  h1 {\n    color: rgb(255, 255, 255);\n    font-size: 2.25rem;\n    text-align: left;\n    line-height: 1.25;\n    letter-spacing: 0.05em;\n    font-weight: 600;\n    margin-top: 2rem;\n    text-transform: uppercase;\n    padding: 0.5rem;\n  }\n\n  p {\n    font-size: 1rem;\n    padding: 0.5rem;\n    max-width: 32rem;\n    text-align: left;\n    line-height: 1.5;\n    letter-spacing: 0.1em;\n    color: rgb(255, 255, 255);\n    margin-left: initial;\n    margin-right: initial;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  .badge {\n    margin: 0.2rem;\n  }\n"], ["\n  .badge {\n    margin: 0.2rem;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Tag = __webpack_require__(78);

var _Tag2 = _interopRequireDefault(_Tag);

var _Breadcrumb = __webpack_require__(11);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var ContainerStyled = (0, _styledComponents2.default)(_reactstrap.Container)(_templateObject, function (props) {
  return (0, _utils.getImageStyleUrl)("PageBannerMedia", props.image);
});

var Head = _styledComponents2.default.div(_templateObject2);

var Categories = _styledComponents2.default.div(_templateObject3);

var PostBanner = function PostBanner(_ref) {
  var title = _ref.title,
      summary = _ref.summary,
      categories = _ref.categories,
      image = _ref.image;
  return _react2.default.createElement(
    ContainerStyled,
    { className: "component--post-banner", fluid: true, image: image },
    _react2.default.createElement(
      Head,
      null,
      _react2.default.createElement(
        _reactstrap.Container,
        null,
        _react2.default.createElement(
          "h1",
          null,
          title
        ),
        _react2.default.createElement(
          "p",
          null,
          summary
        ),
        _react2.default.createElement(
          Categories,
          null,
          categories.map(function (tag, idx) {
            return _react2.default.createElement(_Tag2.default, { tag: tag, color: "light", key: "tag-" + idx });
          })
        ),
        _react2.default.createElement(_Breadcrumb2.default, {
          crumbs: [{ text: "Blog", link: "/blog" }, { text: title, active: true }]
        })
      )
    )
  );
};

exports.default = PostBanner;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  background: transparent;\n  color: white;\n  border: 1px solid white;\n  border-radius: 4px;\n"], ["\n  background: transparent;\n  color: white;\n  border: 1px solid white;\n  border-radius: 4px;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BadgeStyled = (0, _styledComponents2.default)(_reactstrap.Badge)(_templateObject);

exports.default = function (_ref) {
  var tag = _ref.tag,
      color = _ref.color;
  return _react2.default.createElement(
    BadgeStyled,
    { color: color || "secondary" },
    tag
  );
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cockpit = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultComponents = {
  heading: _cockpit.Heading,
  text: _cockpit.Text,
  divider: _cockpit.Divider,
  customimage: _cockpit.CustomImage,
  sectiondivider: _cockpit.SectionDivider,
  leafletmap: _cockpit.LeafletMap,
  grid: _cockpit.Grid,
  codeblock: _cockpit.CodeBlock,
  form: _cockpit.Form,
  video: _cockpit.Video
};

exports.default = function (_ref) {
  var components = _ref.components;
  return _react2.default.createElement(
    "div",
    { className: "page--components" },
    components && components.map(function (component_parsed, idx) {
      var name = component_parsed.component.toLowerCase();
      var settings = component_parsed.settings;
      var columns = component_parsed.columns || [];

      if (defaultComponents[name] === undefined) {
        return null;
      }

      var Component = defaultComponents[name];

      return _react2.default.createElement(Component, _extends({
        name: name
      }, settings, {
        columns: columns,
        key: "component-" + idx
      }));
    })
  );
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  background-color: rgb(23, 34, 60);\n  padding: 1rem;\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50px;\n  z-index: 9;\n  margin-top: 1rem;\n\n  .navbar-toggler {\n    border-color: rgba(255, 255, 255, 0.8);\n    color: white;\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    padding: 0.4rem 0.8rem;\n    .navbar-toggler-icon {\n      width: 1rem;\n      height: 1rem;\n    }\n  }\n\n  .navbar-collapse {\n    ul {\n      text-align: right;\n    }\n  }\n\n  .nav-item {\n    a {\n      color: rgba(255, 255, 255, 1);\n      padding: 0.9rem 10px;\n      font-weight: 400;\n      font-size: 0.85rem;\n      letter-spacing: 0.05em;\n      font-weight: 500;\n      text-transform: uppercase;\n    }\n\n    a.active {\n      color: rgba(255, 255, 255, 0.8);\n    }\n\n    a:hover {\n      text-decoration: none;\n    }\n  }\n"], ["\n  background-color: rgb(23, 34, 60);\n  padding: 1rem;\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50px;\n  z-index: 9;\n  margin-top: 1rem;\n\n  .navbar-toggler {\n    border-color: rgba(255, 255, 255, 0.8);\n    color: white;\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    padding: 0.4rem 0.8rem;\n    .navbar-toggler-icon {\n      width: 1rem;\n      height: 1rem;\n    }\n  }\n\n  .navbar-collapse {\n    ul {\n      text-align: right;\n    }\n  }\n\n  .nav-item {\n    a {\n      color: rgba(255, 255, 255, 1);\n      padding: 0.9rem 10px;\n      font-weight: 400;\n      font-size: 0.85rem;\n      letter-spacing: 0.05em;\n      font-weight: 500;\n      text-transform: uppercase;\n    }\n\n    a.active {\n      color: rgba(255, 255, 255, 0.8);\n    }\n\n    a:hover {\n      text-decoration: none;\n    }\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BrandLogo = __webpack_require__(81);

var _BrandLogo2 = _interopRequireDefault(_BrandLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


var NavbarStyled = (0, _styledComponents2.default)(_reactstrap.Navbar)(_templateObject);

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var menuItems = this.props.menuItems || [];
      return _react2.default.createElement(
        NavbarStyled,
        { expand: "md" },
        _react2.default.createElement(
          _reactstrap.Container,
          null,
          _react2.default.createElement(_BrandLogo2.default, null),
          _react2.default.createElement(
            _reactstrap.NavbarToggler,
            { onClick: this.toggle },
            "menu"
          ),
          _react2.default.createElement(
            _reactstrap.Collapse,
            { isOpen: this.state.isOpen, navbar: true },
            _react2.default.createElement(
              _reactstrap.Nav,
              { className: "ml-auto", navbar: true },
              menuItems.map(function (page, idx) {
                return page.menu.includes("main") && _react2.default.createElement(
                  _reactstrap.NavItem,
                  { key: "menu-" + idx },
                  _react2.default.createElement(
                    _reactStatic.NavLink,
                    { exact: true, to: "/" + page.slug },
                    page.title
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Navigation);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  max-width: 200px;\n  white-space: pre-wrap;\n  font-size: 1.1rem;\n  line-height: 1.5rem;\n  color: rgb(255, 255, 255);\n  font-weight: bold;\n  padding: 0.3rem 0.7rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.8);\n  border-left: 1px solid rgba(255, 255, 255, 0.8);\n  border-right: 1px solid rgba(255, 255, 255, 0.5);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  span {\n    padding: 0px;\n  }\n  :hover {\n    text-decoration: none;\n    color: rgb(255, 255, 255);\n  }\n"], ["\n  max-width: 200px;\n  white-space: pre-wrap;\n  font-size: 1.1rem;\n  line-height: 1.5rem;\n  color: rgb(255, 255, 255);\n  font-weight: bold;\n  padding: 0.3rem 0.7rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.8);\n  border-left: 1px solid rgba(255, 255, 255, 0.8);\n  border-right: 1px solid rgba(255, 255, 255, 0.5);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  span {\n    padding: 0px;\n  }\n  :hover {\n    text-decoration: none;\n    color: rgb(255, 255, 255);\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavLinkStyled = (0, _styledComponents2.default)(_reactStatic.NavLink)(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.SiteData,
    null,
    function (_ref) {
      var siteName = _ref.siteName;
      return _react2.default.createElement(
        NavLinkStyled,
        { exact: true, to: "/" },
        _react2.default.createElement(
          "span",
          null,
          siteName
        )
      );
    }
  );
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  margin-top: 2rem;\n\n  .container-fluid {\n    text-align: center;\n    color: rgb(255, 255, 255);\n    padding: 2rem;\n    background: center 0px no-repeat,\n      linear-gradient(rgb(248, 248, 248), rgb(252, 252, 252));\n  }\n"], ["\n  margin-top: 2rem;\n\n  .container-fluid {\n    text-align: center;\n    color: rgb(255, 255, 255);\n    padding: 2rem;\n    background: center 0px no-repeat,\n      linear-gradient(rgb(248, 248, 248), rgb(252, 252, 252));\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  padding: 2rem 0px;\n\n  a {\n    padding: 1rem;\n    color: rgb(96, 91, 229);\n  }\n"], ["\n  padding: 2rem 0px;\n\n  a {\n    padding: 1rem;\n    color: rgb(96, 91, 229);\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding: 2rem 0px;\n  font-size: 0.9rem;\n  color: rgb(55, 55, 55);\n  a {\n    color: rgb(75, 75, 75);\n  }\n  span {\n    color: rgb(214, 81, 55);\n  }\n"], ["\n  padding: 2rem 0px;\n  font-size: 0.9rem;\n  color: rgb(55, 55, 55);\n  a {\n    color: rgb(75, 75, 75);\n  }\n  span {\n    color: rgb(214, 81, 55);\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactstrap = __webpack_require__(2);

var _htmr = __webpack_require__(9);

var _htmr2 = _interopRequireDefault(_htmr);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterStyles = _styledComponents2.default.footer(_templateObject);

var RowNav = (0, _styledComponents2.default)(_reactstrap.Row)(_templateObject2);

var RowCopyright = (0, _styledComponents2.default)(_reactstrap.Row)(_templateObject3);

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var pages = _ref.pages;
  return _react2.default.createElement(
    FooterStyles,
    { role: "banner" },
    _react2.default.createElement(
      _reactstrap.Container,
      { fluid: true },
      _react2.default.createElement(
        RowNav,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          null,
          _react2.default.createElement(
            "nav",
            null,
            pages && pages.map(function (page, idx) {
              return page.menu.includes("footer") && _react2.default.createElement(
                _reactStatic.NavLink,
                { key: "menu-" + idx, exact: true, to: "/" + page.slug },
                page.title
              );
            })
          )
        )
      ),
      _react2.default.createElement(
        RowCopyright,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          null,
          _react2.default.createElement(
            _reactStatic.SiteData,
            null,
            function (_ref2) {
              var copyright = _ref2.copyright;
              return _react2.default.createElement(
                "div",
                null,
                (0, _htmr2.default)(copyright)
              );
            }
          )
        )
      )
    )
  );
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.7d09a1a7.js.map