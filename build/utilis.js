"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDates = void 0;
var dateStringToDates = function (dateString) {
    //28/10/2018
    var dataParts = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
exports.dateStringToDates = dateStringToDates;
