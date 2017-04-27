/*
In this function, we're going to log out the three arguments
that are passed into a decorator:
- target - the class constructor function
- key - the property or method receiving the decorator
- descriptor - the internal properties for that class member
    - value: any - the value of the property or function assigned to that method
    - enumerable: boolean - determines if it is a property that would show up in iteration
    - configurable: boolean - can be changed or removed from the target
    - writable: boolean - can be changed
 ---------------
 */

export function analyze(target, key, descriptor) {
    console.log(`-------`);
    console.log(`target:`, target);
    console.log(`-------`);
    console.log(`key:`, key);
    console.log(`-------`);
    console.log(`descriptor:`, descriptor);
    console.log(`-------`);
    return descriptor;
}