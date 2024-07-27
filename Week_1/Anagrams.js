function findAnagrams(word, wordList) {
  const sortedWord = word.split('').sort().join('');
  const anagrams = [];
  for (let i = 0; i < wordList.length; i++) {
    const currentWord = wordList[i];
    const sortedCurrentWord = currentWord.split('').sort().join('');
    if (sortedWord === sortedCurrentWord) {
      anagrams.push(currentWord);
    }
  }
  return anagrams;
}

const str = prompt();
const wordList = prompt().split(' ');
const res = findAnagrams(str, wordList);
for (let i = 0; i < res.length; i++) {
  console.log(res[i]);
}
