"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentType = exports.WorkflowEditor = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./css/workflow.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("font-awesome/css/font-awesome.min.css");
var _components = require("./components");
var _reactWizardViewer = require("react-wizard-viewer");
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
var componentType = exports.componentType = {
  TEXT: "text",
  RADIO: "radio",
  CHECK_BOX: "checkbox",
  TEXT_AREA: "textarea",
  SELECTBOX: "select",
  FILE: "file",
  DATE: "date",
  LABEL: "label"
};
var WorkflowEditor = exports.WorkflowEditor = /*#__PURE__*/function (_Component) {
  _inherits(WorkflowEditor, _Component);
  function WorkflowEditor(props) {
    var _this;
    _classCallCheck(this, WorkflowEditor);
    _this = _callSuper(this, WorkflowEditor, [props]);
    _defineProperty(_assertThisInitialized(_this), "displaySideBar", function () {
      var sidebarData = _this.state.sidebarData;
      var sidebarReturnData = [];
      var _loop = function _loop() {
        var row = sidebarData[i];
        sidebarReturnData.push( /*#__PURE__*/_react["default"].createElement("li", {
          key: "options-".concat(i),
          onClick: function onClick(e) {
            return _this.displayFormContent(row);
          }
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: row["class"]
        }), " ", row.title, " "));
      };
      for (var i = 0; i < sidebarData.length; i++) {
        _loop();
      }
      return sidebarReturnData;
    });
    _defineProperty(_assertThisInitialized(_this), "setProperty", function (data, location) {
      var activeLocation = _this.state.activeLocation;
      var refArr = _this.formContentRefs[activeLocation.tab];
      if (refArr && refArr.length > 0) {
        var ref = refArr[activeLocation.index];
        ref && ref.current.setIsActive(false);
      }
      _this.setState({
        showRightPart: true,
        activeLocation: location
      });
      _this.propertiesRef.current.setProperties(data);
    });
    _defineProperty(_assertThisInitialized(_this), "onChangeProperties", function (formContent) {
      var activeLocation = _this.state.activeLocation;
      var tab = _this.formContentRefs[activeLocation.tab];
      if (tab) {
        var ref = tab[activeLocation.index];
        if (ref) {
          ref.current.changeProperties(formContent);
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "displayFormContent", function (fieldData) {
      var _this$state = _this.state,
        formDataContent = _this$state.formDataContent,
        activeTab = _this$state.activeTab,
        activeLocation = _this$state.activeLocation,
        radiocount = _this$state.radiocount;
      var type = fieldData.type,
        value = fieldData.value;
      var tabContent = formDataContent[activeTab] || [];
      var tabContentRef = _this.formContentRefs[activeTab] || [];
      var ref = /*#__PURE__*/_react["default"].createRef();
      var index = tabContent.length;
      var location = {
        tab: activeTab,
        index: tabContentRef.length
      };
      if (type === componentType.TEXT) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.Textbox, {
          type: type,
          ref: ref,
          location: location,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
      } else if (type === componentType.CHECK_BOX) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.Checkbox, {
          type: type,
          location: location,
          ref: ref,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
      } else if (type === componentType.RADIO) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.RadioGroup, {
          type: type,
          name: radiocount,
          location: location,
          ref: ref,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
        _this.setState({
          radiocount: radiocount + 1
        });
      } else if (type === componentType.TEXT_AREA) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.TextArea, {
          type: type,
          location: location,
          ref: ref,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
      } else if (type === componentType.SELECTBOX) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.SelectOption, {
          type: type,
          location: location,
          ref: ref,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
      } else if (type === componentType.FILE) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.File, {
          type: type,
          ref: ref,
          location: location,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
      } else if (type === componentType.DATE) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.Date, {
          type: type,
          ref: ref,
          location: location,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
      } else if (type === componentType.LABEL) {
        tabContent.push( /*#__PURE__*/_react["default"].createElement(_components.Label, {
          type: type,
          ref: ref,
          location: location,
          setPropertiesData: _this.setProperty,
          key: "comp-".concat(activeTab, "-").concat(index),
          onClickDelete: _this.onClickDelete,
          activeLocation: activeLocation
        }));
      }
      tabContentRef.push(ref);
      formDataContent[activeTab] = tabContent;
      _this.setState({
        formDataContent: formDataContent
      });
      _this.formContentRefs[activeTab] = tabContentRef;
    });
    _defineProperty(_assertThisInitialized(_this), "onClickDelete", function (location) {
      var formDataContent = _this.state.formDataContent;
      if (location) {
        var tab = location.tab,
          index = location.index;
        var refs = _this.formContentRefs[tab];
        var number = -1;
        for (var i = 0; i < refs.length; i++) {
          if (refs[i] && refs[i].current && refs[i].current.props.location.index === index) {
            number = i;
            break;
          }
        }
        if (number !== -1) {
          formDataContent[tab].splice(number, 1);
          _this.formContentRefs[tab].splice(number, 1);
          _this.setState({
            formDataContent: formDataContent,
            activeLocation: {},
            showRightPart: false
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "showHideSidebar", function () {
      var showSidebar = _this.state.showSidebar;
      var showmenu = !showSidebar;
      _this.setState({
        showSidebar: showmenu
      });
    });
    _defineProperty(_assertThisInitialized(_this), "showRightbar", function () {
      var showRightPart = _this.state.showRightPart;
      var showright = !showRightPart;
      _this.setState({
        showRightPart: showright
      });
    });
    _defineProperty(_assertThisInitialized(_this), "clearServeyForm", function () {
      _this.setState({
        formDataContent: {},
        activeTab: 0,
        tabs: [{
          label: "Tab 1"
        }],
        activeLocation: {},
        showRightPart: false
      });
      _this.formContentRefs = {};
    });
    _defineProperty(_assertThisInitialized(_this), "addTab", function () {
      var _this$state2 = _this.state,
        tabs = _this$state2.tabs,
        formDataContent = _this$state2.formDataContent,
        tabMetaData = _this$state2.tabMetaData;
      var length = tabs.length;
      tabs.push({
        label: "Tab " + (length + 1),
        editTitle: false
      });
      formDataContent[length] = [];
      tabMetaData.push({
        title: "",
        subHeading: "",
        apiEndPoint: "",
        tabTitle: "Tab " + (length + 1)
      });
      _this.setState({
        tabs: tabs,
        activeTab: length,
        formDataContent: formDataContent
      });
      _this.formContentRefs[length] = [];
    });
    _defineProperty(_assertThisInitialized(_this), "displayTabs", function () {
      var _this$state3 = _this.state,
        tabs = _this$state3.tabs,
        activeTab = _this$state3.activeTab;
      var retData = [];
      var _loop2 = function _loop2(i) {
        var tab = tabs[i];
        retData.push( /*#__PURE__*/_react["default"].createElement("li", {
          key: "tab-".concat(i),
          className: "nav-item "
        }, /*#__PURE__*/_react["default"].createElement("a", {
          className: i === activeTab ? "nav-link active" : "nav-link",
          onClick: function onClick(e) {
            return _this.navigateTab(i);
          },
          href: void 0
        }, !tab.editTitle && tab.label, "\xA0", tab.editTitle && /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control tab-edit",
          value: tab.label,
          name: "title",
          onChange: function onChange(e) {
            return _this.handleStateChange(e, i);
          },
          onBlur: function onBlur() {
            return _this.onFocusOutTitle(i);
          }
        }), /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-edit edit",
          onClick: function onClick(e) {
            return _this.editTab(i);
          }
        }), /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-trash",
          onClick: function onClick(e) {
            return _this.deleteTab(i);
          }
        }))));
      };
      for (var i = 0; i < tabs.length; i++) {
        _loop2(i);
      }
      return retData;
    });
    _defineProperty(_assertThisInitialized(_this), "handleStateChange", function (e, index) {
      var tabs = _this.state.tabs;
      var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
      for (var i = 0; i < tabs.length; i++) {
        if (i === index) {
          tabs[i].label = value;
        }
      }
      _this.setState({
        tabs: tabs
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onFocusOutTitle", function (index) {
      var tabs = _this.state.tabs;
      for (var i = 0; i < tabs.length; i++) {
        if (i === index) {
          tabs[i].editTitle = false;
        }
      }
      _this.setState({
        tabs: tabs
      });
    });
    _defineProperty(_assertThisInitialized(_this), "editTab", function (index) {
      var tabs = _this.state.tabs;
      for (var i = 0; i < tabs.length; i++) {
        if (i === index) {
          tabs[i].editTitle = true;
        }
      }
      _this.setState({
        tabs: tabs
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleTabMetaDataChange", function (i, e) {
      var tabMetaData = _this.state.tabMetaData;
      if (tabMetaData[i]) {
        var _e$target2 = e.target,
          name = _e$target2.name,
          value = _e$target2.value;
        tabMetaData[i][name] = value;
        _this.setState({
          tabMetaData: tabMetaData
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "displayTabsContent", function () {
      var _this$state4 = _this.state,
        tabs = _this$state4.tabs,
        formDataContent = _this$state4.formDataContent,
        activeTab = _this$state4.activeTab,
        tabMetaData = _this$state4.tabMetaData;
      var retData = [];
      var _loop3 = function _loop3(i) {
        retData.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: "tab-content-".concat(i),
          className: "tab-pane p-3 ".concat(i === activeTab ? "active" : "")
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/_react["default"].createElement("label", null, "Title"), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          value: tabMetaData[i]["title"],
          onChange: function onChange(e) {
            return _this.handleTabMetaDataChange(i, e);
          },
          name: "title"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/_react["default"].createElement("label", null, "Sub Heading"), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          value: tabMetaData[i]["subHeading"],
          onChange: function onChange(e) {
            return _this.handleTabMetaDataChange(i, e);
          },
          name: "subHeading"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "form-group"
        }, /*#__PURE__*/_react["default"].createElement("label", null, "ApiEndPoint"), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          className: "form-control",
          value: tabMetaData[i]["apiEndPoint"],
          onChange: function onChange(e) {
            return _this.handleTabMetaDataChange(i, e);
          },
          name: "apiEndPoint"
        })), formDataContent[i] && formDataContent[i].map(function (value) {
          return value;
        })));
      };
      for (var i = 0; i < tabs.length; i++) {
        _loop3(i);
      }
      return retData;
    });
    _defineProperty(_assertThisInitialized(_this), "setJSONProperties", function () {
      var _this$state5 = _this.state,
        tabs = _this$state5.tabs,
        tabMetaData = _this$state5.tabMetaData,
        activeTab = _this$state5.activeTab;
      var properties = [];
      for (var i = 0; i < tabs.length; i++) {
        if (i == activeTab) {
          tabMetaData[i].tabTitle = tabs[i].label;
        }
        var compRefs = _this.formContentRefs[i];
        var content = [];
        for (var j = 0; j < (compRefs === null || compRefs === void 0 ? void 0 : compRefs.length); j++) {
          if (compRefs[j]) {
            content.push(compRefs[j].current.getContent());
          }
        }
        var tabProperty = _objectSpread(_objectSpread({}, tabMetaData[i]), {}, {
          content: content
        });
        properties.push(tabProperty);
      }
      _this.setState({
        properties: JSON.stringify(properties)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "showCreateWorkflow", function () {
      var showEditorPage = _this.state.showEditorPage;
      _this.setJSONProperties();
      _this.setState({
        showEditorPage: !showEditorPage,
        showWorkflowPage: false,
        showSidebar: false,
        showRightPart: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "showMainPage", function () {
      _this.setState({
        showWorkflowPage: false,
        showEditorPage: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "showWorkflow", function () {
      _this.setJSONProperties();
      _this.setState({
        showWorkflowPage: true,
        showEditorPage: false,
        showSidebar: false,
        showRightPart: false
      });
    });
    _this.state = {
      tabs: [{
        label: "Tab 1",
        editTitle: false
      }],
      activeTab: 0,
      showSidebar: true,
      showRightPart: false,
      sidebarData: [{
        title: "Single Input",
        type: componentType.TEXT,
        value: "singleInput",
        "class": "fa fa-text-width"
      }, {
        title: "Textarea",
        type: componentType.TEXT_AREA,
        value: "textDescription",
        "class": "fa fa-text-width"
      }, {
        title: "Drop Down",
        type: componentType.SELECTBOX,
        value: "questions",
        "class": "fa fa-caret-down"
      }, {
        title: "Checkbox",
        type: componentType.CHECK_BOX,
        value: "optionalQuestions",
        "class": "fa fa-check-square"
      }, {
        title: "Radio Group",
        type: componentType.RADIO,
        value: "questionChoice",
        "class": "fa fa-list-ul"
      }, {
        title: "Upload File",
        type: componentType.FILE,
        value: "file",
        "class": "fa fa-file"
      }, {
        title: "Type Date",
        type: componentType.DATE,
        value: "date",
        "class": "fa fa-clock-o"
      }, {
        title: "Label",
        type: componentType.LABEL,
        "class": "fa fa-text-width"
      }],
      formDataContent: {},
      workflowEditor: [],
      showEditorPage: false,
      showWorkflowPage: false,
      radiocount: 0,
      tabMetaData: [{
        title: "",
        subHeading: "",
        apiEndPoint: "",
        tabTitle: "Tab 1"
      }],
      activeLocation: {}
    };
    _this.formContentRefs = {};
    _this.propertiesRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _createClass(WorkflowEditor, [{
    key: "deleteTab",
    value: function deleteTab(index) {
      var _this$state6 = this.state,
        tabs = _this$state6.tabs,
        formDataContent = _this$state6.formDataContent,
        tabMetaData = _this$state6.tabMetaData;
      delete formDataContent[index];
      tabs.splice(index, 1);
      tabMetaData.splice(index, 1);
      this.setState({
        tabs: tabs,
        activeTab: index - 1,
        formDataContent: formDataContent,
        tabMetaData: tabMetaData
      });
      delete this.formContentRefs[index];
    }
  }, {
    key: "navigateTab",
    value: function navigateTab(index) {
      this.setState({
        activeTab: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state7 = this.state,
        showSidebar = _this$state7.showSidebar,
        showRightPart = _this$state7.showRightPart,
        properties = _this$state7.properties,
        showEditorPage = _this$state7.showEditorPage,
        showWorkflowPage = _this$state7.showWorkflowPage;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "editor-container"
      }, showEditorPage === false && showWorkflowPage === false && /*#__PURE__*/_react["default"].createElement("div", {
        className: showSidebar === true ? "left-side" : ""
      }, showSidebar === true && /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block mb-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block pb-2 heading"
      }, "Toolbox"), /*#__PURE__*/_react["default"].createElement("ul", null, this.displaySideBar()))), /*#__PURE__*/_react["default"].createElement("div", {
        className: showSidebar === true && showRightPart === false ? "center-container left-show" : showSidebar === true && showRightPart === true ? "center-container right-show" : showSidebar === false && showRightPart === true ? "center-container right-show full" : "center-container full"
      }, showEditorPage === false && showWorkflowPage === false ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "left-slider"
      }, showSidebar === true && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-angle-left",
        onClick: this.showHideSidebar
      }), showSidebar === false && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-angle-right",
        onClick: this.showHideSidebar
      })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block px-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block pb-4"
      }, this.state.showEditorPage || this.state.showWorkflowPage ? /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-primary mr-2",
        onClick: this.showMainPage
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-arrow-left"
      }), " Back") : /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-primary mr-2",
        onClick: this.clearServeyForm
      }, "Clear"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-primary mr-2",
        onClick: this.showCreateWorkflow
      }, "Get JSON"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-primary mr-2",
        onClick: this.showWorkflow
      }, "View Workflow")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(this.state.showEditorPage === false && this.state.showWorkflowPage === false ? "d-block" : "d-none")
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "nav nav-tabs"
      }, this.displayTabs(), /*#__PURE__*/_react["default"].createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "nav-link",
        onClick: this.addTab,
        href: void 0
      }, "Add New Tab\xA0", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-plus"
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "tab-content clearfix position-relative bg-white border border-top-0"
      }, this.displayTabsContent())), this.state.showEditorPage ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "tab-content clearfix position-relative bg-white border border-top-0 p-3"
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        className: "form-control",
        rows: 5,
        value: properties
      })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), this.state.showWorkflowPage ? /*#__PURE__*/_react["default"].createElement(_reactWizardViewer.Workflow, {
        formData: JSON.parse(properties)
        // onFormSubmitted={this.onFormSubmitted}
        ,
        ref: this.workflowRef,
        onChangeComponent: this.onChangeComponent,
        onChangeTab: this.onChangeTab
      }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)), showEditorPage === false && showWorkflowPage === false ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "right-slider"
      }, showRightPart === false && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-angle-left",
        onClick: this.showRightbar
      }), showRightPart === true && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-angle-right",
        onClick: this.showRightbar
      })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "right-side ".concat(showRightPart ? "" : "d-none")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-block"
      }, /*#__PURE__*/_react["default"].createElement(_components.HTMLProperties, {
        ref: this.propertiesRef,
        onChangeContent: this.onChangeProperties
      }))));
    }
  }]);
  return WorkflowEditor;
}(_react.Component);