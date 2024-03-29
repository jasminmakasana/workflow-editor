import React, { Component } from "react";
import "./css/workflow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import {
  Textbox,
  TextArea,
  Checkbox,
  RadioGroup,
  SelectOption,
  HTMLProperties,
  File,
  Date,
  Label,
} from "./components";
import { Workflow } from "react-wizard-viewer";

export const componentType = {
  TEXT: "text",
  RADIO: "radio",
  CHECK_BOX: "checkbox",
  TEXT_AREA: "textarea",
  SELECTBOX: "select",
  FILE: "file",
  DATE: "date",
  LABEL: "label",
};

export class WorkflowEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          label: "Tab 1",
          editTitle: false,
        },
      ],
      activeTab: 0,
      showSidebar: true,
      showRightPart: false,
      sidebarData: [
        {
          title: "Single Input",
          type: componentType.TEXT,
          value: "singleInput",
          class: "fa fa-text-width",
        },
        {
          title: "Textarea",
          type: componentType.TEXT_AREA,
          value: "textDescription",
          class: "fa fa-text-width",
        },
        {
          title: "Drop Down",
          type: componentType.SELECTBOX,
          value: "questions",
          class: "fa fa-caret-down",
        },
        {
          title: "Checkbox",
          type: componentType.CHECK_BOX,
          value: "optionalQuestions",
          class: "fa fa-check-square",
        },
        {
          title: "Radio Group",
          type: componentType.RADIO,
          value: "questionChoice",
          class: "fa fa-list-ul",
        },
        {
          title: "Upload File",
          type: componentType.FILE,
          value: "file",
          class: "fa fa-file",
        },
        {
          title: "Type Date",
          type: componentType.DATE,
          value: "date",
          class: "fa fa-clock-o",
        },
        {
          title: "Label",
          type: componentType.LABEL,
          class: "fa fa-text-width",
        },
      ],
      formDataContent: {},
      workflowEditor: [],
      showEditorPage: false,
      showWorkflowPage: false,
      radiocount: 0,
      tabMetaData: [
        {
          title: "",
          subHeading: "",
          apiEndPoint: "",
          tabTitle: "Tab 1",
        },
      ],
      activeLocation: {},
    };
    this.formContentRefs = {};
    this.propertiesRef = React.createRef();
  }

  displaySideBar = () => {
    const { sidebarData } = this.state;
    const sidebarReturnData = [];
    for (let i = 0; i < sidebarData.length; i++) {
      let row = sidebarData[i];
      sidebarReturnData.push(
        <li key={`options-${i}`} onClick={(e) => this.displayFormContent(row)}>
          <i className={row.class}></i> {row.title}{" "}
        </li>
      );
    }
    return sidebarReturnData;
  };

  setProperty = (data, location) => {
    const { activeLocation } = this.state;
    let refArr = this.formContentRefs[activeLocation.tab];
    if (refArr && refArr.length > 0) {
      const ref = refArr[activeLocation.index];
      ref && ref.current.setIsActive(false);
    }
    this.setState({
      showRightPart: true,
      activeLocation: location,
    });
    this.propertiesRef.current.setProperties(data);
  };

  onChangeProperties = (formContent) => {
    const { activeLocation } = this.state;
    const tab = this.formContentRefs[activeLocation.tab];
    if (tab) {
      const ref = tab[activeLocation.index];
      if (ref) {
        ref.current.changeProperties(formContent);
      }
    }
  };

  displayFormContent = (fieldData) => {
    const { formDataContent, activeTab, activeLocation, radiocount } =
      this.state;
    const { type, value } = fieldData;
    const tabContent = formDataContent[activeTab] || [];
    const tabContentRef = this.formContentRefs[activeTab] || [];
    const ref = React.createRef();
    const index = tabContent.length;
    const location = {
      tab: activeTab,
      index: tabContentRef.length,
    };
    if (type === componentType.TEXT) {
      tabContent.push(
        <Textbox
          type={type}
          ref={ref}
          location={location}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
    } else if (type === componentType.CHECK_BOX) {
      tabContent.push(
        <Checkbox
          type={type}
          location={location}
          ref={ref}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
    } else if (type === componentType.RADIO) {
      tabContent.push(
        <RadioGroup
          type={type}
          name={radiocount}
          location={location}
          ref={ref}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
      this.setState({
        radiocount: radiocount + 1,
      });
    } else if (type === componentType.TEXT_AREA) {
      tabContent.push(
        <TextArea
          type={type}
          location={location}
          ref={ref}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
    } else if (type === componentType.SELECTBOX) {
      tabContent.push(
        <SelectOption
          type={type}
          location={location}
          ref={ref}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
    } else if (type === componentType.FILE) {
      tabContent.push(
        <File
          type={type}
          ref={ref}
          location={location}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
    } else if (type === componentType.DATE) {
      tabContent.push(
        <Date
          type={type}
          ref={ref}
          location={location}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
    } else if (type === componentType.LABEL) {
      tabContent.push(
        <Label
          type={type}
          ref={ref}
          location={location}
          setPropertiesData={this.setProperty}
          key={`comp-${activeTab}-${index}`}
          onClickDelete={this.onClickDelete}
          activeLocation={activeLocation}
        />
      );
    }
    tabContentRef.push(ref);
    formDataContent[activeTab] = tabContent;
    this.setState({
      formDataContent,
    });
    this.formContentRefs[activeTab] = tabContentRef;
  };

  onClickDelete = (location) => {
    const { formDataContent } = this.state;
    if (location) {
      const { tab, index } = location;
      const refs = this.formContentRefs[tab];
      let number = -1;
      for (let i = 0; i < refs.length; i++) {
        if (
          refs[i] &&
          refs[i].current &&
          refs[i].current.props.location.index === index
        ) {
          number = i;
          break;
        }
      }
      if (number !== -1) {
        formDataContent[tab].splice(number, 1);
        this.formContentRefs[tab].splice(number, 1);
        this.setState({
          formDataContent,
          activeLocation: {},
          showRightPart: false,
        });
      }
    }
  };

  showHideSidebar = () => {
    const { showSidebar } = this.state;
    let showmenu = !showSidebar;
    this.setState({
      showSidebar: showmenu,
    });
  };

  showRightbar = () => {
    const { showRightPart } = this.state;
    let showright = !showRightPart;
    this.setState({
      showRightPart: showright,
    });
  };

  clearServeyForm = () => {
    this.setState({
      formDataContent: {},
      activeTab: 0,
      tabs: [
        {
          label: "Tab 1",
        },
      ],
      activeLocation: {},
      showRightPart: false,
    });
    this.formContentRefs = {};
  };

  addTab = () => {
    const { tabs, formDataContent, tabMetaData } = this.state;
    const length = tabs.length;
    tabs.push({ label: "Tab " + (length + 1), editTitle: false });
    formDataContent[length] = [];
    tabMetaData.push({
      title: "",
      subHeading: "",
      apiEndPoint: "",
      tabTitle: "Tab " + (length + 1),
    });
    this.setState({
      tabs,
      activeTab: length,
      formDataContent,
    });
    this.formContentRefs[length] = [];
  };

  deleteTab(index) {
    const { tabs, formDataContent, tabMetaData } = this.state;
    delete formDataContent[index];
    tabs.splice(index, 1);
    tabMetaData.splice(index, 1);
    this.setState({
      tabs: tabs,
      activeTab: index - 1,
      formDataContent,
      tabMetaData,
    });
    delete this.formContentRefs[index];
  }

  displayTabs = () => {
    const { tabs, activeTab } = this.state;
    const retData = [];
    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      retData.push(
        <li key={`tab-${i}`} className={`nav-item `}>
          <a
            className={i === activeTab ? "nav-link active" : "nav-link"}
            onClick={(e) => this.navigateTab(i)}
            href={void 0}
          >
            {!tab.editTitle && tab.label}&nbsp;
            {tab.editTitle && (
              <input
                type="text"
                className="form-control tab-edit"
                value={tab.label}
                name="title"
                onChange={(e) => this.handleStateChange(e, i)}
                onBlur={() => this.onFocusOutTitle(i)}
              />
            )}
            <i className="fa fa-edit edit" onClick={(e) => this.editTab(i)}></i>
            <i className="fa fa-trash" onClick={(e) => this.deleteTab(i)}></i>
          </a>
        </li>
      );
    }
    return retData;
  };

  handleStateChange = (e, index) => {
    const { tabs } = this.state;
    const { name, value } = e.target;
    for (let i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].label = value;
      }
    }
    this.setState({
      tabs,
    });
  };

  onFocusOutTitle = (index) => {
    const { tabs } = this.state;
    for (let i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].editTitle = false;
      }
    }
    this.setState({
      tabs,
    });
  };

  editTab = (index) => {
    const { tabs } = this.state;
    for (let i = 0; i < tabs.length; i++) {
      if (i === index) {
        tabs[i].editTitle = true;
      }
    }
    this.setState({
      tabs,
    });
  };

  navigateTab(index) {
    this.setState({
      activeTab: index,
    });
  }

  handleTabMetaDataChange = (i, e) => {
    const { tabMetaData } = this.state;
    if (tabMetaData[i]) {
      const { name, value } = e.target;
      tabMetaData[i][name] = value;
      this.setState({
        tabMetaData,
      });
    }
  };

  displayTabsContent = () => {
    const { tabs, formDataContent, activeTab, tabMetaData } = this.state;
    const retData = [];
    for (let i = 0; i < tabs.length; i++) {
      retData.push(
        <div
          key={`tab-content-${i}`}
          className={`tab-pane p-3 ${i === activeTab ? "active" : ""}`}
        >
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={tabMetaData[i]["title"]}
              onChange={(e) => this.handleTabMetaDataChange(i, e)}
              name="title"
            />
          </div>
          {/* <div className="form-group">
                        <label>Tab Title</label>
                        <input type="text" className="form-control" value={tabMetaData[i]["tabTitle"]} onChange={e => this.handleTabMetaDataChange(i, e)} name="tabTitle" />
                    </div> */}
          <div className="form-group">
            <label>Sub Heading</label>
            <input
              type="text"
              className="form-control"
              value={tabMetaData[i]["subHeading"]}
              onChange={(e) => this.handleTabMetaDataChange(i, e)}
              name="subHeading"
            />
          </div>
          <div className="form-group">
            <label>ApiEndPoint</label>
            <input
              type="text"
              className="form-control"
              value={tabMetaData[i]["apiEndPoint"]}
              onChange={(e) => this.handleTabMetaDataChange(i, e)}
              name="apiEndPoint"
            />
          </div>
          {formDataContent[i] && formDataContent[i].map((value) => value)}
        </div>
      );
    }
    return retData;
  };

  setJSONProperties = () => {
    const { tabs, tabMetaData, activeTab } = this.state;
    const properties = [];
    for (let i = 0; i < tabs.length; i++) {
      if (i == activeTab) {
        tabMetaData[i].tabTitle = tabs[i].label;
      }
      const compRefs = this.formContentRefs[i];
      let content = [];
      for (let j = 0; j < compRefs?.length; j++) {
        if (compRefs[j]) {
          content.push(compRefs[j].current.getContent());
        }
      }
      let tabProperty = {
        ...tabMetaData[i],
        content,
      };
      properties.push(tabProperty);
    }
    this.setState({
      properties: JSON.stringify(properties),
    });
  };

  showCreateWorkflow = () => {
    const { showEditorPage } = this.state;
    this.setJSONProperties();
    this.setState({
      showEditorPage: !showEditorPage,
      showWorkflowPage: false,
      showSidebar: false,
      showRightPart: false,
    });
  };

  showMainPage = () => {
    this.setState({
      showWorkflowPage: false,
      showEditorPage: false,
    });
  };

  showWorkflow = () => {
    this.setJSONProperties();
    this.setState({
      showWorkflowPage: true,
      showEditorPage: false,
      showSidebar: false,
      showRightPart: false,
    });
  };

  render() {
    const {
      showSidebar,
      showRightPart,
      properties,
      showEditorPage,
      showWorkflowPage,
    } = this.state;
    return (
      <div className="editor-container">
        {showEditorPage === false && showWorkflowPage === false && (
          <div className={showSidebar === true ? "left-side" : ""}>
            {showSidebar === true && (
              <div className="d-block mb-4">
                <div className="d-block pb-2 heading">Toolbox</div>
                <ul>{this.displaySideBar()}</ul>
              </div>
            )}
          </div>
        )}
        <div
          className={
            showSidebar === true && showRightPart === false
              ? "center-container left-show"
              : showSidebar === true && showRightPart === true
                ? "center-container right-show"
                : showSidebar === false && showRightPart === true
                  ? "center-container right-show full"
                  : "center-container full"
          }
        >
          {showEditorPage === false && showWorkflowPage === false ? (
            <div className="left-slider">
              {showSidebar === true && (
                <i
                  className="fa fa-angle-left"
                  onClick={this.showHideSidebar}
                ></i>
              )}
              {showSidebar === false && (
                <i
                  className="fa fa-angle-right"
                  onClick={this.showHideSidebar}
                ></i>
              )}
            </div>
          ) : (
            <></>
          )}
          <div className="d-block px-4">
            <div className="d-block pb-4">
              {this.state.showEditorPage || this.state.showWorkflowPage ? (
                <button
                  className="btn btn-primary mr-2"
                  onClick={this.showMainPage}
                >
                  <i className="fa fa-arrow-left"></i> Back
                </button>
              ) : (
                <button
                  className="btn btn-primary mr-2"
                  onClick={this.clearServeyForm}
                >
                  Clear
                </button>
              )}
              <button
                className="btn btn-primary mr-2"
                onClick={this.showCreateWorkflow}
              >
                Get JSON
              </button>
              <button
                className="btn btn-primary mr-2"
                onClick={this.showWorkflow}
              >
                View Workflow
              </button>
            </div>
            <div
              className={`${
                this.state.showEditorPage === false &&
                this.state.showWorkflowPage === false
                  ? "d-block"
                  : "d-none"
              }`}
            >
              <ul className="nav nav-tabs">
                {this.displayTabs()}
                <li className="nav-item">
                  <a className="nav-link" onClick={this.addTab} href={void 0}>
                    Add New Tab&nbsp;
                    <i className="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
              <div className="tab-content clearfix position-relative bg-white border border-top-0">
                {this.displayTabsContent()}
              </div>
            </div>

            {this.state.showEditorPage ? (
              <div className="tab-content clearfix position-relative bg-white border border-top-0 p-3">
                <textarea
                  className="form-control"
                  rows={5}
                  value={properties}
                ></textarea>
              </div>
            ) : (
              <></>
            )}
            {this.state.showWorkflowPage ? (
              <Workflow
                formData={JSON.parse(properties)}
                // onFormSubmitted={this.onFormSubmitted}
                ref={this.workflowRef}
                onChangeComponent={this.onChangeComponent}
                onChangeTab={this.onChangeTab}
              />
            ) : (
              <></>
            )}
          </div>
          {showEditorPage === false && showWorkflowPage === false ? (
            <div className="right-slider">
              {showRightPart === false && (
                <i className="fa fa-angle-left" onClick={this.showRightbar}></i>
              )}
              {showRightPart === true && (
                <i
                  className="fa fa-angle-right"
                  onClick={this.showRightbar}
                ></i>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={`right-side ${showRightPart ? "" : "d-none"}`}>
          <div className="d-block">
            <HTMLProperties
              ref={this.propertiesRef}
              onChangeContent={this.onChangeProperties}
            />
          </div>
        </div>
      </div>
    );
  }
}
