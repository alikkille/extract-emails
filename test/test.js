'use strict';

const assert = require('assert');
const extractEmails = require('./../extract-emails');

describe('#extractEmails', () => {
    it('should return emails from html', () => {
        let expected, actual;

        // single email
        expected = ['john@example.com'];
        actual = extractEmails('<p>john@example.com</p>');
        assert.deepEqual(expected, actual);

        // multiple emails
        expected = ['bill@example.net', 'jack@example.edu'];
        actual = extractEmails(`
          <p>Lorem ipsum dolor bill@example.net nostrud.</p>
          <p>Lorem ipsum dolor sit amet, jack@example.edu adipisicing elit.</p>
        `);
        assert.deepEqual(expected, actual);
    });
});
