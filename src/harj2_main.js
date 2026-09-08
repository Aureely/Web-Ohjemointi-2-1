export function isCircle(shape) {
    return shape.kind === "circle";
}
export function calculateArea(shape) {
    // Implement exhaustive switch check
    switch (shape.kind) {
        case "circle":
            return 3.14159265359 * shape.radius ** 2; // PI kertaa ympyrän säde potenssiin kaksi
        case "square":
            return shape.size * shape.size; // sivu kertaa sivu
        case "rectangle":
            return shape.width * shape.height; // pituus kertaa leveys
        default:
            const exhaustiveCheck = shape;
    }
    throw new Error("Not implemented");
}
