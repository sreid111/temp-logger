datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showString("Deleting data")
})
basic.showString("Temp logger")
datalogger.setColumnTitles("Temp")
loops.everyInterval(1800000, function () {
    datalogger.log(datalogger.createCV("Temp", input.temperature()))
    led.plot(0, 0)
    basic.pause(2000)
    led.unplot(0, 0)
})
basic.forever(function () {
	
})
