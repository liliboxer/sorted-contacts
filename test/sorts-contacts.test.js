import sortContacts from '../js/sorts-contacts.js';

const test = QUnit.test;

QUnit.module('sort contacts');

const cantu = {
    'firstName': 'Cantu',
    'lastName': 'Sullivan',
    'company': 'IDETICA',
    'eyeColor': 'hazel',
};

const george = {
    'firstName': 'George',
    'lastName': 'Nicholson',
    'company': 'MALATHION',
    'eyeColor': 'blue',
};

const pruitt = {
    'firstName': 'Pruitt',
    'lastName': 'Montgomery',
    'company': 'MANGELICA',
    'eyeColor': 'green',
};

const contacts = [cantu, george, pruitt];

test('sorts on last name', assert => {
    const sortOptions = {
        property: 'lastName',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);

});

test('sorts on eye color', assert => {
    const sortOptions = {
        property: 'eyeColor',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [george, pruitt, cantu]);

});

test('sorts on last name descending', assert => {
    const sortOptions = {
        property: 'lastName',
        direction: -1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

test('sorts does not change array', assert => {
    const sortOptions = {
        property: 'lastName',
        direction: -1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

