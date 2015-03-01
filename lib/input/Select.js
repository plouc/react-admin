"use strict";

var React = require("react");
var Input = require("./Input");
var B = require("react-bootstrap");

var BaseSelect = {
  type: "select",
  render: function () {
    return React.createElement(
      B.Input,
      {
        value: this.getValue(),
        "default": "Default value ...",
        type: this.type,
        label: this.props.label,
        help: this.getHelp(),
        onChange: this.updateValue,
        bsStyle: this.getStyle()
      },
      this.props.children
    );
  }
};

var SelectInput = Input.create(BaseSelect);

var NumberSelectInput = Input.create(BaseSelect, {
  updateValue: function (event) {
    this.setValue(this.parseInt(event.target.value));
  }
});

var BooleanSelectInput = Input.create(BaseSelect, {
  updateValue: function (event) {
    this.setValue(this.isTrue(event.target.value));
  },
  render: function () {
    return React.createElement(
      B.Input,
      {
        value: this.getValue() ? "1" : "0",
        type: this.type,
        label: this.props.label,
        help: this.getHelp(),
        onChange: this.updateValue,
        bsStyle: this.getStyle()
      },
      this.props.children
    );
  }
});

module.exports = {
  Select: SelectInput,
  NumberSelect: NumberSelectInput,
  BooleanSelect: BooleanSelectInput
};