'use strict';

const request = require('supertest');
const expect = require('chai').expect;

describe('Home Page', function() {

    describe('App loaded', function() {
        it('should be loaded', function() {
            expect(app).toBeDefined();
        });
    });

    // describe('Home Controller', function() {});
    // describe('Board Directive', function() {});
});