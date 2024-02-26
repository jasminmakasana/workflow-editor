"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
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
var RadioGroup = exports.RadioGroup = /*#__PURE__*/function (_Component) {
  _inherits(RadioGroup, _Component);
  function RadioGroup(props) {
    var _this;
    _classCallCheck(this, RadioGroup);
    _this = _callSuper(this, RadioGroup, [props]);
    _defineProperty(_assertThisInitialized(_this), "titleRef", null);
    _defineProperty(_assertThisInitialized(_this), "getContent", function () {
      var _this$state = _this.state,
        id = _this$state.id,
        name = _this$state.name,
        title = _this$state.title,
        isRequired = _this$state.isRequired,
        options = _this$state.options,
        errorMessage = _this$state.errorMessage,
        notice = _this$state.notice,
        value = _this$state.value;
      return {
        id: id,
        name: name,
        title: title,
        isRequired: isRequired,
        options: options,
        errorMessage: errorMessage,
        notice: notice,
        value: value,
        type: _this.props.type
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onClickEditTitle", function () {
      _this.setState({
        editTitle: true
      });
      setTimeout(function () {
        _this.titleRef.current.focus();
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleStateChange", function (e) {
      var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
      _this.setState(_defineProperty({}, name, value));
      _this.setProperties(_defineProperty({}, name, value));
    });
    _defineProperty(_assertThisInitialized(_this), "onFocusOutTitle", function () {
      _this.setState({
        editTitle: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "toggleIsRequired", function (e) {
      e.preventDefault();
      _this.setState({
        isRequired: !_this.state.isRequired
      });
      _this.setProperties({
        isRequired: !_this.state.isRequired
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeOption", function (index, e) {
      var value = e.target.value;
      var options = _this.state.options;
      options[index].label = value;
      _this.setState({
        options: options
      });
      _this.setProperties({
        options: options
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeradioState", function (index, e) {
      var _this$state2 = _this.state,
        options = _this$state2.options,
        value = _this$state2.value;
      var radioval = [];
      // options[index].isChecked = e.target.checked;
      value = [options[index].value];
      radioval.push(options[index].value);
      _this.setState({
        options: options,
        value: value
      });
      _this.setProperties({
        options: options,
        value: value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onBlurOption", function (index, e) {
      var options = _this.state.options;
      options[index].isEdit = false;
      _this.setState({
        options: options
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onClickCopyOption", function (index, e) {
      e.preventDefault();
      var options = _this.state.options;
      var length = options.length;
      var newoption = [];
      for (var i = 0; i < length; i++) {
        var option = options[i];
        if (index == i) {
          newoption.push(_objectSpread({}, option));
          newoption.push(_objectSpread({}, option));
        } else {
          newoption.push(option);
        }
      }
      _this.setState({
        options: newoption
      });
      _this.setProperties({
        options: options
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onClickRemoveOption", function (index, e) {
      e.preventDefault();
      var options = _this.state.options;
      options.splice(index, 1);
      _this.setState({
        options: options
      });
      _this.setProperties({
        options: options
      });
    });
    _defineProperty(_assertThisInitialized(_this), "renderOptions", function () {
      var _this$state3 = _this.state,
        options = _this$state3.options,
        value = _this$state3.value,
        radioindex = _this$state3.radioindex;
      var retData = [];
      var _loop = function _loop(j) {
        var option = options[j];
        retData.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: "check-".concat(j),
          className: "form-check"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "radio",
          name: "radiodata-".concat(radioindex),
          checked: value.indexOf(option.value) !== -1,
          onClick: function onClick(e) {
            return _this.onChangeradioState(j, e);
          },
          className: "form-check-input"
        }), !option.isEdit && /*#__PURE__*/_react["default"].createElement("label", {
          className: "form-check-label"
        }, option.label), option.isEdit && /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          value: option.label,
          onChange: function onChange(e) {
            return _this.onChangeOption(j, e);
          },
          onBlur: function onBlur(e) {
            return _this.onBlurOption(j, e);
          }
        }), /*#__PURE__*/_react["default"].createElement("a", {
          href: void 0,
          className: "d-inline-block ml-2"
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-edit",
          onClick: function onClick(e) {
            return _this.onClickEditOption(j, e);
          }
        })), /*#__PURE__*/_react["default"].createElement("a", {
          href: void 0,
          className: "d-inline-block ml-2"
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-copy",
          onClick: function onClick(e) {
            return _this.onClickCopyOption(j, e);
          }
        })), /*#__PURE__*/_react["default"].createElement("a", {
          href: void 0,
          className: "d-inline-block ml-2"
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-times",
          onClick: function onClick(e) {
            return _this.onClickRemoveOption(j, e);
          }
        }))));
      };
      for (var j = 0; j < options.length; j++) {
        _loop(j);
      }
      return retData;
    });
    _defineProperty(_assertThisInitialized(_this), "onClickAddOption", function (e) {
      e.preventDefault();
      var options = _this.state.options;
      options.push({
        label: "Item ".concat(options.length + 1),
        value: options.length + 1,
        isChecked: false
      });
      _this.setState({
        options: options
      });
      _this.setProperties({
        options: options
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onClickEditOption", function (index, e) {
      e.preventDefault();
      var options = _this.state.options;
      options[index].isEdit = true;
      _this.setState({
        options: options
      });
    });
    _defineProperty(_assertThisInitialized(_this), "setProperties", function (sendData) {
      var _this$state4 = _this.state,
        id = _this$state4.id,
        name = _this$state4.name,
        title = _this$state4.title,
        isRequired = _this$state4.isRequired,
        notice = _this$state4.notice,
        errorMessage = _this$state4.errorMessage,
        options = _this$state4.options,
        value = _this$state4.value;
      var type = _this.props.type;
      var properties = _objectSpread({
        type: type,
        id: id,
        name: name,
        title: title,
        notice: notice,
        isRequired: isRequired,
        errorMessage: errorMessage,
        value: value,
        options: options
      }, sendData);
      _this.props.setPropertiesData(properties, _this.props.location);
      _this.setIsActive(true);
    });
    _defineProperty(_assertThisInitialized(_this), "changeProperties", function (formContent) {
      var id = formContent.id,
        name = formContent.name,
        title = formContent.title,
        isRequired = formContent.isRequired,
        notice = formContent.notice,
        errorMessage = formContent.errorMessage,
        options = formContent.options,
        value = formContent.value;
      _this.setState({
        id: id,
        name: name,
        title: title,
        notice: notice,
        errorMessage: errorMessage,
        options: options,
        value: value,
        isRequired: isRequired
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onClickDelete", function () {
      _this.props.onClickDelete(_this.props.location);
    });
    _defineProperty(_assertThisInitialized(_this), "setIsActive", function (isActive) {
      _this.setState({
        isActive: isActive
      });
    });
    _this.state = {
      id: "question",
      name: "question",
      title: "Question",
      editTitle: false,
      options: [],
      value: [],
      isRequired: true,
      errorMessage: "Error message",
      notice: "",
      isActive: false,
      radioindex: _this.props.name
    };
    _this.titleRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state5 = this.state,
        title = _this$state5.title,
        editTitle = _this$state5.editTitle,
        isRequired = _this$state5.isRequired,
        notice = _this$state5.notice,
        errorMessage = _this$state5.errorMessage,
        sendData = _this$state5.sendData,
        isActive = _this$state5.isActive;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block mb-4 question-container ".concat(isActive ? "active" : "")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block text-right pr-4 pb-1"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: void 0,
        className: "float-left"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-bars"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: void 0,
        onClick: this.onClickDelete,
        className: "d-inline-block mr-3"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-times-circle"
      })), !isRequired && /*#__PURE__*/_react["default"].createElement("a", {
        href: void 0,
        onClick: this.toggleIsRequired,
        className: "d-inline-block mr-3 required-icon"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "/")), isRequired && /*#__PURE__*/_react["default"].createElement("a", {
        onClick: this.toggleIsRequired,
        className: "d-inline-block mr-3 required-icon"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-inline-block mr-3"
      }, /*#__PURE__*/_react["default"].createElement("b", null, "Radio Group")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-inline-block"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: void 0
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-edit"
      }), " ", /*#__PURE__*/_react["default"].createElement("b", {
        onClick: function onClick() {
          return _this2.setProperties({});
        }
      }, "Properties"), " ", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-angle-right"
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block p-3 question-container-inner"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "pb-3 question-heading ".concat(editTitle ? "d-none" : "d-block")
      }, title, isRequired && /*#__PURE__*/_react["default"].createElement("span", null, "*"), "\xA0", /*#__PURE__*/_react["default"].createElement("a", {
        href: void 0,
        onClick: this.onClickEditTitle
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-edit"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "pb-3 question-heading ".concat(editTitle ? "d-block" : "d-none")
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: title,
        name: "title",
        onChange: this.handleStateChange,
        onBlur: this.onFocusOutTitle,
        ref: this.titleRef
      }), isRequired && /*#__PURE__*/_react["default"].createElement("span", null, "\xA0*")), this.renderOptions(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group pt-3"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: void 0,
        className: "d-inline-block mr-3"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-plus",
        onClick: this.onClickAddOption
      }))), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mb-0"
      }, errorMessage), /*#__PURE__*/_react["default"].createElement("p", {
        className: "small mb-0"
      }, notice)));
    }
  }]);
  return RadioGroup;
}(_react.Component);