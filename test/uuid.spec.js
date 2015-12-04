var _ = require('../index.js'),
    test = require('tape');

test('uuid: should generate a string of 36 chars', function (t) {
    t.plan(1);

    t.equal(_.uuid().length, 36);
});

test('uuid: should generate unique uuids', function (t) {
    t.plan(1);

    var numUuids = 10000,
        uuids = [];

    for (var i = 0; i < numUuids; i++) {
        uuids.push(_.uuid());
    }

    t.equal(_.uniq(uuids).length, numUuids);
});

test('uuid: should generate a valid uuid', function (t) {
    t.plan(1);

    t.equal(_.isUuid(_.uuid()), true);
});

test('uuid: should set the 15th char to 4', function (t) {
    var numUuids = 50;
    t.plan(numUuids);

    for (var i = 0; i < numUuids; i++) {
        t.equal(_.uuid()[14], '4');
    }
});

test('uuid: should set the 20th char to either 8, 9, a or b', function (t) {
    var numUuids = 500;
    t.plan(numUuids);

    var allowed = ['8', '9', 'a', 'b'];

    for (var i = 0; i < numUuids; i++) {
        var e = _.uuid()[19];
        t.equal(_.contains(allowed, e), true);
    }
});

