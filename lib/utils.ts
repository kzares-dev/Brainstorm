import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomElements(arr: string[]): string[] {
  const randomElements: string[] = [];

  // Get two random unique indices
  const index1 = Math.floor(Math.random() * arr.length);
  let index2 = Math.floor(Math.random() * arr.length);
  while (index2 === index1) {
      index2 = Math.floor(Math.random() * arr.length);
  }

  // Add the elements corresponding to the random indices to the new array
  randomElements.push(arr[index1]);
  randomElements.push(arr[index2]);

  return randomElements;
}
