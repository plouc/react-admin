"use strict";

var SelectInput = require("./input/Select.jsx");
var RadioInput = require("./input/Radio.jsx");
var TextInput = require("./input/Text.jsx");

module.exports = {
  // card used in list
  IconCard: require("./card/Icon.jsx"),
  InformationCard: require("./card/Information.jsx"),
  NotificationCard: require("./card/Notification.jsx"),

  // input used in form
  createInput: require("./input/Input.jsx").create,
  BootstrapInput: require("./input/Bootstrap.jsx"),

  NumberInput: require("./input/Number.jsx"),
  BooleanInput: require("./input/Boolean.jsx"),

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
  createTable: require("./pager/Table.jsx").create,

  // Helpers
  stubRouterContext: require("./utils/stubRouterContext"),

  Container: require("./utils/Container"),
  ReadValue: require("./utils/Property").ReadValue,
  WriteValue: require("./utils/Property").WriteValue,

  EndPoint: require("./rest/EndPoint"),

  // Status
  Status: {
      Action: require("./store/Status.jsx").Action,
      Component: require("./store/Status.jsx").Component,
      Store: require("./store/Status.jsx").Store
  },

  // Notification
  Notification: {
      Action: require("./store/Notification.jsx").Action,
      Component: require("./store/Notification.jsx").Component,
      Store: require("./store/Notification.jsx").Store
  }
};
