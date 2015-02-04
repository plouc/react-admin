'use strict';

var React = require('react');
var Input = require('./Input.jsx');
var ReactBootstrapMixin = require('./Bootstrap.jsx');
var B = require('react-bootstrap');

var Text = Input.create({
  type: 'text'
});

var Password = Input.create({
  type: 'password'
});

var TextArea = Input.create({
  type: 'textarea'
});

var DoublePassword = Input.create({
  mixins: [ReactBootstrapMixin],

  render: function() {
    return this.renderInput(
      <span>
        <B.Input type="text" />
        <B.Input type="text" />
      </span>
    );
  }
})

module.exports = {
  Text: Text,
  Password: Password,
  TextArea: TextArea,
  DoublePassword: DoublePassword
}
