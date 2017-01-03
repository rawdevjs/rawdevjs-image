'use strict'

class Components {}

// RGB + Alpha
Components.Red = 0
Components.Green = 1
Components.Blue = 2
Components.Alpha = 3

// Grayscale
Components.Gray = 4

// CMYK
Components.Cyan = 5
Components.Magenta = 6
Components.Yellow = 7
Components.Key = 8

// HSL + HSV
Components.Hue = 9
Components.Saturation = 10
Components.Lightness = 11
Components.Value = 12

// Bayer Pattern / Color Filter Array unseparated
Components.CFA = 9

module.exports = Components
