"use strict";
/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.with_gopay = void 0;
var chalk_1 = __importDefault(require("chalk"));
var with_gopay = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return chalk_1.default.blueBright("[GOPAY] ") + chalk_1.default.green(args.join(" "));
};
exports.with_gopay = with_gopay;
