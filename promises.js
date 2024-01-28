// Let's say you're at a candy store and you want some candy.

// 1. Promises: You ask for candy and get a promise (voucher) in return.
{{
function getCandy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here's your candy!"); // Yay, you got your candy!
    }, 2000); // It takes 2 seconds to get your candy.
  });
}

// Now, you wait for the promise to be fulfilled.
getCandy()
  .then((candy) => {
    console.log(candy); // Output: "Here's your candy!"
  })
  .catch((error) => {
    console.error(error); // Output: If something goes wrong, like the candy store is closed.
  });

// 2. Async/Await: You ask for candy, but you don't wanna wait around.

async function getCandyAsync() {
  try {
    const candy = await getCandy(); // Pause here until you get your candy.
    console.log(candy); // Output: "Here's your candy!"
  } catch (error) {
    console.error(error); // Output: If something goes wrong, like the candy store is closed.
  }
}

// Now, you call the async function to get your candy without waiting around.
getCandyAsync();

}}