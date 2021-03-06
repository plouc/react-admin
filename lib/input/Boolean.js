"use strict";

var Input = require("./Input");
var React = require("react");
var B = require("react-bootstrap");

var Boolean = Input.create({
  type: "checkbox",

  updateValue: function (event) {
    this.setValue(event.target.checked);
  },

  render: function () {
    return React.createElement(B.Input, {
      checked: this.getValue(),
      "default": "Default value ...",
      type: this.type,
      label: this.props.label,
      help: this.getHelp(),
      onChange: this.updateValue,
      bsStyle: this.getErrors().length > 0 ? "error" : null
    });
  }
});

module.exports = Boolean;