"use strict";

var React = require("react");

var Notification = React.createClass({
  displayName: "Notification",
  render: function () {
    return React.createElement(
      "div",
      { className: "card-notification" },
      this.props.children
    );
  }
});

module.exports = Notification;