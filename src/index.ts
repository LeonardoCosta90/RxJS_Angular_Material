import { Observable, from } from "rxjs";

let numbers = [1, 5, 10];
let source = from(numbers);
let sourceInstance = new Observable((Subscriber) => {
  for (let n of numbers) {
    if (n > 5) Subscriber.error("Aconteceu um erro esperado");
    Subscriber.next(n);
  }
  Subscriber.complete();
});

class MyObserver {
  next(x: number) {
    console.log(x);
  }
  error(e: Error) {
    console.log(e);
  }
  complete() {
    console.log("Complete");
  }
}

function component() {
  source.subscribe(new MyObserver());
  sourceInstance.subscribe(new MyObserver)
}

component();
