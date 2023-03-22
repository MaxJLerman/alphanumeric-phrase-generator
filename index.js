#!/usr/bin/env node
import fs from 'fs';

// reads the words.txt file
fs.readFile('./assets/utils/words.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  };

  // converts the file content to an array of strings
  const importedArray = data.split('\n');

  // capitalises the first letter of each string in the array
  const capitalisedArray = importedArray.map(string => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  })

  // sorts the capitalised array alphabetically
  const sortedArray = capitalisedArray.sort();
  
  // chooses three random words from the sorted array and two random numbers
  const chosenWords = [];
  while (chosenWords.length < 3) {
    const randomIndex = Math.floor(Math.random() * sortedArray.length);
    const randomWord = sortedArray[randomIndex].trim();
  
    if (!chosenWords.includes(randomWord)) {
      chosenWords.push(randomWord);
    };
  };
  
  const chosenNumbers = [];
  while (chosenNumbers.length < 2) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!chosenNumbers.includes(randomNumber)) {
      chosenNumbers.push(randomNumber)
    };
  };
  
  // concatenates the chosen words and numbers
  const concatenation = `${chosenWords[0]}-${chosenWords[1]}-${chosenWords[2]}-${chosenNumbers[0]}${chosenNumbers[1]}`;
  
  // outputs the final string
  console.log(concatenation);
});
