function calculateSum(num) {
  let rem,
    sum = 0;
  while (num) {
    rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  return sum;
}

function findDigitSum(n) {
  return new Promise(function (resolve, reject) {
    if (typeof n === "number") {
      resolve(calculateSum(n));
    } else {
      reject(new Error("Invalid"));
    }
  });
}

async function findResult(n) {
  try {
    const result = await findDigitSum(n);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

findResult("234");
