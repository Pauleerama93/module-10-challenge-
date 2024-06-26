const { Square, Triangle, Circle} = require("../lib/shapes")


describe("Circle", () => {
    test("Should render svg for a red circle element", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red"/>`
        const circle = new Circle();
        circle.setColor("red");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
        

    })
    test("Should accept a fillColor input", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red"/>`
        const circle = new Circle()
        // setter
        circle.setColor("red")
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG)

    })
})

describe("Triangle", () => {
    test("should render svg for teal polygon element", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="teal"/>`
        const triangle = new Triangle()
        triangle.setColor("teal")
        const actualSVG = triangle.render()
        expect(actualSVG).toEqual(expectedSVG)
    })
    
    test("should accept a fillColor input", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="teal"/>`
        const triangle = new Triangle()
        triangle.setColor("teal")
        const actualSVG = triangle.render()
        expect(actualSVG).toEqual(expectedSVG)
    })
})

describe("Square", () => {
    test("should render svg for yellow polygon element", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="yellow"/>`
        const square = new Square()
        square.setColor("yellow")
        const actualSVG = square.render()
        expect(actualSVG).toEqual(expectedSVG)

    })
    test("should accept a fillColor input", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="yellow"/>`
        const square = new Square()
        square.setColor("yellow")
        const actualSVG = square.render()
        expect(actualSVG).toEqual(expectedSVG)

    })
})
