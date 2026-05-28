# How `Pick` and `Omit` Help Keep TypeScript Code DRY

## Introduction

In TypeScript, we often create interfaces to describe the structure of objects. Sometimes we need a smaller version of a bigger interface. Writing the same properties again and again creates duplicate code. TypeScript provides utility types like `Pick` and `Omit` to solve this problem. They help us create smaller types from a master interface without repeating code.

## How This Prevents Code Duplication

Suppose we have a `Book` interface:

```ts
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  price: number;
}
```

This is the main interface. Now imagine we need only some properties for showing a book card.

### Using `Pick`

`Pick` allows us to select only the properties we need.

```ts
type BookCard = Pick<Book, "title" | "author">;

const book: BookCard = {
  title: "TypeScript Guide",
  author: "Jane Doe",
};
```

Here, `BookCard` only contains `title` and `author`. We do not need to write a new interface manually.

### Using `Omit`

`Omit` allows us to remove some properties from a type.

```ts
type BookWithoutPrice = Omit<Book, "price">;

const bookInfo: BookWithoutPrice = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
```

Here, `BookWithoutPrice` has all properties from `Book` except `price`.

## Conclusion

`Pick` and `Omit` are useful TypeScript utility types. `Pick` selects specific properties, and `Omit` removes specific properties They help us create specialized slices of a master interface without repeating code. This follows the DRY principle and makes TypeScript projects easier to maintain.
