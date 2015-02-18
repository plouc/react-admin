"use strict";

var React = require("react");
var B = require("react-bootstrap");

var Input = require("./Input");
var ReactBootstrapMixin = require("./Bootstrap");


var Text = Input.create({
  type: "text"
});

var Password = Input.create({
  type: "password"
});

var TextArea = Input.create({
  type: "textarea"
});

var DoublePassword = Input.create({
  mixins: [ReactBootstrapMixin],

  render: function () {
    return this.renderInput(React.createElement(
      "span",
      null,
      React.createElement(B.Input, { type: "text" }),
      React.createElement(B.Input, { type: "text" })
    ));
  }
});

module.exports = {
  Text: Text,
  Password: Password,
  TextArea: TextArea,
  DoublePassword: DoublePassword
};