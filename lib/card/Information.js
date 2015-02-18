"use strict";

var React = require("react");

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