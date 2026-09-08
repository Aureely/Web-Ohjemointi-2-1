export class BaseRepository {
    // Add private items Map
    items = new Map();
    // Add protected log method
    log(action, entityId) {
        console.log(action, entityId);
    }
    // Add public add, getById, getAll methods
    add(item) {
        if (this.validate(item) == false)
            throw new Error();
        else {
            this.items.set(item.id, item);
            this.log("ADD", item.id);
        }
    }
    getById(id) {
        const found = this.items.get(id);
        return found;
    }
    getAll() {
        const itemsArray = Array.from(this.items.values());
        return itemsArray;
    }
}
export class UserRepository extends BaseRepository {
    // Implement validate and override add with validation
    validate(item) {
        if (item.age >= 18 && item.name.length > 0)
            return true;
        else
            return false;
    }
    add(item) {
        if (this.validate(item) == false)
            throw new Error();
        else
            super.add(item);
    }
}
