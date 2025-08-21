class Node {
    constructor(key, value = null, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

export default class HashMap {
    constructor() {
        this.bucketsArray = new Array(16).fill(null);
        this.loadFactor = 0.75;
        this.capacity = this.bucketsArray.length;
        this.occupied = 0;
    }

    hash(key) {
        let hashKey = 0;
        const prime = 31;
        for (let i = 0; i < key.lenght; i++) {
            hashKey +=  key.charCodeAt(i) * prime;  
        }
        return hashKey % this.bucketsArray.length;
    }

    set(key, value) {
        if (this.occupied / this.capacity >= this.loadFactor ) {
            this.resize();
        }
        const bucket = this.hash(key);
        if (!this.hash(key)) {
            const newNode = new Node(key, value);
            if (this.bucketsArray[bucket] === null) {
                this.occupied += 1;
                this.bucketsArray[bucket] = newNode;
            } else {
                let current = this.bucketsArray[bucket];
                while (current.next !== null) {
                    current.current.next;
                }
                current.next = newNode;
            }
        } else {
            let current = this.bucketsArray[bucket];
            while (current !== null && current.key !== key) {
                current.current.next;
            }
            if (current !== null) {
                current.value = value;
            }
        }
    }

    get(key) {
       const bucket = this.hash(key);
       let current = this.bucketsArray[bucket];
       while (current.key !== null && current.key !== key) {
        current = current.next;
       }
       if (current == null) {
        return null;
       }
       return current.key;
    }

    has(key) {
        const bucket = this.hash(key);
        let current = this.bucketsArray[bucket];
        while (current !== null) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    remove(key) {
       const bucket = this.hash(key);
       let current = this.bucketsArray[bucket];
       let previous = null; 

       while (current !== null && current.key !== key) {
        previous = current;
        current = current.next;
       }

       if (current = null) {
        return;
       }

       if (previous === null && current.next === null) {
        this.occupied -= 1;
        this.bucketsArray[bucket] = current.next;
       } else if (previous === null) {
        this.bucketsArray[bucket] = current.next;
       } else {
        previous.next = current.next;
       }
    }

    length() {
        let counter = 0;
        this.bucketsArray.forEach((bucket) => {
            let current = bucket;
            if (bucket !== null) {
                counter += 1;
                while (current.next !== null) {
                    counter +=1;
                    current = current.next;
                }
            }
        });
        return counter;
    }

    clear() {
        this.bucketsArray = new Array(16).fill(null);
        this.occupied = 0;
    }

    keys() {
        const arrayOfKeys = [];
        this.bucketsArray.forEach((bucket) => {
            let current = bucket;
            if (bucket !== null) {
                arrayOfKeys.push(current.key);
                while (current.next !== null) {
                    current = current.next;
                    arrayOfKeys.push(current.key)
                }
            }
        });
        return arrayOfKeys;
    }

    values() {
        const arrayOfValues = [];
        this.bucketsArray.forEach((bucket) => {
            let current = bucket;
            if (bucket !== null) {
                arrayOfValues.push(current.value);
                while (current.next !== null) {
                    current = current.next;
                    arrayOfValues.push(current.value);
                }
            }
        });
        return arrayOfValues;
    }

    entries() {
        const arrayOfEntries = [];
        this.bucketsArray.forEach((bucket) => {
            let current = bucket;
            if (bucket !== null) {
                arrayOfEntries.push([current.key, current.value]);
                while (current.next !== null) {
                    current = current.next;
                    arrayOfEntries.push([current.key, current.value]);
                }
            }
        });
        return arrayOfEntries;
    }
}
