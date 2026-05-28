//Problem 1
function filterEvenNumbers(param: number[]): number[] {
  return param.filter((item) => item % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//Problem 2
function reverseString(param: string): string {
  return param.split("").reverse().join("");
}
reverseString("typescript");

//Problem 3
type StringOrNumber = string | number;
function checkType(param: StringOrNumber): string {
  if (typeof param === "string") {
    return "String";
  } else {
    return "Number";
  }
}
checkType("Hello");
checkType(42);

//Problem 4
const user = { id: 1, name: "John Doe", age: 21 };
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getProperty(user, "name");

//Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
function toggleReadStatus(param: Book): Book & { isRead: boolean } {
  return {
    ...param,
    isRead: true,
  };
}
toggleReadStatus(myBook);

//Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
student.getDetails();

//Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
