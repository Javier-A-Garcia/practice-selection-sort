

function selectionSort(arr) {

  // Copy the original array
  let copy = [...arr];

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (copy.length > 0) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let smallestIndex = 0;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < copy[smallestIndex]) smallestIndex = i;
    }
    // Save and remove the value at the min index
    const smallestValue = copy[smallestIndex];
    copy.splice(smallestIndex, 1);
    // Add the min value to the end of the sorted array
    sorted.push(smallestValue);
  }

  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;

  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length){

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let smallestIndex = pointer;
    for (let i = pointer; i < arr.length; i++) {
      if (arr[i] < arr[smallestIndex]) smallestIndex = i;
    }
    // Save the min value
    let min = arr[smallestIndex];
    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = smallestIndex; i >= pointer; i--) {
      arr[i] = arr[i - 1];
    }
    // Put the min value at the divider
    arr[pointer] = min;
    // Increment the divider and repeat
    pointer++;
  }
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
