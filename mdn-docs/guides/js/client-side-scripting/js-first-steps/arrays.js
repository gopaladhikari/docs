const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

console.log(sequence);
console.log(random);

console.log(shopping.length); // 5

shopping[0] = "tahini";
console.log(shopping);

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

for (const bird of birds) {
  console.log(bird);
}

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const splittedCities = data.split(",");
console.log(splittedCities);
