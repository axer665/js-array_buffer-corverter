import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Transform to string format', () => {
  const data = new ArrayBufferConverter();
  data.load(getBuffer());
  expect(data.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});