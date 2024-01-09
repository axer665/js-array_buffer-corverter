import ArrayBufferConverter from './ArrayBufferConverter';
import getBuffer from './getBuffer';

const data = new ArrayBufferConverter();
data.load(getBuffer());
console.log(data);
console.log(data.toString());