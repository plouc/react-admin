'use strict';

var React = require('react');
var R = require('react-router');

var Information = React.createClass({
  render: function() {
    return (
      <div className="card-information">
        {this.props.children}
      </div>
    )
  }
});

module.exports = Information;
