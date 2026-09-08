export interface Entity {
  readonly id: string;
}

export interface User extends Entity {
  name: string;
  age: number;
}

export abstract class BaseRepository<T extends Entity> {
  // Add private items Map
  private items: Map<string, T> = new Map();

  // Add protected log method
  protected log(action: string, entityId: string): void {
    console.log(action, entityId);
  }

  // Add public add, getById, getAll methods
  public add(item: T): void {
    if (this.validate(item) == false) throw new Error();
    else {
      this.items.set(item.id, item);
      this.log("ADD", item.id);
    }
  }

  public getById(id: string): T | undefined {
    const found = this.items.get(id);

    return found;
  }

  public getAll(): readonly T[] {
    const itemsArray = Array.from(this.items.values());

    return itemsArray;
  }

  // Add abstract validate method
  public abstract validate(item: T): boolean;
}

export class UserRepository extends BaseRepository<User> {
  // Implement validate and override add with validation
  public validate(item: User): boolean {
    if (item.age >= 18 && item.name.length > 0) return true;
    else return false;
  }

  public add(item: User): void {
    if (this.validate(item) == false) throw new Error();
    else super.add(item);
  }
}
