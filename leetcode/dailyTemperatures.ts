/**
 * @param {Array<number>} temperatures: array of integers temperatures represents the daily temperatures,
 * @return {number[]} an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
 *  If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */

/**
 * @example Input: temperatures = [73,74,75,71,69,72,76,73] => Output: [1,1,4,2,1,1,0,0]
 * @example Input: temperatures = [30,40,50,60] => Output: [1,1,1,0]
 * @example Input: temperatures = [30,60,90] => Output: [1,1,0]
 */

/**
 * @method: algorithms
 * 1. make a stack and push { value = arr[0] and index = 0 } in it
 *    cause we don't have any greater element right now
 * 2. FOR LOOP element in temperatures
 * 3. IF (element > Top element of stack)
 *    THEN LOOP in Stack
 *      IF (element >  top element of stack)
 *        THEN result[stackElement.index] = current index - stackElement.index
 *    ELSE push index and its value of element which you've checking into stack
 */

function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length < 2) return [0];

  const stack: Array<{ value: number; index: number }> = [
    {
      value: temperatures[0],
      index: 0,
    },
  ];
  const result = new Array(temperatures.length).fill(0);

  for (let index = 1; index < temperatures.length; index++) {
    const element = temperatures[index];
    const topStackElement = stack[stack.length - 1];

    if (topStackElement && element > topStackElement.value) {
      while (stack.length > 0 && element > stack[stack.length - 1].value) {
        const preElement = stack.pop()!;
        result[preElement.index] = index - preElement.index;
      }
    }

    stack.push({
      index,
      value: element,
    });
  }

  return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
