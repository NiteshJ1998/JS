// Loops

// For Loops -->  if you know how many times
for (let i = 1; i <= 10; i = i + 2) {
  console.log("nitesh" + i);
}

/**
 *while loop when you don't know how much step 
 we have to take then use while loops
 */

let ip = 100;
let house = 100;

while (ip != house) {
  ip = ip + 2;
  console.log("step taken" + ip);
}

//Do while

do {
  ip = ip + 2;
  console.log("step taken" + ip);
} while (ip <= house);
