'use strict'

function nextPowerOfTwo (n) {
  n--

  for (let i = 1; i < 32; i <<= 1) {
    n = n | n >> i
  }

  return n + 1
}

class Image {
  constructor () {
    // default values
    this.powerOfTwoSize = false
    this.bufferOffsetX = 0
    this.bufferOffsetY = 0

    // merge all options into this object
    for (let i = 0; i < arguments.length; i++) {
      for (let option in arguments[i]) {
        this[option] = arguments[i][option]
      }
    }

    // calculate array size depending on power of tow parameter
    if (this.powerOfTwoSize) {
      this.bufferWidth = nextPowerOfTwo(this.width)
      this.bufferHeight = nextPowerOfTwo(this.height)
    } else {
      this.bufferWidth = this.width
      this.bufferHeight = this.height
    }

    // create typed array
    this.buffer = new this.BufferType(this.bufferWidth * this.bufferHeight * this.components.length)

    // add croppedArray getter
    Object.defineProperty(this, 'croppedArray', {
      get: () => {
        let offset = this.bufferOffsetY * this.bufferWidth * this.components.length + this.bufferOffsetX * this.components.length

        return this.array.subarray(offset)
      }
    })
  }

  type () {
    return {
      powerOfTwoSize: this.powerOfTwoSize,
      BufferType: this.BufferType,
      components: this.components,
      componentSize: this.componentSize,
      componentMinValue: this.componentMinValue,
      componentMaxValue: this.componentMaxValue
    }
  }

  getPixel (x, y) {
    let offset = (this.bufferOffsetX + x + (this.bufferOffsetY + y) * this.bufferWidth) * this.components.length

    return this.buffer.subarray(offset, offset + this.components.length)
  }

  setPixel (x, y, values) {
    let offset = (this.bufferOffsetX + x + (this.bufferOffsetY + y) * this.bufferWidth) * this.components.length

    for (let c = 0; c < values.length; c++) {
      this.buffer[offset + c] = values[c]
    }
  }
}

module.exports = Image
