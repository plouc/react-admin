Container
=========

The container is a singleton module build to store shared services or parameters:

 - A parameter always retrieve as a value copy of the original value to avoid mutable change from the callee.
 - A service is a object with methods
 
 
Usage
-----

** Service **

  ```js
  // set service
  var endpoint = ReactAdmin.EndPoint('http://192.168.30.20:8000/nodes', {'Accept':'application/json'});
  ReactAdmin.Container("enpoint", endpoint);

  // get service
  var enpoint = ReactAdmin.Container("enpoint");
  ```

** Parameter **

  ```js
  // set parameter
  ReactAdmin.Container().setParameter('password', 'azerty');

  // get parameter
  var password = ReactAdmin.Container().getParameter('password');
  
  ```
