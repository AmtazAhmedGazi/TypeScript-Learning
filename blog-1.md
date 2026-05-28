# Why `any` Is a Type Safety Hole and Why `unknown` Is Safer

## Introduction

TypeScript helps us write safer JavaScript by checking types before the code runs. However, sometimes we receive data whose type is not clear. This data may come from an user input.In this situation using `any` is risky because it turns off TypeScript type checking. A safer option is `unknown` because it forces us to check the type before using the value.

## Why Is `any` Called a Type Safety Hole?

`any` tells TypeScript: "Do not check this value." Because of this TypeScript allows almost anything, even wrong code.

```ts
let name: any = "amtaz";

console.log(name.toUpperCase());
console.log(name.toFixed(2));
```

Here, `name` is a string. The method `toUpperCase()` works for strings, but `toFixed()` does not work for strings. TypeScript does not show an error because the type is `any`. This is why `any` is called a **type safety hole**. It creates a weak place in the code where TypeScript cannot protect us.

## Why Is `unknown` Safer?

`unknown` means that we do not know the type of the value. But it is safer because TypeScript does not allow us to use the value directly.

```ts
let name: unknown = "amtaz";

if (typeof name === "string") {
  console.log(name.toUpperCase());
}
```

Here, TypeScript allows `toUpperCase()` only after we check that `name` is a string. So, `unknown` is better when we are working with unpredictable name.

## What Is Type Narrowing?

**Type narrowing** means checking a general type and making it more specific.

```ts
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
```

At first, `param` can be either a `string` or a `number`. Inside the `if` block, TypeScript knows that `param` is a string. Inside the `else` block, TypeScript knows that `param` is a number. This process is called type narrowing.

## Conclusion

`any` is dangerous because it removes TypeScript's type checking. It can hide mistakes and cause runtime errors. `unknown` is safer because it forces us to check the type first. Type narrowing helps us safely work with values that can have more than one type.
