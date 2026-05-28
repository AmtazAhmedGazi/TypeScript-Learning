# B7A1 - Advanced Problem Solving with TypeScript & OOP

## Assignment Overview

This repository contains the solution for the assignment **Advanced Problem Solving with TypeScript & OOP**.

The assignment includes TypeScript problem-solving tasks and two blog posts related to important TypeScript concepts. The main goal of this assignment is to demonstrate TypeScript knowledge such as functions, union types, type guards, generics, interfaces, classes, inheritance, and utility types.

## File Structure

```bash
├── solutions.ts
├── blog-1.md
├── blog-2.md
└── README.md
```

## Problem Solving

All coding solutions are written in a single file named `solutions.ts`.

The problems included in `solutions.ts` are:

1. `filterEvenNumbers` - returns only even numbers from an array.
2. `reverseString` - returns the reversed version of a string.
3. `checkType` - checks whether a value is a string or number using union type and type guards.
4. `getProperty` - returns the value of a given object key using generics.
5. `toggleReadStatus` - adds an `isRead` property to a book object.
6. `Person` and `Student` classes - demonstrate class inheritance.
7. `getIntersection` - returns common numbers from two arrays.

## Blog Posts

Two blog posts are included in separate Markdown files.

### Blog 1

**File:** `blog-1.md`

**Topic:** Why `any` is called a type safety hole and why `unknown` is safer.

This blog explains why using `any` can be risky in TypeScript. It also explains how `unknown` is safer because it requires type checking before using a value. The blog also covers the concept of type narrowing.

### Blog 2

**File:** `blog-2.md`

**Topic:** How `Pick` and `Omit` help keep TypeScript code DRY.

This blog explains how TypeScript utility types like `Pick` and `Omit` help create smaller types from a master interface without repeating code. This follows the DRY principle.

## Technologies Used

- TypeScript

## Author

**Amtaz Ahmed Gazi**
