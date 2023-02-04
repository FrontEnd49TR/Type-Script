import { Shape } from "./ShapeInterface";

export class ShapesContainer implements Shape {
    // private shapes: Array<Shape>
    // constructor( shapes: Array<Shape>) {
    //     this.shapes = shapes;
    // }
    constructor(private shapes: Array<Shape>) { }
    getSquare(): number {
        return this.shapes.reduce((res, cur) => res + cur.getSquare(), 0);
    }
    getPerimeter(): number {
        return this.shapes.reduce((res, cur) => res + cur.getPerimeter(), 0);
    }

}