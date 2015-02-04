"use strict";

var React = require("react");
var R = require("react-router");

var Information = React.createClass({
  displayName: "Information",
  render: function () {
    return React.createElement(
      "div",
      { className: "card-information" },
      this.props.children
    );
  }
});

module.exports = Information;