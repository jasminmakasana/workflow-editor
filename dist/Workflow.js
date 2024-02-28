"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workflow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormContent = _interopRequireDefault(require("./FormContent"));
require("./css/workflowPreview.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("font-awesome/css/font-awesome.min.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Workflow = exports.Workflow = /*#__PURE__*/function (_Component) {
  _inherits(Workflow, _Component);
  function Workflow(props) {
    var _this;
    _classCallCheck(this, Workflow);
    _this = _callSuper(this, Workflow, [props]);
    _defineProperty(_assertThisInitialized(_this), "formRefs", []);
    _defineProperty(_assertThisInitialized(_this), "createRefs", function (data) {
      if (data && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          _this.formRefs.push( /*#__PURE__*/_react["default"].createRef());
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      var activeIndex = _this.state.activeIndex;
      var data = _this.formRefs[activeIndex].current.getDataFromForm(true);
      if (data.isValid) {
        delete data.isValid;
        var wholeData = [];
        for (var i = 0; i < _this.formRefs.length; i++) {
          var newData = _this.formRefs[i].current.getDataFromForm(false);
          wholeData = wholeData.concat(newData.formData);
        }
        // this.reFormateData(wholeData);
        _this.callApi(wholeData);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "reFormateData", function (data) {
      var jsonData = {};
      Object.keys(data).forEach(function (index) {
        var row = data[index];
        // if (row.value) {
        jsonData = _objectSpread(_objectSpread({}, jsonData), {}, _defineProperty({}, row["name"], row.value));
        // }
      });
      return jsonData;
    });
    _defineProperty(_assertThisInitialized(_this), "callApi", function (jsonData) {
      jsonData = _this.reFormateData(jsonData);
      var _this$state = _this.state,
        activeIndex = _this$state.activeIndex,
        data = _this$state.data;
      if (data[activeIndex] && data[activeIndex].apiEndPoint) {
        var requestOptions = {
          method: "POST",
          body: JSON.stringify(jsonData)
        };
        if (_this.props.getApiHeaders) {
          var headers = _this.props.getApiHeaders();
          requestOptions = _objectSpread(_objectSpread({}, requestOptions), {}, {
            headers: headers
          });
        }
        _this.setState({
          loading: true
        });
        var apiCall = fetch(data[activeIndex].apiEndPoint, requestOptions).then(function (response) {
          return response.json();
        });
        apiCall.then(function (response) {
          _this.navigateTab(activeIndex + 1);
          _this.setState({
            loading: false
          });
          if (_this.props.onFormSubmitted) {
            _this.props.onFormSubmitted(activeIndex, response);
          }
        }, function (error) {
          _this.navigateTab(activeIndex + 1);
          _this.setState({
            loading: false
          });
          if (_this.props.onFormSubmitted) {
            _this.props.onFormSubmitted(activeIndex, error);
          }
        });
      } else if (_this.props.onChangeTab) {
        _this.setState({
          loading: true
        });
        _this.props.onChangeTab(activeIndex, jsonData);
      } else {
        _this.navigateTab(activeIndex + 1);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "showNextTab", function () {
      _this.setState({
        loading: false
      });
      _this.navigateTab(_this.state.activeIndex + 1);
    });
    _defineProperty(_assertThisInitialized(_this), "onSuccessfulCall", function () {
      _this.setState({
        loading: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "displayTabs", function () {
      var _this$state2 = _this.state,
        data = _this$state2.data,
        activeIndex = _this$state2.activeIndex;
      var retData = [];
      var _loop = function _loop(i) {
        var row = data[i];
        retData.push( /*#__PURE__*/_react["default"].createElement("li", {
          key: "tab-".concat(i),
          className: i === activeIndex ? "active" : "",
          onClick: function onClick(e) {
            return _this.navigateTab(i);
          }
        }, /*#__PURE__*/_react["default"].createElement("a", null, row.tabTitle)));
      };
      for (var i = 0; i < data.length; i++) {
        _loop(i);
      }
      return retData;
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeComponent", function (e, componentIndex, type) {
      var activeIndex = _this.state.activeIndex;
      if (_this.props.onChangeComponent) {
        _this.props.onChangeComponent(e, type, activeIndex, componentIndex);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "displaytabContent", function () {
      var _this$state3 = _this.state,
        data = _this$state3.data,
        activeIndex = _this$state3.activeIndex;
      var tabData = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].content) {
          tabData.push( /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              display: activeIndex === i ? "block" : "none"
            }
          }, /*#__PURE__*/_react["default"].createElement(_FormContent["default"], {
            key: "formcontent-".concat(i),
            content: data[i],
            ref: _this.formRefs[i],
            onChangeComponent: _this.onChangeComponent
          })));
        } else if (data[i].htmlContent) {
          tabData.push( /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              display: activeIndex === i ? "block" : "none"
            }
          }, /*#__PURE__*/_react["default"].createElement(_FormContent["default"], {
            key: "formcontent-".concat(i),
            content: data[i],
            ref: _this.formRefs[i],
            onChangeComponent: _this.onChangeComponent
          })));
        } else {
          tabData.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: "formcontent-".concat(i)
          }));
        }
      }
      return tabData;
    });
    _this.state = {
      data: _this.props.formData,
      activeIndex: 0,
      loading: false
    };
    _this.createRefs(_this.props.formData);
    return _this;
  }
  _createClass(Workflow, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (JSON.stringify(prevProps.formData) !== JSON.stringify(this.props.formData)) {
        this.setState({
          data: this.props.formData,
          activeIndex: 0
        });
        this.createRefs(this.props.formData);
      }
    }
  }, {
    key: "navigateTab",
    value: function navigateTab(index) {
      var data = this.state.data;
      var length = data.length;
      if (index >= 0 && index <= length - 1) {
        this.setState({
          activeIndex: index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state4 = this.state,
        data = _this$state4.data,
        activeIndex = _this$state4.activeIndex,
        loading = _this$state4.loading;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block workflow-tabs-container"
      }, /*#__PURE__*/_react["default"].createElement("ul", null, this.displayTabs()), /*#__PURE__*/_react["default"].createElement("div", {
        className: "workflow-tab-content"
      }, this.displaytabContent(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block pre-next-buttons"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "blue-button ".concat(activeIndex === 0 ? "disable" : ""),
        onClick: function onClick(e) {
          return _this2.navigateTab(activeIndex - 1);
        }
      }, "Previous"), activeIndex !== data.length - 1 && /*#__PURE__*/_react["default"].createElement("button", {
        className: "blue-button float-right m-r-0 ".concat(activeIndex === data.length - 1 || loading ? "disable" : ""),
        onClick: this.onClickNext,
        disabled: loading
      }, "Next"), activeIndex === data.length - 1 && /*#__PURE__*/_react["default"].createElement("button", {
        className: "blue-button float-right m-r-0 ".concat(loading ? "disable" : ""),
        onClick: this.onClickNext,
        disabled: loading
      }, "Finish")))));
    }
  }]);
  return Workflow;
}(_react.Component);