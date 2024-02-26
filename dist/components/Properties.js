"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLProperties = void 0;
var _react = _interopRequireWildcard(require("react"));
var _WorkflowEditor = require("../WorkflowEditor");
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
var HTMLProperties = exports.HTMLProperties = /*#__PURE__*/function (_Component) {
  _inherits(HTMLProperties, _Component);
  function HTMLProperties(props) {
    var _this;
    _classCallCheck(this, HTMLProperties);
    _this = _callSuper(this, HTMLProperties, [props]);
    _defineProperty(_assertThisInitialized(_this), "setProperties", function (properties) {
      var title = properties.title,
        isRequired = properties.isRequired,
        type = properties.type,
        name = properties.name,
        notice = properties.notice,
        placeholder = properties.placeholder,
        id = properties.id,
        errorMessage = properties.errorMessage,
        options = properties.options,
        validations = properties.validations,
        value = properties.value;
      var formContent = _this.state.formContent;
      formContent.title = title;
      formContent.value = value;
      formContent.isRequired = isRequired;
      formContent.type = type;
      formContent.name = name;
      formContent.notice = notice;
      formContent.placeholder = placeholder;
      formContent.id = id;
      formContent.errorMessage = errorMessage;
      formContent.options = options;
      formContent.validations = validations;
      _this.setState({
        formContent: formContent
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleChangeFormContent", function (e) {
      var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;
      var formContent = _this.state.formContent;
      formContent[name] = value;
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "handleOptionChange", function (e, index) {
      var _e$target2 = e.target,
        value = _e$target2.value,
        name = _e$target2.name;
      var formContent = _this.state.formContent;
      formContent.options[index][name] = value;
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "onClickRemoveFormData", function (index, e) {
      e.preventDefault();
      var formContent = _this.state.formContent;
      formContent.options.splice(index, 1);
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "handleoptioanschecked", function (index, e) {
      var formContent = _this.state.formContent;
      formContent.options[index].isChecked = e.target.checked;
      for (var i = 0; i < formContent.options.length; i++) {
        if (i == index) {
          if (e.target.checked) {
            formContent.value.push(formContent.options[i].value);
          } else {
            for (var j = 0; j < formContent.value.length; j++) {
              if (formContent.options[i].value === formContent.value[j]) {
                formContent.value.splice(j, 1);
              }
            }
          }
        }
      }
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeradioState", function (index, e) {
      var formContent = _this.state.formContent;
      formContent.options[index].isChecked = e.target.checked;
      var radioval = [];
      formContent.options[index].isChecked = e.target.checked;
      radioval.push(formContent.options[index].value);
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "renderOptions", function () {
      var formContent = _this.state.formContent;
      var retData = [];
      var _loop = function _loop(i) {
        var row = formContent.options[i];
        retData.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: "options-".concat(i),
          className: "d-block mb-3"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block w-100 align-top"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block align-top w-25 pr-1"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          name: "value",
          value: row.value,
          onChange: function onChange(e) {
            return _this.handleOptionChange(e, i);
          }
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block align-top w-25 pl-1"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          name: "label",
          value: row.label,
          onChange: function onChange(e) {
            return _this.handleOptionChange(e, i);
          }
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block align-top w-25 pl-1"
        }, row.isChecked && formContent.type === _WorkflowEditor.componentType.CHECK_BOX && /*#__PURE__*/_react["default"].createElement("div", {
          className: "form-check"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "checkbox",
          className: "form-check-input",
          checked: row.isChecked,
          onChange: function onChange(e) {
            return _this.handleoptioanschecked(i, e);
          }
        })), formContent.type === _WorkflowEditor.componentType.RADIO && /*#__PURE__*/_react["default"].createElement("div", {
          className: "form-check"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "radio",
          name: "radiodata-props",
          checked: formContent.value.indexOf(row.value) !== -1,
          onChange: function onChange(e) {
            return _this.onChangeradioState(i, e);
          },
          className: "form-check-input"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block w-25 align-top"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn text-primary"
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-times",
          onClick: function onClick(e) {
            return _this.onClickRemoveFormData(i, e);
          }
        })))))));
      };
      for (var i = 0; i < formContent.options.length; i++) {
        _loop(i);
      }
      return retData;
    });
    _defineProperty(_assertThisInitialized(_this), "addNewOption", function () {
      var formContent = _this.state.formContent;
      formContent.options.push({
        label: "Item ".concat(formContent.options.length + 1),
        value: formContent.options.length + 1,
        isChecked: false
      });
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "addNewValidationData", function () {
      var formContent = _this.state.formContent;
      formContent.validations.push({
        regEx: "",
        message: ""
      });
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "renderValidations", function () {
      var formContent = _this.state.formContent;
      var retData = [];
      var _loop2 = function _loop2(i) {
        var row = formContent.validations[i];
        retData.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: "validations-".concat(i),
          className: "d-block mb-3"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block w-75 align-top"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block w-50 pr-1"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          name: "regularexpression",
          value: row.regEx,
          onChange: function onChange(e) {
            return _this.handleChangeValidationContent(e, i);
          }
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block w-50 pl-1"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          name: "errormessage",
          value: row.message,
          onChange: function onChange(e) {
            return _this.handleChangeValidationContent(e, i);
          }
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "d-inline-block w-25 align-top"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn text-primary"
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-times",
          onClick: function onClick(e) {
            return _this.onClickRemoveValidationData(i, e);
          }
        })))));
      };
      for (var i = 0; i < formContent.validations.length; i++) {
        _loop2(i);
      }
      return retData;
    });
    _defineProperty(_assertThisInitialized(_this), "handleChangeValidationContent", function (e, index) {
      var _e$target3 = e.target,
        value = _e$target3.value,
        name = _e$target3.name;
      var formContent = _this.state.formContent;
      for (var i = 0; i < formContent.validations.length; i++) {
        if (i === index && name === "regularexpression") {
          formContent.validations[i].regEx = value;
        } else if (i === index && name === "errormessage") {
          formContent.validations[i].message = value;
        }
      }
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "onClickRemoveValidationData", function (index, e) {
      e.preventDefault();
      var formContent = _this.state.formContent;
      formContent.validations.splice(index, 1);
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "setRequiredProperty", function (e) {
      var formContent = _this.state.formContent;
      formContent.isRequired = e.target.checked;
      _this.setState({
        formContent: formContent
      });
      _this.props.onChangeContent(formContent);
    });
    _defineProperty(_assertThisInitialized(_this), "getComponentName", function () {
      var formContent = _this.state.formContent;
      if (formContent.type === _WorkflowEditor.componentType.TEXT) {
        return "Single Input";
      } else if (formContent.type === _WorkflowEditor.componentType.RADIO) {
        return "Radio Group";
      } else if (formContent.type === _WorkflowEditor.componentType.SELECTBOX) {
        return "Drop Down";
      } else if (formContent.type === _WorkflowEditor.componentType.CHECK_BOX) {
        return "Checkbox";
      } else if (formContent.type === _WorkflowEditor.componentType.FILE) {
        return "Upload File";
      } else if (formContent.type === _WorkflowEditor.componentType.DATE) {
        return "Type Date";
      } else if (formContent.type === _WorkflowEditor.componentType.TEXT_AREA) {
        return "Text Area";
      }
      return "";
    });
    _this.state = {
      formContent: {
        title: "",
        isRequired: false,
        type: "",
        name: "",
        notice: "",
        placeholder: "",
        id: "",
        errorMessage: "",
        dropdownval: [],
        options: [],
        validations: []
      }
    };
    return _this;
  }
  _createClass(HTMLProperties, [{
    key: "render",
    value: function render() {
      var formContent = this.state.formContent;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block pb-2 title"
      }, this.getComponentName()), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Title"
      }, "Title"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        id: "Title",
        value: formContent["title"],
        onChange: this.handleChangeFormContent,
        name: "title"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Title"
      }, "Name"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        id: "Name",
        name: "name",
        value: formContent["name"],
        onChange: this.handleChangeFormContent
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Value"
      }, "Value"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        id: "Value",
        name: "value",
        value: formContent["value"],
        onChange: this.handleChangeFormContent
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Title"
      }, "Id"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        id: "Id",
        name: "id",
        value: formContent["id"],
        onChange: this.handleChangeFormContent
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "notice"
      }, "Notice"), /*#__PURE__*/_react["default"].createElement("textarea", {
        className: "form-control",
        id: "notice",
        name: "notice",
        value: formContent["notice"],
        onChange: this.handleChangeFormContent
      })), (formContent.type === _WorkflowEditor.componentType.TEXT || formContent.type === _WorkflowEditor.componentType.TEXT_AREA) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "placeholder"
      }, "Place holder"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        id: "placeholder",
        name: "placeholder",
        value: formContent["placeholder"],
        onChange: this.handleChangeFormContent
      })), formContent.isRequired != undefined && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group form-check"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        checked: formContent.isRequired,
        onChange: this.setRequiredProperty,
        className: "form-check-input"
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "form-check-label"
      }, "Is required")), formContent.isRequired && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "errorMessage"
      }, "Required message"), /*#__PURE__*/_react["default"].createElement("textarea", {
        className: "form-control",
        id: "errorMessage",
        name: "errorMessage",
        value: formContent["errorMessage"],
        onChange: this.handleChangeFormContent
      })), formContent.validations && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title pb-3"
      }, "Regular expressions"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, formContent.validations.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block w-75"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Value",
        className: "d-inline-block w-50 text-center"
      }, "Regex"), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Text",
        className: "d-inline-block w-50 text-center"
      }, "Required message")), this.renderValidations(), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-primary",
        onClick: this.addNewValidationData
      }, "Add New")))), (formContent.type === _WorkflowEditor.componentType.RADIO || formContent.type === _WorkflowEditor.componentType.CHECK_BOX || formContent.type === _WorkflowEditor.componentType.SELECTBOX) && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block mt-3 mb-2 sub-title"
      }, "Form entry"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block w-100"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Value",
        className: "d-inline-block w-25 text-center"
      }, "Value"), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Text",
        className: "d-inline-block w-25 text-center"
      }, "Text"), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "Text",
        className: "d-inline-block w-25 text-center"
      }, "isSelect")), this.renderOptions(), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-primary",
        onClick: this.addNewOption
      }, "Add New")))));
    }
  }]);
  return HTMLProperties;
}(_react.Component);