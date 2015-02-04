"use strict";

var React = require("react");
var R = require("react-router");

var Icon = React.createClass({
  displayName: "Icon",
  getDefaultProps: function () {
    return {
      type: "circle"
    };
  },

  getInitialState: function () {
    return {
      type: "circle"
    };
  },

  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render: function () {
    var className = "fa fa-" + this.props.type + " fa-5x";

    return React.createElement(
      "div",
      { className: "card-icon" },
      React.createElement("i", { className: className })
    );
  }
});

module.exports = Icon;