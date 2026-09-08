export interface Circle {
  kind: "circle";
  radius: number;
}

export interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

export interface Square {
  kind: "square";
  size: number;
}

export type Shape = Circle | Rectangle | Square;

export function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

export function calculateArea(shape: Shape): number {
  // Implement exhaustive switch check
  switch (shape.kind) {
    case "circle":
      return 3.14159265359 * shape.radius ** 2; // PI kertaa ympyrän säde potenssiin kaksi
    case "square":
      return shape.size * shape.size; // sivu kertaa sivu
    case "rectangle":
      return shape.width * shape.height; // pituus kertaa leveys
    default:
      const exhaustiveCheck: never = shape;
  }

  throw new Error("Not implemented");
}
