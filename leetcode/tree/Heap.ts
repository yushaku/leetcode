function heapifyMax(arr: number[]) {
  const n = arr.length;

  // Start from the last non-leaf node and heapify each subtree
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapify(arr: number[], n: number, i: number) {
  let largest = i; // Initialize the largest element as the root
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // If the left child is larger than the root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the root, swap them and recursively heapify the affected sub-tree
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    heapify(arr, n, largest);
  }
}

const arr = [4, 10, 3, 5, 1];
heapifyMax(arr);
console.log(arr); // Output: [10, 5, 3, 4, 1]
