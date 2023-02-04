"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    // private shapes: Array<Shape>
    // constructor( shapes: Array<Shape>) {
    //     this.shapes = shapes;
    // }
    constructor(shapes) {
        this.shapes = shapes;
    }
    getSquare() {
        return this.shapes.reduce((res, cur) => res + cur.getSquare(), 0);
    }
    getPerimeter() {
        return this.shapes.reduce((res, cur) => res + cur.getPerimeter(), 0);
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapeContainer.js.map