basic.forever(function () {
    basic.showNumber(dht11.readTemperature(dht11.TemperatureType.Celsius, dht11.PinKit.P0))
})
