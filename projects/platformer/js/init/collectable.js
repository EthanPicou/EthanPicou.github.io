(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 1000000},
        max: {assetKey: 'max', points: 200000000},
        steve:{assetkey: 'steve', points: 300000000000},
        grace: {assetKey: 'grace', points: 400000000000000},
        kennedi: {assetKey: 'kennedi', points: 5000000000000000}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the collectable.create() method to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * collectable.create() takes these arguments:
     *      
     *      collectable.create(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    collectable.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        collectable.create(type.kennedi, 550, 170, 6, 0.7);
        collectable.create(type.grace , 500, 170, 6, 0.7);
        collectable.create(type.db , 300, 10, 6, 0.7);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);