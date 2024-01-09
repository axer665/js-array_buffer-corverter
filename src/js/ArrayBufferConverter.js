export default class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      this.buffer = new ArrayBuffer(buffer.byteLength);
      this.buffer = buffer;
    }
  
    toString() {
      let text = '';
      const bufferView = new Uint16Array(this.buffer);
      for (let i = 0; i < bufferView.length; i += 1) {
        text += String.fromCharCode(bufferView[i]);
      }
      return text;
    }
  }