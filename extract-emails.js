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
    if (!html) {
        throw new Error('Argument is not provided');
    }

    if (typeof html !== 'string') {
        throw new Error('Argument is not a string');
    }

    return extractPlainEmails(html);
}

module.exports = extractEmails;
