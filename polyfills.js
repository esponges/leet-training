/**
 * @param {Array} nums
 * @returns {number[]}
 */
function flattenArray(nums) {
  function flatten(arr) {
    if (!Array.isArray(arr)) return [arr];

    const toFlatten = [];
    for (el of arr) {
      toFlatten.push(...flatten(el));
    }

    return toFlatten;
  }

  return flatten(nums);
}

const flattenCases = [[1, 2, [3, 2, [2]], 1]];

flattenCases.forEach((c) => {
  console.log(flattenArray(c));
});

/**
 * @param {object[]} arr
 * @param {function} callback
 * @returns {object}
 */
function arrayFilter(arr, callback) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!!callback(element, i)) {
      results.push(element);
    }
  }

  return results;
}

Array.prototype.foo = function () {
  return console.log('foo', this);
};

[1, 2].foo();

const filterCases = [
  [
    [
      { color: 'red' },
      { color: 'blue' },
      { color: 'yellow' },
      { color: 'red' },
      { color: 'red' },
    ],
    (el, _) => el.color === 'red',
  ],
];

filterCases.forEach((c) => {
  console.log(arrayFilter(c[0], c[1]));
});

Function.prototype.custBind = function (...args1) {
  const func = this;
  const obj = args1[0];
  const arg = args1.splice(1);
  return function (...arg2) {
    func.apply(obj, [...arg, ...arg2]);
  };
};
const data1 = {
  name: 'sotly.co',
  getName: function (from) {
    console.log(from, this.name);
  },
};

const data2 = {
  name: 'Abhishek',
};

const getName = data1.getName.custBind(data2, 'From bind: ');

data1.getName('From data1: ');
getName();




const withFn = {
  name: 'with fn',
  callback: function (args) {
      console.log('with fn and :', this.name, JSON.stringify(args));
  }
}

const woFn = {
  name: 'wo Fn'
}

/* 
  binds the method from other contexts to 
  a different context

  in this case, `woFn` doesn't have a function
  but we're using the `callback` key from the
  `withFn` and applying it to `woFn`
*/

Function.prototype.myBind = function (...args) {
  const func = this;
  const obj = args[0];
  const rest = args.slice(1);


  return function(...nextArgs) { // nextArgs will be args passed to the closure
    // obj: the obj that will get bind the fn in this case `woFn`
    // the array is the arguments that will be passed to the callback fn
    func.apply(obj, [...rest, ...nextArgs]);
  }
}

const closure = withFn.callback.custBind(woFn, { foo: 'bar' });
closure();

class Bar {
  constructor() {}
  hi () {
    console.log('extending');
  }
}

class Foo extends Bar {
  bar = 'hi';
  next;

  constructor(val) {
    super();
    this.next = val;
    console.log('initalized', val);
    this.hi();
  } 
}


new Promise((resolve, reject) => {
  // either resolve or reject
})

class CustomPromise {
  constructor(callback) {
    this.val = null
    this.STATE = 'pending';
    this.successCallbacks = [];
    this.rejectCallbacks = [];

    try {
      callback(
        val => this.resolve(val),
        val => this.reject(val) 
      )
    } catch (error) {
      this.reject(error);
    }
  }

  resolve (val) {
    this.val = val
    this.STATE = 'resolved'
    this.successCallbacks.forEach(cb => cb());
  }

  reject (err) {
    this.val = err;
    this.STATE = 'rejected';
    this.rejectCallbacks.forEach(cb => cb())
  }

  then(resolveFn, rejectFn) {
    return new CustomPromise((resolve, reject) => {
      function successCaller() {
        if (!resolveFn) return resolve(this.val);

        try {
          const val = resolveFn(this.val)
          resolve(val);
        } catch (error) {
          reject(error);
        }
      }

      function rejectedCaller() {
        if (!rejectFn) return reject(this.val);

        try {
          const val = rejectFn(this.val)
          resolve(val);
        } catch (error) {
          reject(error);
        }
      }

      switch(this.STATE) {
        case 'pending':
          this.successCallbacks.push(successCaller);
          this.rejectCallbacks.push(rejectedCaller);
          break;
          case 'resolved':
          successCaller();
          break;
        case 'rejected':
          rejectedCaller();
          break;
        default:
          throw new Error('unknown status');
      }
    });
  }

  catch(rejectFn) {
    return this.then(undefined, rejectFn);
  }
}

class Memo {
  initialVals = [];
  firstRepOcc = -1;
  memo = new Set();
  constructor(initialVals) {
    if (initialVals.length > 0) {
      this.initialVals = initialVals;

      initialVals.forEach((val) => {
        if (!this.memo.has(val)) this.memo.add(val);
        else {
          this.firstRepOcc = val;
          return false;
        } 
      });
    } 

  }
  add (val) {
    if (this.firstRepOcc === -1) {
      if (this.memo.has(val)) {
        this.firstRepOcc = val;
      } else {
        this.memo.add(val);
      }
    }
  }

  getFirstOcurrence () {
    return this.firstRepOcc;
  }
}

const example = new Memo([1, 2, 3]);
example.add(1);
console.log(example.getFirstOcurrence());
