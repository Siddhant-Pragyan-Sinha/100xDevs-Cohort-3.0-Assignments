/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) 
{
  const lowercaseString1=str1.toLowerCase();
  const arr1 = lowercaseString1.split("");
  arr1.sort();
  const sortedstring = arr1.join("");

  const lowercaseString2=str2.toLowerCase();
  const arr2 = lowercaseString2.split("");
  arr2.sort();
  const sortedstring2 = arr2.join("");
  if (sortedstring === sortedstring2) 
  {
    return true;
  } else 
  {
    return false;
  }
}
module.exports = isAnagram;


