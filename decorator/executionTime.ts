export function measureExecutionTime(
  _target: any,
  propertyName: string,
  descriptor: PropertyDescriptor,
) {
  console.log({
    target: _target,
    propertyName,
    descriptor,
  });

  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    console.log(`Start execution of ${propertyName} at: ${start}ms`);

    const result = originalMethod.apply(this, args);

    const end = performance.now();
    console.log(`End execution of ${propertyName} at: ${end}ms`);
    console.log(`Execution time of ${propertyName}: ${end - start}ms`);

    return result;
  };

  return descriptor;
}
