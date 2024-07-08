import { measureExecutionTime } from "@/decorator";

class Calculator {
  @measureExecutionTime
  heavyComputation(n: number): number {
    let result = 0;
    for (let i = 0; i < n; i++) {
      result += i;
    }
    return result;
  }
}

const calculator = new Calculator();
calculator.heavyComputation(1000000000);
