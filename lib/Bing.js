'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('./leaflet.bing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BingLayer = function (_TileLayer) {
  _inherits(BingLayer, _TileLayer);

  function BingLayer() {
    _classCallCheck(this, BingLayer);

    return _possibleConstructorReturn(this, (BingLayer.__proto__ || Object.getPrototypeOf(BingLayer)).apply(this, arguments));
  }

  _createClass(BingLayer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _get(BingLayer.prototype.__proto__ || Object.getPrototypeOf(BingLayer.prototype), 'componentWillMount', this).call(this);

      var _props = this.props,
          _map = _props.map,
          _lc = _props.layerContainer,
          bingkey = _props.bingkey,
          props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'bingkey']);

      this.leafletElement = L.bingLayer(bingkey, props);
    }
  }]);

  return BingLayer;
}(_reactLeaflet.TileLayer);

BingLayer.propTypes = {
  bingkey: _propTypes2.default.string.isRequired
};
exports.default = BingLayer;