module.exports =
  (array = [], depth = 1) => 
    Array.apply(0, {length: depth})
      .reduce(Function.apply.bind([].concat, []), array)
