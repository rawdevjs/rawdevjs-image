'use strict'

const Components = require('./Components')

class Types {}

Types.RGB24 = {
  BufferType: Uint8Array,
  components: [Components.Red, Components.Green, Components.Blue],
  componentSize: 1,
  componentMinValue: 0,
  componentMaxValue: 255
}

Types.RGBA32 = {
  BufferType: Uint8Array,
  components: [Components.Red, Components.Green, Components.Blue, Components.Alpha],
  componentSize: 1,
  componentMinValue: 0,
  componentMaxValue: 255
}

Types.RGB48 = {
  BufferType: Uint16Array,
  components: [Components.Red, Components.Green, Components.Blue],
  componentSize: 2,
  componentMinValue: 0,
  componentMaxValue: 65535
}

Types.RGBA64 = {
  BufferType: Uint16Array,
  components: [Components.Red, Components.Green, Components.Blue, Components.Alpha],
  componentSize: 2,
  componentMinValue: 0,
  componentMaxValue: 65535
}

Types.RGB96FLOAT = {
  BufferType: Float32Array,
  components: [Components.Red, Components.Green, Components.Blue],
  componentSize: 4,
  componentMinValue: 0,
  componentMaxValue: 1
}

Types.RGBA128FLOAT = {
  BufferType: Float32Array,
  components: [Components.Red, Components.Green, Components.Blue, Components.Alpha],
  componentSize: 4,
  componentMinValue: 0,
  componentMaxValue: 1
}

Types.BAYER16 = {
  BufferType: Uint16Array,
  components: [Components.CFA],
  componentSize: 2,
  componentMinValue: 0,
  componentMaxValue: 65535
}

module.exports = Types
