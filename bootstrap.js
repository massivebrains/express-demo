const express = require('express');
const home = require('./routes/home');

module.exports = function (app) {

    app.use(express.json());

    app.use('/', home);

    app.use(function (err, req, res, next) {

        return res.status(500).json({ status: false, error: err });
    });
    
}