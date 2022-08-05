datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
datalogger.setColumnTitles("Temp")
loops.everyInterval(1800000, function () {
    datalogger.log(datalogger.createCV("Temp", input.temperature()))
})
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(5000)
    led.unplot(0, 0)
    basic.pause(5000)
})
