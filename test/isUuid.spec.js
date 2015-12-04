var _ = require('../index.js'),
    test = require('tape');

test('isUuid: should validate a uuid', function (t) {
    t.plan(1);

    t.equal(_.isUuid(_.uuid()), true);
});

test('isUuid: should reject an invalid uuid format but allow any matching 8-4-4-4-12 string', function (t) {
    t.plan(6);

    t.equal(_.isUuid('123456781234-1234-1234-123412341234'), false);
    t.equal(_.isUuid('12348-1234-4234-1234-123412341234'), false);
    t.equal(_.isUuid('12345678-1234-1234-9234-123412341234234234'), false);
    t.equal(_.isUuid('12345678-1234-1234-1234-123412341234'), true);
    t.equal(_.isUuid('12345678-1234-4234-1234-123412341234'), true);
    t.equal(_.isUuid('12345678-1234-1234-9234-123412341234'), true);
});
