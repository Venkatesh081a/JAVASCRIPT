// 1
function task(w, n, c) {
  let obj = {
    Monday: "James",
    Tuesday: "John",
    Wednesday: "Robert",
    Thursday: "Michale",
    Friday: "William",
  };

  return `It is ${w} today, ${
    obj[w]
  }, you have to work, you must spray ${n} trees and you need ${
    n * c
  } dollars to buy liquid`;
}

console.log(task("Thursday", 15, 2));
// ----------------------------------------------------------------------------------

// 2
function guessGifts(wishlist, presents) {
  return wishlist
    .filter(function (x) {
      return presents.some(function (y) {
        return (
          x.size === y.size &&
          x.clatters === y.clatters &&
          x.weight === y.weight
        );
      });
    })
    .map(function (x) {
      return x.name;
    });
}

let wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

let presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

console.log(guessGifts(wishlist, presents));
//--------------------------------------------------------------------------------

//3
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
console.log(isLeapYear(1984));
//------------------------------------------------------------------------------

//4
function sumOfIntegersInString(s) {
  return s
    .replace(/\D/gi, " ")
    .split(" ")
    .map((value) => Number(value))
    .reduce((a, b) => a + b);
}
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."));
// --------------------------------------------------------------------------

function oddOrEven(array) {
  let sum = 0;
  array.forEach(function (i) {
    sum += i;
  });
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, -1, -5]));

// Multiples of 3 or 5
function MultiplesOf3or5(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(MultiplesOf3or5(1000));
//--------------------------------------------------------------------------------
function getNiceNames(people) {
  const niceNames = [];
  people.forEach((i) => {
    if (i.wasNice) {
      niceNames.push(i.name);
    }
  });
  return niceNames;
}
console.log(
  getNiceNames([
    { name: "Warrior reading this kata", wasNice: true },
    { name: "xDranik", wasNice: false },
    { name: "Santa", wasNice: true },
  ])
);

function getNaughtyNames(people) {
  const niceNames = [];
  people.forEach((i) => {
    if (!i.wasNice) {
      niceNames.push(i.name);
    }
  });
  return niceNames;
}

console.log(
  getNaughtyNames([
    { name: "Warrior reading this kata", wasNice: true },
    { name: "xDranik", wasNice: false },
    { name: "Santa", wasNice: true },
  ])
);
//----------------------------------------------------------------------------
function sumDigits(number) {
  number = Math.abs(number);
  number = number.toString();
  let sum = 0;
  for (const i of number) {
    sum += +i;
  }
  return sum;
}

console.log(sumDigits(509));

// LeetCode Problems
// -------------------------------------------------

const twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));

//-------------------------------------------------------------
const reverse = function (x) {
  let result = [];
  x = x.toString();
  for (let i = x.length - 1; i >= 0; i--) {
    if (isNaN(x[i])) {
      result.unshift(x[i]);
    } else {
      result.push(+x[i]);
    }
  }
  return result.join("");
};
console.log(reverse(-123));
//reverse(-123);
//------------------------------------------------------------------
const plusOne = function (digits) {
  const result = [];
  for (let i = 0; i < digits.length - 1; i++) {
    result.push(digits[i]);
  }
  digits[digits.length - 1] += 1;
  let lastDigit = digits[digits.length - 1];
  if (lastDigit <= 9) {
    result.push(lastDigit);
  } else {
    lastDigit = lastDigit.toString();
    for (let i of lastDigit) {
      result.push(+i);
    }
  }
  return result;
};

console.log(plusOne([9, 9]));

const onePlus = function (digits) {
  digits = digits.join("");
  digits = +digits + 1;
  digits = digits.toString().split("");
  return +digits.join("");
};
console.log(onePlus([6, 1, 4]));

//----------------------------------------------------
function reverseString(s) {
  let reversedString = [];
  try {
    if (typeof s === "string") {
      for (let i = s.length - 1; i >= 0; i--) {
        reversedString.push(s[i]);
      }
    }
  } catch (Exception) {
    return Exception.message;
  }
  return reversedString.join("");
}

console.log(reverseString("Fun is Js"));

//--------------------------------------------------------------------------
