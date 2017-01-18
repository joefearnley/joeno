'use strict';

const request = require('supertest');
const expect = require('chai').expect;

describe('GET /', function() {
    let server;

    beforeEach(function () {
        server = require('../server');
    });

    it('loads the index page', function(done) {
        request(server)
            .get('/')
            .expect(200)
            .expect(function(res) {
                expect(res.text).to.contain('Joeno');
                expect(res.text).to.contain('A keno gaming created using JavaScript');
            })
            .end(done);
    });
});