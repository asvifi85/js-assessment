exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce(function (x, y) {
      return x + y;
    }, 0);
  },

  remove: function (arr, item) {
    return arr.filter(function (x) {
      return x !== item;
    });
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    var ans = arr1.concat(arr2);
    return ans;
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var counter = 0;
    arr.filter(function (x) {
      if (x === item) {
        counter++;
      }
    });
    return counter;
  },

  duplicates: function (arr) {
    var dupes = {};
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
      if (dupes[arr[i]] && ans.indexOf(arr[i]) === -1) {
        ans.push(arr[i]);
      } else {
        dupes[arr[i]] = arr[i];
      }
    }
    return ans;
  },

  square: function (arr) {
    return arr.map(function (x) {
      return x * x;
    });
  },

  findAllOccurrences: function (arr, target) {
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        ans.push(i);
      }
    }
    return ans;
  }
};