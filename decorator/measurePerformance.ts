export function measurePerformance(
  _target: any,
  _propertyName: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const startMemory = process.memoryUsage();
    const startCpu = process.cpuUsage();

    const startTime = process.hrtime.bigint(); // High-resolution time

    const result = originalMethod.apply(this, args);

    const endTime = process.hrtime.bigint();
    const endMemory = process.memoryUsage();
    const endCpu = process.cpuUsage();

    const memoryUsage = {
      rss: endMemory.rss - startMemory.rss,
      heapTotal: endMemory.heapTotal - startMemory.heapTotal,
      heapUsed: endMemory.heapUsed - startMemory.heapUsed,
      external: endMemory.external - startMemory.external,
    };

    const cpuUsage = {
      user: endCpu.user - startCpu.user,
      system: endCpu.system - startCpu.system,
    };

    const executionTime = (endTime - startTime) / 1000000n; // Convert to milliseconds

    console.log("Memory Usage:", memoryUsage);
    console.log("CPU Usage:", cpuUsage);
    console.log(`Execution Time: ${executionTime}ms`);

    return result;
  };

  return descriptor;
}
