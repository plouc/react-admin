'use strict';

var React = require('react/addons');
var Router = require('react-router');
var B = require('react-bootstrap');
var RB = require('react-router-bootstrap');
var ReactAdmin = require('react-admin');
var Reflux = require('reflux');
var _ = require('lodash');

var Dashboard = require('layouts/Dashboard.jsx');

var App1 = require('applications/app1');

/**
 *  Define the global layout of your application
 *  The Router.RouteHandler call is required to render sub view defined
 *  on each defined applications.
 */
var App = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {
       showNotification: false,
       countNotification: 0,
       apps: []
    };
  },
  componentDidMount: function () {
      this.listenTo(ReactAdmin.Notification.Store, this.onNotification);
  },
  onNotification: function(notification) {
      this.setState({
        countNotification: this.state.countNotification + 1
      });
  },
  toggleNotification: function(event) {
      this.setState({
        showNotification: !this.state.showNotification,
        countNotification: !this.state.showNotification ? 0 : this.state.countNotification
      });

      event.stopPropagation();
      event.preventDefault();
  },
  render: function () {
    var leftColumn = this.state.showNotification ? "col-md-9" : "col-md-12";
    var rightColumn = this.state.showNotification ? "col-md-3" : "hide";

    var classes = React.addons.classSet({
      'label label-danger': true,
      'hide': this.state.countNotification == 0
    });

    return (
      <div>
        <B.Navbar inverse={true} fixedTop={true} fluid={true} brand="React Admin">
            <B.Nav activeKey={1} right={true} navbar={true}>
              <RB.NavItemLink to="homepage">Dashboard</RB.NavItemLink>
              <RB.NavItemLink to="app1">Demo</RB.NavItemLink>
              <B.NavItem onClick={this.toggleNotification}>
                <i className="fa fa-bell-o"></i>
                <span className={classes}>{this.state.countNotification}</span>
              </B.NavItem>
            </B.Nav>
        </B.Navbar>

        <div className="container-fluid">
          <ReactAdmin.Status.Component />
          <div className="row">
            <div className={leftColumn}>
              <div className="row">
                <Router.RouteHandler />
              </div>
            </div>

            <div className={rightColumn}>
              <div className="row">
                <ReactAdmin.Notification.Component />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

/**
 * This is the default 404 page when a page does not exist
 * Feel free to build your own ...
 */
var DebugRouter = React.createClass({
  mixins: [Router.State],
  render: function() {
    var message = this.getPathname();

    return <div className="col-sm-12 col-md-12 main">
      <h2>Oh Oh ... Page does not exist </h2>
      <h3>underwood error code is 404</h3>
      <p>
        {message}
      </p>

    </div>
  }
});

/**
 * Register the different view or applications to the router
 * You can append any routes you want
 */
var routes = (
  <Router.Route name="homepage" path="/" handler={App}>
    <Router.DefaultRoute handler={Dashboard}/>
    <Router.NotFoundRoute handler={DebugRouter}/>

    {App1.getRoutes()}

  </Router.Route>
);

/**
 * Start the application, the app id is set in the index.html page
 */
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
