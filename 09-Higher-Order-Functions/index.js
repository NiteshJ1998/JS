//High Order Functions and Callback

/*
callback fn are function which calling function itself.

Higher Order fn are the function which accept function are as
Higher Order fn
*/

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(2, 4, (val) => console.log(val));
add(400, 10, (res) => console.log(res));
