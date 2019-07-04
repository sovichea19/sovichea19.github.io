/**
 * Author: Sovichea Cheth
 * ID: 985421
 */

"use strict";

(function () {
    //1. Create a function expression named createBicyclePrototye which returns an object literal with one property speed set to value 0 and two methods
    // a. applyBrake that takes a parameter and decrement the current speed of the object by that given value.
    // b. speedup that takes a parameter increment current speed by given value.
    function createBicyclePrototype() {
        return {
            speed: 0,
            applyBrake: function (decrement) {
                this.speed -= decrement;
            },
            speedup: function (increment) {
                this.speed += increment;
            }
        }
    }

    //2. Create another function expression named createMountainBikeProtoype   that take a prototype parameter and
    // returns an object created using Object.create (prototype) with one additional property gear set to value 1 and
    // one additional method setGear which takes a parameter and sets gear value for the object.
    function createMountainBikePrototype(type) {
        var bicycle = Object.create(type);
        bicycle.gear = 1;
        bicycle.setGear = function (gear) {
            this.gear = gear;
        };
        return bicycle;
    }

    //3. Write third function expression named start that first make bicyclePrototype object using first function and
    // then mountainBikePrototype object using second function, passing bicyclePrototype as argument.
    function start() {
        var bicyclePrototype = createBicyclePrototype();
        var mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);
    }

    let bicycleType = createBicyclePrototype();
    bicycleType.speed = 2;
    bicycleType.applyBrake(2);
    console.log('Bicycle Type Speed 2 decrement 2: ');
    console.log(bicycleType.speed);

    bicycleType.speed = 3;
    bicycleType.applyBrake(1);
    console.log('Bicycle Type Speed 3 decrement 1: ');
    console.log(bicycleType.speed);

    let mtType = createMountainBikePrototype(bicycleType);
    mtType.setGear(5);
    console.log('Moutain Type Set Gear 5: ');
    console.log(mtType.gear);

    //constructor function
    return {
        bicycle: createBicyclePrototype(),
        mtBicycle: createMountainBikePrototype(bicycleType),
        start: start()
    };

})();