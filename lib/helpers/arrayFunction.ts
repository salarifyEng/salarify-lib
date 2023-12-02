export function checkForDuplicateValueInArray(array: any[]) {
  const valueOccurence: any[] = [];
  for (let index = 0; index < array.length; index++) {
    for (let x = 0; x < array.length; x++) {
      if (array[index] === array[x]) {
        if (valueOccurence.includes(array[index])) {
          return array[index];
        }
      }
    }
    valueOccurence.push(array[index]);
  }
}
