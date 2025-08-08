// Task 1
// ((a, b) => {
//   alert(a + b);
// })(5, 7);

// Task 2
const indieGames = ["Undertale", "Celeste", "Hollow Knight", "Stardew Valley"];

// for...in (indexes)
for (let index in indieGames) {
  console.log(`Index: ${index}, Value: ${indieGames[index]}`);
}

// for...of (values)
for (let value of indieGames) {
  console.log(`Value: ${value}`);
}

// .forEach() (values with index)
indieGames.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

// Task 3
const games = [
  "Clair Obscur: Expedtion 33",
  "Silent Hill",
  "Amnesia",
  "Resident Evil",
  ...indieGames,
  "The Last of Us",
  "The Witcher 3",
  "Dark Souls",
];

// Task 4
class Student {
  constructor(name, university, faculty, finalGrade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }

  getInfo() {
    return `${this.name} is a student in faculty of ${this.faculty} in university ${this.university}`;
  }
}

// task 5
const student = new Student(
  "Maryam Tarek",
  "Benha University",
  "Computer Science",
  3.86
);
console.log(student.getInfo());

// task 6
// task 6.a
function* tipGenerator() {
  const tips = [
    "Use === instead of ==",
    "Always declare variables with let/const",
    "Use arrow functions for concise syntax",
    "Avoid global variables",
    "Use template literals",
    "Understand closures",
    "Use spread/rest operators",
    "Master async/await",
    "Use map/filter/reduce",
    "Debug with console.log wisely"
  ];
  for (let tip of tips) {
    yield tip;
  }
}

// task 6.b
document.getElementById("showAllTips").addEventListener("click", () => {
  const gen = tipGenerator();
  for (let tip of gen) {
    console.log(tip);
  }
});
// task 6.c
let genInstance = tipGenerator();
document.getElementById("showTipsInterval").addEventListener("click", () => {
  const interval = setInterval(() => {
    const { value, done } = genInstance.next();
    if (done) {
      clearInterval(interval);
    } else {
      console.log(value);
    }
  }, 3000);
});

