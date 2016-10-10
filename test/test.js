(() => {
    'use strict';

    const assert = require('assert');
    const extractEmails = require('./../src/extract-emails');

    describe('#extractEmails', () => {
        it('should throw an error if argument not provided', () => {
            assert.throws(
                () => {
                    extractEmails();
                },
                Error
            );
        });

        it('should throw an error if argument is not a string', () => {
            assert.throws(
                () => {
                    extractEmails(1);
                },
                Error
            );
        });

        it('should return empty array if emails not found', () => {
            let actual = extractEmails('<p>Text without emails</p>');
            assert.deepEqual([], actual);
        });

        it('should return array of emails from html', () => {
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
})();
