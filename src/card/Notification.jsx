'use strict';

var React = require('react');
var R = require('react-router');

var Notification = React.createClass({
  render: function() {
    return (
      <div className="card-notification">
        {this.props.children}
      </div>
    )
  }
});

module.exports = Notification;
