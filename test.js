const flat = require('./')
const suite = require('tape')

suite('deep-flat:', assert => {
  const {comment: test, end, deepEqual} = assert

  test('flattens an array')
  deepEqual(flat([[1, 2, 3]]), [1, 2, 3], 'depth of 1')

  test('to any (reasonable) specified depth')
  deepEqual(flat([[[[[1, 2, 3]]]]], 4), [1, 2, 3], 'depth to 4')
  deepEqual(flat([[[[[[[[[[1, 2, 3]]]]]]]]]], 9), [1, 2, 3], 'depth to 9')
  deepEqual(flat([[[[[1, 2, 3]]]]], 3), [[1, 2, 3]], 'depth to 3 on nested depth of 4')

  test('works with any type')
  deepEqual(flat([[[[['baz', {foo: [1, 2, 3, {}]}, {bar: 1}]]]]], 4),
    ['baz', {foo: [1, 2, 3, {}]}, {bar: 1}], 'mixed types')

  end()

})
