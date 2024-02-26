"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.componentType = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CustomTextbox = require("./components/CustomTextbox");
var _CustomSelectbox = require("./components/CustomSelectbox");
var _CustomTextArea = require("./components/CustomTextArea");
var _CustomRadioCheckbox = require("./components/CustomRadioCheckbox");
var _CustomFile = require("./components/CustomFile");
var _CustomLabel = require("./components/CustomLabel");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var componentType = exports.componentType = {
  TEXT: "text",
  RADIO: "radio",
  CHECK_BOX: "checkbox",
  NUMBER: "number",
  DATE: "date",
  TEXT_AREA: "textarea",
  SELECTBOX: "select",
  FILE: "file",
  LABEL: "label"
};
var FormContent = /*#__PURE__*/function (_Component) {
  _inherits(FormContent, _Component);
  function FormContent(props) {
    var _this;
    _classCallCheck(this, FormContent);
    _this = _callSuper(this, FormContent, [props]);
    _defineProperty(_assertThisInitialized(_this), "updateForm", function (content) {
      _this.setState({
        title: content.title,
        subHeading: content.subHeading,
        formData: content.content
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleStateChange", function (e, index, type) {
      var formData = _this.state.formData;
      var _e$target = e.target,
        value = _e$target.value,
        checked = _e$target.checked;
      if (type === componentType.RADIO) {
        formData[index].value = [value];
      } else if (type === componentType.CHECK_BOX) {
        if (checked) {
          formData[index].value.push(value);
        } else {
          var i = formData[index].value.indexOf(value);
          formData[index].value.splice(i, 1);
        }
      } else {
        formData[index].value = value;
      }
      _this.props.onChangeComponent(e, index, type);
      _this.setState({
        formData: formData
      });
    });
    _defineProperty(_assertThisInitialized(_this), "validate", function (isSubmitted) {
      var formData = _this.state.formData;
      var validObj = {
        isValid: true,
        message: ""
      };
      var isValid = true;
      var retData = [];
      for (var i = 0; i < formData.length; i++) {
        retData.push(validObj);
      }
      if (isSubmitted) {
        for (var _i = 0; _i < formData.length; _i++) {
          var formItem = formData[_i];
          if (formItem.isRequired) {
            if (!formItem.value) {
              retData[_i] = {
                isValid: false,
                message: formItem.errorMessage
              };
              isValid = false;
            } else {
              if (formItem.validations && formItem.validations.length > 0) {
                for (var j = 0; j < formItem.validations.length; j++) {
                  var isItemValid = _this.validateValue(formItem.value, formItem.validations[j].regEx);
                  if (!isItemValid) {
                    retData[_i] = {
                      isValid: isItemValid,
                      message: formItem.validations[j].message
                    };
                    isValid = false;
                    break;
                  }
                }
              }
            }
          } else {
            if (formItem.value && formItem.validations && formItem.validations.length > 0) {
              for (var _j = 0; _j < formItem.validations.length; _j++) {
                var _isItemValid = _this.validateValue(formItem.value, formItem.validations[_j].regEx);
                if (!_isItemValid) {
                  retData[_i] = {
                    isValid: _isItemValid,
                    message: formItem.validations[_j].message
                  };
                  isValid = false;
                  break;
                }
              }
            }
          }
        }
      }
      return {
        errorData: retData,
        isValid: isValid
      };
    });
    _defineProperty(_assertThisInitialized(_this), "validateValue", function (value, regEx) {
      var regO = new RegExp(regEx);
      return regO.test(value);
    });
    _defineProperty(_assertThisInitialized(_this), "displayFormData", function () {
      var _this$state = _this.state,
        isSubmitted = _this$state.isSubmitted,
        formData = _this$state.formData,
        htmlContent = _this$state.htmlContent;
      var retData = [];
      if (formData) {
        var _this$validate = _this.validate(isSubmitted),
          errorData = _this$validate.errorData;
        if (formData) {
          for (var j = 0; j < formData.length; j++) {
            var data = formData[j];
            retData.push(_this.displayformField(data, errorData[j], j));
          }
        }
      } else if (htmlContent) {
        retData.push( /*#__PURE__*/_react["default"].createElement("div", null, htmlContent));
      }
      return retData;
    });
    _defineProperty(_assertThisInitialized(_this), "getDataFromForm", function (validate) {
      var errorData = {
        isValid: true
      };
      if (validate) {
        errorData = _this.validate(true);
        _this.setState({
          isSubmitted: true
        });
      }
      return {
        isValid: errorData.isValid,
        formData: _this.state.formData
      };
    });
    _defineProperty(_assertThisInitialized(_this), "displayformField", function (formData, error, index) {
      var frmData = [];
      if (formData.type === componentType.TEXT || formData.type === componentType.NUMBER || formData.type === componentType.DATE) {
        frmData.push( /*#__PURE__*/_react["default"].createElement(_CustomTextbox.CustomTextbox, {
          key: formData.id,
          containerClass: "form-group",
          type: formData.type,
          inputClass: "form-control",
          htmlFor: formData.name,
          id: formData.name,
          placeholder: formData.placeholder,
          name: formData.name,
          value: formData.value,
          onChange: function onChange(e) {
            return _this.handleStateChange(e, index, formData.type);
          },
          isValid: error.isValid,
          message: error.message,
          notice: formData.notice,
          label: formData.title,
          isRequired: formData.isRequired
        }));
      } else if (formData.type === componentType.TEXT_AREA) {
        frmData.push( /*#__PURE__*/_react["default"].createElement(_CustomTextArea.CustomTextArea, {
          key: formData.id,
          containerClass: "form-group",
          rows: 5,
          inputClass: "form-control textarea",
          htmlFor: formData.name,
          id: formData.name,
          name: formData.name,
          value: formData.value,
          onChange: function onChange(e) {
            return _this.handleStateChange(e, index, formData.type);
          },
          isValid: error.isValid,
          message: error.message,
          notice: formData.notice,
          label: formData.title,
          isRequired: formData.isRequired
        }));
      } else if (formData.type === componentType.SELECTBOX) {
        frmData.push( /*#__PURE__*/_react["default"].createElement(_CustomSelectbox.CustomSelectbox, {
          key: formData.id,
          containerClass: "form-group",
          inputClass: "form-control",
          htmlFor: formData.id,
          id: formData.id,
          name: formData.name,
          value: formData.value,
          options: formData.options,
          onChange: function onChange(e) {
            return _this.handleStateChange(e, index, formData.type);
          },
          isValid: error.isValid,
          message: error.message,
          label: formData.title,
          notice: formData.notice,
          isRequired: formData.isRequired
        }));
      } else if (formData.type === componentType.RADIO || formData.type === componentType.CHECK_BOX) {
        frmData.push( /*#__PURE__*/_react["default"].createElement(_CustomRadioCheckbox.CustomRadioCheckbox, {
          key: formData.id,
          containerClass: "form-group",
          inputClass: "form-control d-inline-block w-auto p-0",
          type: formData.type,
          htmlFor: formData.id,
          id: formData.id,
          name: formData.name,
          value: formData.value,
          options: formData.options,
          onChange: function onChange(e) {
            return _this.handleStateChange(e, index, formData.type);
          },
          isValid: error.isValid,
          message: error.message,
          label: formData.title,
          notice: formData.notice,
          isRequired: formData.isRequired
        }));
      } else if (formData.type === componentType.FILE) {
        frmData.push( /*#__PURE__*/_react["default"].createElement(_CustomFile.CustomFile, {
          key: formData.id,
          containerClass: "form-group",
          type: formData.type,
          inputClass: "form-control",
          htmlFor: formData.name,
          id: formData.name,
          name: formData.name,
          value: formData.value,
          onChange: function onChange(e) {
            return _this.handleStateChange(e, index, formData.type);
          },
          isValid: error.isValid,
          message: error.message,
          notice: formData.notice,
          label: formData.title,
          isRequired: formData.isRequired
        }));
      } else if (formData.type === componentType.LABEL) {
        frmData.push( /*#__PURE__*/_react["default"].createElement(_CustomLabel.CustomLabel, {
          key: formData.id,
          containerClass: "form-group",
          type: formData.type,
          inputClass: "form-control",
          htmlFor: formData.name,
          id: formData.name,
          name: formData.name,
          value: formData.value,
          onChange: function onChange(e) {
            return _this.handleStateChange(e, index, formData.type);
          },
          isValid: error.isValid,
          message: error.message,
          notice: formData.notice,
          label: formData.title,
          isRequired: formData.isRequired
        }));
      }
      return frmData;
    });
    var _content = props.content;
    _this.state = {
      title: _content.title,
      subHeading: _content.subHeading,
      formData: _content.content,
      htmlContent: _content.htmlContent,
      isSubmitted: _this.props.isSubmittedStatus
    };
    return _this;
  }
  _createClass(FormContent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (JSON.stringify(prevProps.content) !== JSON.stringify(this.props.content)) {
        var content = this.props.content;
        this.setState({
          title: content.title,
          subHeading: content.subHeading,
          formData: content.content,
          isSubmitted: this.props.isSubmittedStatus
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        subHeading = _this$state2.subHeading,
        title = _this$state2.title;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "workflow-tab-pane"
      }, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("p", null, subHeading), this.displayFormData());
    }
  }]);
  return FormContent;
}(_react.Component);
var _default = exports["default"] = FormContent;