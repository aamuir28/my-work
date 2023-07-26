"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _length, _width) {
        super(theX, theY);
        this._length = _length;
        this._width = _width;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    getInfo() {
        return super.getInfo() +
            `, width=${this._width}, length=${this._length}`;
    }
}
exports.Rectangle = Rectangle;
