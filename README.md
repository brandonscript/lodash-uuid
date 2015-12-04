# lodash-uuid

A simple [lodash mixin](http://lodash.com/docs#mixin) that supports validation and generation of uuids.

     npm install lodash-uuid

This is a slimmed down copy of [lodash-mix](https://github.com/r3mus/lodash-mix) that only supports functions specific to uuids.

# usage

### _.uuid

```javascript
_.uuid()
// generates an RFC 4122 compliant version 4 uuid.
```

### _.isUuid

```javascript
_.isUuid('262182b1-f92c-42bd-ab39-8faedb47b4dc')
// produces true|false. Validates any version of uuid.
```

### _.isUuid4

```javascript
_.isUuid('262182b1-f92c-42bd-ab39-8faedb47b4dc')
// produces true|false. Validates an RFC 4122 compliant version 4 uuid.
```

# tests

Tests run in node and the browser. Browserify and tape must be installed globally.

Execute from the command line

```bash
npm install -g tape
tape test/**/*.js
```
