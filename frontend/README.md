## Algoritmo de descanso

```js
const list_rest = [
  {
    time: "2022-07-28T12:34:32.016Z",
    description: "agregar redux igual a neuroid ",
    pomodoro: 4,
    project: "A",
    date: "2022-07-07T10:25:46.992Z",
    id: "e9776a62-72ac-4610-9a68-1e0d10415301",
    status: true,
  },
  {
    time: "2022-07-28T12:34:32.016Z",
    date: "2022-07-07T10:25:46.992Z",
    id: "e9776a62-72ac-4610-9a68-1e0d10415301",
    project: "rest",
  },
  {
    time: "2022-07-12T17:43:57.273Z",
    description: "agregar redux igual a neuroid ",
    pomodoro: 4,
    project: "A",
    date: "2022-07-07T10:25:46.992Z",
    id: "e9776a62-72ac-4610-9a68-1e0d10415301",
    status: true,
  },
];

const lastelement = list_rest[list_rest.length - 1];
console.log(lastelement.project === "rest" ? "lets work" : "lets take a break");
/*
a 
*/
```
