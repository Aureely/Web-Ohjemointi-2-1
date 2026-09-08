// Define UserStatus type here
export type UserStatus = "active" | "inactive" | "pending";

// Define Coordinate tuple type here
export type Coordinate = [latitude: number, longitude: number];

// Define UserProfile interface or type alias here
export interface UserProfile {
  readonly id: number;
  user: string;
  email: string;
  status: UserStatus;
  location: Coordinate;
  bio?: string;
}

// Implement createUser function
export function createUser(
  id: number,
  username: string,
  email: string,
  location: Coordinate,
): UserProfile {
  return {
    id,
    user: username,
    email,
    status: "pending",
    location,
  };

  throw new Error("Not implemented");
}

createUser(1, "Aura", "aurahelmiina@gmail.com", [23, 55]);
