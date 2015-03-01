"use strict";

var SelectInput = require("./lib/input/Select");
var RadioInput = require("./lib/input/Radio");
var TextInput = require("./lib/input/Text");

module.exports = {
  // card used in list
  IconCard: require("./lib/card/Icon"),
  InformationCard: require("./lib/card/Information"),
  NotificationCard: require("./lib/card/Notification"),

  // input used in form
  createInput: require("./lib/input/Input").create,
  BootstrapInput: require("./lib/input/Bootstrap"),

  NumberInput: require("./lib/input/Number"),
  BooleanInput: require("./lib/input/Boolean"),

  TextInput: TextInput.Text,
  TextAreaInput: TextInput.TextArea,
  PasswordInput: TextInput.Password,
  DoublePasswordInput: TextInput.DoublePassword,

  NumberSelect: SelectInput.NumberSelect,
  Select: SelectInput.Select,
  BooleanSelect: SelectInput.BooleanSelect,

  NumberRadio: RadioInput.NumberRadio,
  BooleanRadio: RadioInput.BooleanRadio,
  Radio: RadioInput.Radio,

  // Table
  createTable: require("./lib/pager/Table").create,

  // Helpers
  stubRouterContext: require("./lib/utils/stubRouterContext"),

  Container: require("./lib/utils/Container"),
  ReadValue: require("./lib/utils/Property").ReadValue,
  WriteValue: require("./lib/utils/Property").WriteValue,

  EndPoint: require("./lib/rest/EndPoint")

  // Status
  Status: {
      Action: require("./lib/store/Status").Action,
      Component: require("./lib/store/Status").Component,
      Store: require("./lib/store/Status").Store
  }
};
