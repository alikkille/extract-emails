const assert = require('assert');
const extractEmails = require('./../extract-emails');

describe('#extractEmails', () => {
    it('should return emails from plain text', () => {
        expected = ['user@example.com'];
        actual = extractEmails('<p>user@example.com</p>');

        assert.deepEqual(expected, actual);
    });
});
