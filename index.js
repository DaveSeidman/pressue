var gpio = require("gpio");

var gpio4 = gpio.export(4, {
    direction: "in",
    ready: function() {
        console.log("pin4 is ready");
    }
})

gpio4.on("change", function(val) {

    console.log(val);
});
