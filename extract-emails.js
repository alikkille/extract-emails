(function() {
    'use strict';

    const emailRegExp = /(\w+@\w+\.\w+)/ig;

    function extractPlainEmails(html) {
        let emails = [];

        let match;

        while ((match = emailRegExp.exec(html)) !== null) {
            emails.push(match[1]);
        }

        return emails;
    }

    function extractEmails(html) {
        return extractPlainEmails(html);
    }

    module.exports = extractEmails;
})();
