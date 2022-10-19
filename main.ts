input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let number = 0
let yumber = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(number, yumber)
        basic.pause(200)
        number += 1
    }
    if (number > 4) {
        number = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(number, yumber)
        basic.pause(200)
        yumber += 1
    }
    if (yumber > 4) {
        yumber = 0
    }
})
