// const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

// shopping[0] = "tahini";

// console.log(shopping);

// const subArray = [0, 1, 2];
// const subArray2 = [0, 1, 2];

// const random = ["tree", 795, subArray];

// console.log(random[2][2]);

// console.log(random.indexOf(subArray2));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.pop();

// console.log(arr);

const isThere = (array, number) => {
  if (Array.isArray(array)) {
    if (array.indexOf(number) !== -1) {
      const index = array.indexOf(number);
      const newArray = array.slice(index, 2);
      console.log(array);
      return newArray;
    }

    return "Not found";
  }

  return "Not array";
};

console.log(isThere(arr, 5));
