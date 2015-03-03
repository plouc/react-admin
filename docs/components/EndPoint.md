EndPoint
========

The class can be used to consume RESTFul resources:

```js

  var endpoint = ReactAdmin.EndPoint('http://192.168.30.20:8000/nodes', {'Accept':'application/json'});
  
  endpoint.get(function(res) {
    if (res.ok) {
      ///
    };
  });
  
```

The library use superagent behind the scene to make ajax request. You can see the related documentation
to get response options: [http://visionmedia.github.io/superagent/](http://visionmedia.github.io/superagent/).


GET/DELETE Query
----------------

All arguments:

```js
  endpoint.get("search", {'q': 'hello'}, function(res) {});
```

Will generate this query

```
  GET /nodes/search?q=hello
```

2 Arguments:

```js
  endpoint.get({'q': 'hello'}, function(res) {});
  endpoint.get('search', function(res) {});
```

Will generate those queries

```
  GET /nodes?q=hello
  GET /nodes/search 
```

POST/PUT Query
--------------

All arguments:

```js
  endpoint.post("search", {'q': 'hello'}, {'id': 12, 'name': 'Thomas'}, function(res) {});
```

Will generate this query

```
  POST /nodes/search?q=hello
  
  id=12&name=Thomas
```

2 Arguments:

```js
  endpoint.post({'q': 'hello'}, function(res) {});
  endpoint.post("search", function(res) {});
  
```

Will generate those queries

```
  POST /nodes
  
  q=hello
  
  POST /nodes
  
  [empty body]
```

3 arguments:

```js
  endpoint.post("search", {'q': 'hello'}, function(res) {});
  endpoint.post({'q': 'hello'}, {'id': 12, 'name': 'Thomas'}, , function(res) {});
  
```

Will generate those queries

```
  POST /nodes/search
  
  q=hello
  
  
  POST /nodes?q=hello
  
  id=12&name=Thomas
```
