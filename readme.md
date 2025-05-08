# Type Inference in TypeScript

Type inference is TypeScript’s ability to automatically determine the type of a variable, parameter, or return value, based on how it’s used. Its help to write more cleaner code and help to catch the errors.

---

## Wht type inference helpful?

1.Its help to write more cleaner code.
2.Its helps to determine the type automatically.
3.Its help to catch mistakes.
4.Its help to get more suggestion in modern code base like vscode.

## Example of type inference

```
let message = "Hello, world!";
message = "Hi again!"; // OK cause both type are same
message = 123; // Error: Type 'number' is not assignable to type 'string'

```

---

---

# Union and Intersection types in Typescript

## Union Type

A union type means a value can be any one of several types. We use the | symbol to define it.

### Example of Union Type

```ts
function printId(id: string | number) {
    console.log("Your ID is:", id);
}

printId(101); // OK
printId("A102X"); // OK
```

## Intersection type

An intersection type combines multiple types into one type. The resulting type has all the properties of the combined types. We Use (&) symbol to define it.

### Example of Intersection Type

```ts
type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
    name: "Jihad",
    employeeId: 3002,
};
```

Here type of Staff is combined type of Person and Type of Employee
