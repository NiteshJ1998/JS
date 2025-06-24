let a = 2;
let b = 3;

let result = a + b;

async function getData() {
  let resultFromServer = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(await resultFromServer.json());
}

getData();
console.log(result);
