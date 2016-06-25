(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-leaflet"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeaflet"] = factory(require("react"), require("react-leaflet"));
	else
		root["ReactLeaflet"] = factory(root["React"], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BingLayer = undefined;

	var _Bing = __webpack_require__(1);

	var _Bing2 = _interopRequireDefault(_Bing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BingLayer = _Bing2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactLeaflet = __webpack_require__(3);

	var _leaflet = __webpack_require__(4);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BingLayer = function (_BaseTileLayer) {
	  _inherits(BingLayer, _BaseTileLayer);

	  function BingLayer() {
	    _classCallCheck(this, BingLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BingLayer).apply(this, arguments));
	  }

	  _createClass(BingLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(BingLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var key = _props.key;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;

	      var props = _objectWithoutProperties(_props, ['key', 'map', 'layerContainer']);

	      this.leafletElement = L.BingLayer(key, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return BingLayer;
	}(BaseTileLayer);

	BingLayer.propTypes = {
	  key: _react.PropTypes.object.isRequired
	};
	exports.default = BingLayer;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	L.BingLayer = L.TileLayer.extend({
		options: {
			subdomains: [0, 1, 2, 3],
			type: 'Aerial',
			attribution: 'Bing',
			culture: ''
		},

		initialize: function initialize(key, options) {
			L.Util.setOptions(this, options);

			this._key = key;
			this._url = null;
			this._providers = [];
			this.metaRequested = false;
		},

		tile2quad: function tile2quad(x, y, z) {
			var quad = '';
			for (var i = z; i > 0; i--) {
				var digit = 0;
				var mask = 1 << i - 1;
				if ((x & mask) !== 0) digit += 1;
				if ((y & mask) !== 0) digit += 2;
				quad = quad + digit;
			}
			return quad;
		},

		getTileUrl: function getTileUrl(tilePoint) {
			var zoom = this._getZoomForUrl();
			var subdomains = this.options.subdomains,
			    s = this.options.subdomains[Math.abs((tilePoint.x + tilePoint.y) % subdomains.length)];
			return this._url.replace('{subdomain}', s).replace('{quadkey}', this.tile2quad(tilePoint.x, tilePoint.y, zoom)).replace('{culture}', this.options.culture);
		},

		loadMetadata: function loadMetadata() {
			if (this.metaRequested) return;
			this.metaRequested = true;
			var _this = this;
			var cbid = '_bing_metadata_' + L.Util.stamp(this);
			window[cbid] = function (meta) {
				window[cbid] = undefined;
				var e = document.getElementById(cbid);
				e.parentNode.removeChild(e);
				if (meta.errorDetails) {
					throw new Error(meta.errorDetails);
					return;
				}
				_this.initMetadata(meta);
			};
			var urlScheme = document.location.protocol === 'file:' ? 'http' : document.location.protocol.slice(0, -1);
			var url = urlScheme + '://dev.virtualearth.net/REST/v1/Imagery/Metadata/' + this.options.type + '?include=ImageryProviders&jsonp=' + cbid + '&key=' + this._key + '&UriScheme=' + urlScheme;
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;
			script.id = cbid;
			document.getElementsByTagName('head')[0].appendChild(script);
		},

		initMetadata: function initMetadata(meta) {
			var r = meta.resourceSets[0].resources[0];
			this.options.subdomains = r.imageUrlSubdomains;
			this._url = r.imageUrl;
			if (r.imageryProviders) {
				for (var i = 0; i < r.imageryProviders.length; i++) {
					var p = r.imageryProviders[i];
					for (var j = 0; j < p.coverageAreas.length; j++) {
						var c = p.coverageAreas[j];
						var coverage = { zoomMin: c.zoomMin, zoomMax: c.zoomMax, active: false };
						var bounds = new L.LatLngBounds(new L.LatLng(c.bbox[0] + 0.01, c.bbox[1] + 0.01), new L.LatLng(c.bbox[2] - 0.01, c.bbox[3] - 0.01));
						coverage.bounds = bounds;
						coverage.attrib = p.attribution;
						this._providers.push(coverage);
					}
				}
			}
			this._update();
		},

		_update: function _update() {
			if (this._url === null || !this._map) return;
			this._update_attribution();
			L.TileLayer.prototype._update.apply(this, []);
		},

		_update_attribution: function _update_attribution() {
			var bounds = this._map.getBounds();
			var zoom = this._map.getZoom();
			for (var i = 0; i < this._providers.length; i++) {
				var p = this._providers[i];
				if (zoom <= p.zoomMax && zoom >= p.zoomMin && bounds.intersects(p.bounds)) {
					if (!p.active && this._map.attributionControl) this._map.attributionControl.addAttribution(p.attrib);
					p.active = true;
				} else {
					if (p.active && this._map.attributionControl) this._map.attributionControl.removeAttribution(p.attrib);
					p.active = false;
				}
			}
		},

		onAdd: function onAdd(map) {
			this.loadMetadata();
			L.TileLayer.prototype.onAdd.apply(this, [map]);
		},

		onRemove: function onRemove(map) {
			for (var i = 0; i < this._providers.length; i++) {
				var p = this._providers[i];
				if (p.active && this._map.attributionControl) {
					this._map.attributionControl.removeAttribution(p.attrib);
					p.active = false;
				}
			}
			L.TileLayer.prototype.onRemove.apply(this, [map]);
		}
	});

	L.bingLayer = function (key, options) {
		return new L.BingLayer(key, options);
	};

/***/ }
/******/ ])
});
;