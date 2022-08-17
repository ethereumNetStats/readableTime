"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unixTimeReadable = exports.currentTimeReadable = void 0;
const currentTimeReadable = () => {
    let dateObj = new Date();
    return `${dateObj.getUTCFullYear()}-${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}-${('0' + dateObj.getUTCDate()).slice(-2)} ${('0' + dateObj.getUTCHours()).slice(-2)}:${('0' + dateObj.getUTCMinutes()).slice(-2)}:${('0' + dateObj.getUTCSeconds()).slice(-2)}`;
};
exports.currentTimeReadable = currentTimeReadable;
const unixTimeReadable = (unixSecTime) => {
    let dateObj = new Date(unixSecTime * 1000);
    return `${dateObj.getUTCFullYear()}-${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}-${('0' + dateObj.getUTCDate()).slice(-2)} ${('0' + dateObj.getUTCHours()).slice(-2)}:${('0' + dateObj.getUTCMinutes()).slice(-2)}:${('0' + dateObj.getUTCSeconds()).slice(-2)}`;
};
exports.unixTimeReadable = unixTimeReadable;
