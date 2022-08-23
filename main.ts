datalogger.mirrorToSerial(true)
datalogger.setColumns(["temperature", "light"])
loops.everyInterval(60000, function () {
    datalogger.logData([datalogger.createCV("temperature", input.temperature()), datalogger.createCV("light", input.lightLevel())])
})
