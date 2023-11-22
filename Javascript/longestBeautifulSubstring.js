/* 1839. Longest Substring Of All Vowels in Order
Medium
702
20
Companies
A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
Example 2:

Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
Example 3:

Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.
 

Constraints:

1 <= word.length <= 5 * 105
word consists of characters 'a', 'e', 'i', 'o', and 'u'.
Accepted
27.9K
Submissions
56.9K
Acceptance Rate
49.0% */

const vowels = {
  0: 'a',
  1: 'e',
  2: 'i',
  3: 'o',
  4: 'u',
};

/**
 * @param {string} word
 * @returns {number}
 */
// accepted with 16/5 :'()
function longestBeautifulSubstring(word) {
  // cant have beautiful without length >= 5
  if (word.length < 5) return 0;

  let highestBeautiful = 0;

  let actualVowel = 0;
  let beautifulCandidate = '';
  for (let i = 0; i < word.length; i++) {
    const actual = word[i];

    if (actual === vowels[actualVowel]) {
      beautifulCandidate += actual;
      // move to the next word
    } else if (actual === vowels[actualVowel + 1] && !!beautifulCandidate) {
      actualVowel++;
      beautifulCandidate += actual;
    } else if (
      actual !== vowels[actualVowel] &&
      actual !== vowels[actualVowel + 1]
    ) {
      actualVowel = 0;
      beautifulCandidate = '';

      // edge case: restart candidate right away or the this letter will be lost
      if (actual === vowels[0]) {
        beautifulCandidate += actual;
      }
    }

    // substring completed
    if (actualVowel === 4 && word[i + 1] !== vowels[4]) {
      if (beautifulCandidate.length > highestBeautiful)
        highestBeautiful = beautifulCandidate.length;
      beautifulCandidate = '';
      actualVowel = 0;

      // don't keep iterating if rest of the word can be bigger than actual
      if (word.length - i < highestBeautiful) return highestBeautiful;
    }
  }

  return highestBeautiful;
}

/* try an approach where we don't store the string but only the indexes of it */
/**
 * @param {string} word
 * @returns {number}
 */
// accepted with 54/94 :))))
// why is this solution best? 
// we are not storing the existing string streak
// only the length of it
function longestBeautifulSubstring(word) {
  // cant have beautiful without length >= 5
  if (word.length < 5) return 0;

  let actualVowel = 0;
  let l = 0;
  let r = 0;
  let highest = 0;
  for (let i = 0; i < word.length; i++) {
    const actual = word[i];

    if (actual === vowels[actualVowel]) {
      if (r - l === 0) l = i, r = i + 1;
      else r++;
      // move to the next word
    } else if (actual === vowels[actualVowel + 1] && r - l > 0) {
      actualVowel++;
      r++;
    } else if (
      actual !== vowels[actualVowel] &&
      actual !== vowels[actualVowel + 1]
    ) {
      actualVowel = 0;
      l = i, r = i;

      // edge case: restart candidate right away or the this letter will be lost
      if (actual === vowels[0]) {
        l = i, r = i + 1;
      }
    }

    // substring completed
    if (actualVowel === 4 && word[i + 1] !== vowels[4]) {
      if (r - l > highest) {
        highest = r - l;
      }
      l = i, r = i;
      actualVowel = 0;

      // don't keep iterating if rest of the word can be bigger than actual
      if (word.length - i < highest) return highest;
    }
  }

  return highest;
}

const cases = [
  'aeiaaioaaaaeiiiiouuuooaauuaeiu', // good
  'aeeeiiiioooauuuaeiou',
  'a',
  'auoeioueiaaioeuieuoaieuaoeuoaiaoueioiaeuiuaeouaoie',
  'oaiueoeoieeeeaoiuaoaeoiouaueaiooeuaeuouaiiauoooeaouuooauiaiauiaaeeaeuiaeoaiieoiauueoouuueeaeeeiiiouooiiiaoaoiiaaiuoeouiauooieaeaaieeouoiuieieooaiuoeuiueiuueeuaaoaueioououuioaeueauauiaueuaeaeoaaooiiueeiieieeouueoieaaoaiaeuuiiooeuuoeoaaioeiaioaouiaaaaaaueoeeoiauaeuiuieiuoaauaeauaeoieiaieiuioeoiuiooieiueuoaauooioueeuiuoeoouiieeoaoueouoouoiuuauieaaoooueaiuoeeeuoiueiaaioeaoeaaaoauaioaoioioaeueaaoioaooaooiiaeiaeuuaouoaouaoeiaueuueieuuauuauuouioiiaaaieiauuieaoooaoieuoioiaaeiaueeieeoaaeuaeoaeiuioiuuaaiauauiiioaueoeuiaooieooiouiuaaoueouaeauuuaeieieaioiauaooiioiueuieoiuiouoiiuoeiieeaeaaiuauuueuiuieaieiaieooeueeouueaeaaoieeauiieooaieioeiioeuaooeeeiiaieiiiaeiuueioiuuuaiaaaeueuieaaoiooaueuiuaiaaiaiooaoeeaaaoiaeauuoioieaoieooueueeuoiiaoiaaaouueaieuououiooouaaouiaaeaeoiuiieaeoiauaeueiiooiuiaiuieaaiooaaeeeauoeoieoooeuuooaaeuieuaouaiueaoaooeiiaouiiiaaeeueeoeoeaoeuaeiiueeoueaoiuieooaioaaieoouaeaaeoaeuaeieoeioouioiiiuiauioeeeueieieueeioeiieuaeeuoeuouiuaeaaoouaiioaaooeeeaeoauouueeeeaiiaiaeaoioaaueeuaoouooieaeieeiaaaeeioaoeaiouaaaiaeaeiooaeiaiuuaeaaeeiiouieauaioeeaaouieoaiouoeauaaaeieauoeoiiauaaooauooeoieaoaiioueuoaoaaooueeeuiieoeoiuiaioooaaaueeaoooieieeaieoiauiauoouuaoeueeioeauoaoiieeueeaieuuaououaoeuieiuueaoeieaaaoaauoiaoauuuoaieoauieuioiuaeeeeuuiooioieoeueiuuuaiuouuouooaooaaiiuueioiuoeuauaoeiaooeaaeooieeueeeeuoiueaeaeoiiuieeaaauiieieaiaooeieiaoooueieeuiiaoiuuoueuueaaauauooieuuaoaueuuuaieaieoeaeeaoeaueiuooaeauuiueeoaeieioeeiuiuuooieaiaueoioeuoiaiauiiuoaeoeiuueaiooooiuuuaoiaoaiouuoeoeeaauieaeouuaiaiioeauoioeououuoiioiaooeoeeoioieuuaaeaooeaeiuoiaaaoouaaeaaoiauueuoiieeaaueiiaueeiiuaeooeiueuoaioiaeaaoeeoeauaeiaaiuiaeiiiuoeoaieeuuiaaueaaeaoauoeueooeeuaioaeeouauuiioauiiuoiiiiioioaiuoaiueoouaaoeoeouaaeeieiaiaiiaeiiauieeueaaaeiieuaeiiuioaouaauaiaaiuauuoiioiiiiieoiooaoaoiuaeooiiiuuauuiueieiueeaiiuaaeoeaoaoeoaaeieoieueoieouoiauieaoiiiieooioeeeueeoooeouaoeiuiaaaaueiuuuieieeeoiiooaiuoeaueuioaeeoiiuoiiaaoaueuuiaieuoaoaaauouoaieaooooeiieuuuuiiueauaeaaoaeiuououuuiuueoiaiiuoioeeaueoaioeuoaooeoeooueaiiuuuiaiiuoauuaoeeeieoiiueauaoeaoaeioeoaiaeoueuaaiuaoioeiuaiieeaiiuaaiaiiaoouuaiiueoiuiuaiuueueiuieeiaeooieioieueeeioaeuooiieaoaoaaeeoaiaueuaeaoaaeeeoaiouaeeaauuooieuaoeeeaeaueueuieeeueeiaaeoaouueaiioeauioeoiioiaueioeeeaeeueouaiuaiaeeeuuauiiuuaiooauuaaouoieuouiueueoauuioaoouiuuaaiuiiieaiaoaoouauiauuoueeaiieeeiuoooeuoaauioiieooueiaueaoaouueuoooeaioieaoeiiiaieaoieeaeuiouiiuaiaaaaaaaeooeoueoaoaeiuuauouiaauoaiauuaeaaiiiaeieeooiueuuieeiiiauoiauoeaeuieaaieuuoeoooeaioauoiaaieuuioaeeouoeuueououaauoaaeoiuieoeaiiuueiuiaoieoioiuieooaueieiauieiaauuuiouieaoieoeoouiiaieauaeaoeuaieeiuaauoeeaaoiaauoaieiuouuuoaaeuiioiauueaoeeaeaeoaouieouuoeoeioeaeioaiuoouueiauuaeaeaiuoeaoouoiouaaoaeeuoiieeeiaooeeeouoiiueauoeiueuuaueuieouaouaeiueoiiieeoauoooeaoiaaooiauoioeouuuuuuaaiiioaueaoooaauuiuooaiooaoeaioiuaouuaeooiaiouiuoeiiuiaiiuoooeuuuaeaieeiuiiaeeeaoeueiaauoaiiiooeiaeoaieieueaiooueoueeoaioaouiaaauaoeaioeiaoaiaooiiuooeuaiuaoaouiuoueieeaiooeuaioeiauaioaeoiiuaauaeioouaooioooaeeaueaeoueeaeeiouaeaiauioouueoeueuaauuoaeaaaeiiauueiueieuooaioooaaeueiaiiuiuaieiuaioauaeauuaiioueioaeuooeoeoiueueeuiiooouiauuueeeaaeaeuouiueiueiaaieeaauoaeaeoeueuoeoiuiuuiuueuaioiaaeiioiuooeioieaoioouuaouoaiaeoeiuueauooaaoooeeuuuioeiaouueioeieoauaiauaaeoaiiieauaeioouoiuueiiuaioaeooiooeueueiouuoiaoooioeeeueiaoauiiooeuouiiooaiiiieioueoooioaoueeuaeeiuoeeouaaeauioeuieiaieeiaoueeeaeouauuiaiiauiauiiaooeoaooiuoioiieeaauiaeaioaaeuaeaiueeueeeeiueeaiuiiuoeeueoiuiaieaaiauoiuooeuiuiieiuaooeoaaooaeouoeuooiaauaauiiieiuiuiaaueuuiuuouioiaoeuaeueeieoieeooeouauoaeeueioeiaeaaooieoioooeaiiooiaeeaooaeuaouaiaiaoiuiouiaieaiaaoeeuioaieueoeeiaaoeauioeuiuaouoauooueoiaoeueaaiooouiouoaaiuoeuiiueuaiouoeauuiueaiiaieaoiaaeuuouoeioeiuaaooiiiieuauoiaooaauaouuieiueioueaioaooauiueeueuuooaoeeoaaeeeiuoueeeouueiuaaeeoaiouiiaaiouaeeuioaoiueaaeaeieueaoeiiaauaeeoeuouoaeiiioaiuuueueoaauoeueoeaaaaiaaiiuoaiaeieuuooiooouoiauooeieiiuuooieoaiauieeaiiueuoaaioauuuiieeaaioeiuoauiiiiuaaueoaiiaiaauieaeueooouiaaiouueiioeiueuouaiaauieuaiouiuaeeeauaeieeuoaeaaaoiaaaiaeauaioaaeiauoaiioieeeieeuueuououaiieaiuuauaeuauaaeoeuioaoaieiuieuuuoiuioeaoiauoaueiaeeaoooueoieeuaauaoaieoaueoioeeeuiiuueaauoaiaaoeaauaooeuuauioeaoiaauaiiaoioeoiuuiieiuieeaieiiouaioeaieeiaiuoieooaiaueauoaaiaeueueooooeaoioiooaiuiueauieieeuieaeoaoiieieuuiaaieoeuaouueauiiiouoeoueoaauaiuuieaaaoououaeaiiauiouiauiioaooeueoiiouiaiiouoiiiieoiiaauiueeuuiiuiuaaaaeeeuoaiaiiaeiuauoauaaaeeeaieieuaeaaeeiiueioaeaeeaueaaaioeaeaooeoaeiuaoeuaieaaiuaaueeoooieeooaieuaiiiuiaiaiiueiaoaiiiuaeeaiiaaeuoaeaiiiiaaouaaouaaiiiuueeoaouueuieoaaaiieeooaoooaoouoauuauiaaeuouaaiuuioooiouaiauuoeaeoaiaeouuoeiaouueiieiaueuieouaauaoaoeooeoooaeouaaiaueauioeuaoeeoaooiaeaooioaueooaaeouuueoiueeiioaueuoioioiiuoaoeeuaeioaooiaiuouioaeuoueeeeuuaueoiueoaaiuioiauueoueaiooauiuaioueeoaaoaoooiaioeuoaauoaiuooaeuieuiiieuueieiiuuoueeoeuuoieoaaoaeioaieuuuoiieouiueeouaeioaieeooaueeeeeeuaieuiuiiuiiiuouoooueeuaeueoaooauieaueaeoiaaoeaoaoiauaoioaaeoiuiauoiaaaoeaeieeuiaueueiuouuuaiaaeiaoiueaoeiuooiauoeauueaaeeieuoiooaieiaeeeeouiiioiieoeeuueeioeueeeeoaiioaieuioeuuiioieaooieiieiiieaooeuiaaeuaauuueououooeauiaiuaeiaeueiaoeiaeeuoooououoeoeouiiouoouieoiaoaeiiuoieueouuiioouauaoiaioauuioooaeauiaaoaoaoiiauuuaiueaioaouauouoauioeuiauoeoauuiouooauaeieoioaioieueuoeaaauoueuoeeioiiaeeuiauoiouueeooeoaauaooeaoauaeeioiaiuoeouieiuaeieaieuooioeoouuooeauaoiooeeeiaiueeaeueiuuieioaeoeiaoaaiuaoiauaiueeoaoeeiiaiauioeoaeaoaeiaoeaoioeoeieaauioaeuoeaieaiaeueaoieeeouaueoeoouiuoaouuaoaaaoiueooaoieeoaaueeueouiuoouuoueieioiaeaaaeieauioaoeaoaiieeiooieioeaaoiuoaaaiuoooouaeaueeeooeeoeaaioaaeaeoeuuiuuoiaieoeaeaiaieaeauooeueueioioioooiiuaouauuieoueieuoueooeuauuueuuuoaaiaauieuoeuaoaaaoaooaoaouoeiueeuuoauiaeaueaaeiaiaoieiaiauaioooeaeoeeueiiaieeieuoiaeaeoiaoeaeieeaeuuieoeaoaeeuiaoueieiiaoeieuuooaouuooaoaaoaeeoeauiiuuuueoeoaouioaaiaaioaaaaeioiaaaiiieaeiioiuuuauauieiooiieeuuuaoioiaueeoaiueoeiueeiauueoioooiuieiaoeiuoueuaiooueeeuioiiuioiuaeeaoeuieoueouuaeiieiiueaaaiauueeeieieiouaiueuoaaiiuooaoaoaouuuiuieioiaeauaooieuaaeeiieiieaooaiiuueeuaueiieaeoeooioeeoaooeueuaaaueooueeaueuueaueoouuiooouieiaeeuuuuoiuiiaaiiouoiuieuaueaueiiuoeueeiuiaauioiuieiaoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueouiaoueiioouueuoiiieeeeiouiauoiaieeiauoeouaeoaueaoeuuoeoeoaoeioaueioaaoueuuioaeeeooauoieuoiuooieiaoaauuaieieueioeiioaeaouiieoaiuiooauuuueeouuoooiauiioeouaeoueiuoiieiauioauuoeaeoeeaiuiuouuuoeioaouaieiuoaooioaeeeeaoeaieeoeoeoaoueiuieeeaoeieeeeiiaiaaiiueooaiaeoioeiiuuiueaiioaeieeeiuiiuiueueoeaoeooeeeeaoeueuuueauoeeaioaioauoeuiaaoeouiaeuaouaeoaueoieiaieeieoiaieeiuoaiiouaaiuoeiieeeoaiuuuaoeiiaoaauaoaueuuoeuuiioaeaoooieiuaiueeoeooooueieaaieeiuoaeuaiaaiaueueeooauaaoaiouuooiiuaiaieuaouaoauueaiuouooooauuiuoioaoiuaaoouuuuaiiaaaieiuiaooueiauooaeoiueuieoiuauoieeueaueieuueiuoioeaoueeieouiueeieoeiuaouoooiiuoauaoiaeoaaoaiooooiuoueaeeoieaeuiuieuuuuouiiiaeoieeeaaeauaeueueueoeauueuaoiueauuuouuieuiuiaauaeaaiouaeuauoeeuooeaooouiaueueiouuuaeaieuiuaaoouuioaueueaeuiauaiauaeieuuieioueueueaeaaueaouiuoieeoueaiieioaooioueeiouoeauuieouioooooeoioaeiieuoioaeoiaaeaaioioeeiaaeuoeiuoauueaioeuoeeoeioiuuaeaiueuoiaiuuoaeaouoaeauiooiaaiaiaiiuaiuoeieaouoeuiouuoaeoooiaaiaeuuueaooaieeuiiooaaaueaoeuaeeoeuooeaiiuiaiuaiiuoa',
  'eieuuoeeueauueeoiiueaeuioeiiieioaouoeeoiiauiueiiuieueeeoaeaeoooiuauiaaueieoeeeeioauaouueiioeiaaaaooeaaaeoouoaoioauoaeuiioaiuuiaaaiieiuiuoiaeuuiooeiiuoaauoioeaeieaeeeiouieuaaaaaeoaeiaeeeaoaeooueieaaaeieooouueaueeiaiuoioiioieuoeeoeaaeeaauoaiaoaauaauioaueiaiooeoiiaiauaooiiauaiaoaoeaioeiaeeuueioauoueuaaiiouoeoeoiaeeooaauieoeaiueioiaieouiaeauaeiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuiuaeouiioieouieeiuaeeuoiooioiiaoueioeuaeeoaauoaaeeaaoiuueoeaeoaaeueoueeiiiuiouieaiuoieeoooueiiiaeeuaaieeaaoiuuoeuoauouiieuaeeiueaeeeaaoieaeuiuoeuoaaiueieiouiiiaoueuuiuooeioaeooaeueouiaeuaaiueuoeeiouioiiueiueaaiuoaieuiaoeuoeaeaiuaaoeeuouiiioeeoueuuauoieiaoaeeaeioouoaiieueoauaoeeoeouaiaoaueioiuaooouiueuieuauieeoeaiouoaoeeeueuoeuieooaaaaaiuoououiuuueoioieueuueaueaeuaieueeaieioieuuuueoooueueoiaoiuuiooiauaaiiiiuoaaueeaiiaeaauaooooeaaeuiaaouooauaaaaiieiaeeeeeiauiiuaueieuieaoeeiauiuaueouaeoaaoiuaoiaiouaiaeoiaooieeioiieieioeeioeuioeiooouiiioaiaeeaaieouoaooaiaiueeuieoiuaeuieeiuaoaueiouoieauieiuoooieuiaooeaeaoiueaeeuieaioiuoaeieuaaeouuoiieioeoiaeuiiiuiuaaaoeaaaoiuauaiiuaaaaiieeueeoieuiueuaueiiaioaoaoueiieueoauuueeeeuuueoiuuaiaaeuauuiaeuuaeiaiiioiooeaeiaeoeaeouuaouueeiieaoaeoaueuaoouoioeiaiuiouaueuaiaoeouoeoooioiuioaeeoeaaoioeiioiuoaiiuioiiioeuiiaaaieaoaaeoaeieuiiiuieiieaaioaueoiiiuueeiouuueoiiaeuuaeaaiauaeeieoaioiiuueuaoieieiuiaioeaeuiiaioaieeeaoaieoooiuiaeuuuieeaeeeeuoeueioeiiaaieaiaiiieiouueaouoooueeoiauooeieeoeuoueioauieoeuooiiaiueeouiiuuiaiuuouoaaiuiiiouuuaiiiuiiuouiioaoauiaoeiioaooeuoaauaiiieiuueuueioeaioaaieuuoioeaeeeuauouuiaauuiauuuaiiiooaiaeaeeuioaueeaoiaioiieooueaieoeieoiaouuuuioaieauioeuoauauaaeaoueeiaaoooauoioueaieeaaiuuiieieaaaeoiueeoeoeoaaoioaueeoeoiooeiioiaoeieieaeiaaaoeeuoiueaueoeoaueeiioauuuoaiaeaooaiaaauuieaioeaaoeioouaiauiaaoieiiieeioeeuaiauuaeeooiuuuaeeieaeieoaaiioaoooeaaeaooouaaoeaoiiuaiauooaiuoeauoeiaeaaeueeiaiooaeaoioeuuauaioaiiioioeuuueiuaeoeaiiuaioiueooioeiueaaeueeiauoiaoeooiuaeuoaououiiiauuaaeeuaiuueaaoioueouaooaaiieeeiueieeouoieiuoueeueauauoueaooaoiuouuiauaeoiouaoeaauaaaoaaueoaeaoeuaiiiaueeiiaaoeuaouiaaiauoeeueueiaooeiooaeuooiieioaaeiueuieuoueiaeiiiaaueaaaoauiauaooaeoeouaaoeeoieuioeuooeaeeoioeeoouieiouuooeaioooouoaoeeouueioaeuoeoiioeouoeuiuuaaouaiuaioaiiuiiuuieaoiiieaaeeioeeiuuouioiuoaiuuuouoeauuoauoeiuuoiiuauoaeuieaiaaoaoiieoeeiaoaueuuoiaauioueeiueeaouioiiauoeuaooiueaaeuuiiiooioeiuioaeuuaouieeiuooaeeaeiiiaiieoaeeoaoioieiuiaeiaiiiouoeoeaeuiuaoeuiiouoaeioiouioiaouiaoooioooieiieaeeaiaaiuoaaaaeoauioiouaaaoeiiueaooeieieueaoiuiaiueaaauiuiuooeaaaaeoiooeueiaaueeaeaoouoioouoeouaoaooauieeuuoeooaauuoaueoaaauiiueoaauiiaaiaoaiuoeeooiiauaueeuoiuooaiueeeauaoeeaiieeoeaaaoueaeiouaouioauoouaeoiauaauouuuaoeuaaeueeeouoaouueaooiueeauuiiioeaeeieoaoeaooauaiiiueoaiauoueeiooueeiooiaouauiaoooioaaaaoeiaieoeaeaeeoaoaeeaeeuuuuioouaioeouuiuouuoeoaeeaaaeeaoooiaeieiuiuauouuieuiauooioiuoeeoieooeeouoiaaoueoaaiaiuauaauouiauiuoiioiiiauiuooiaooeeiuoeaoaeouuauueiueiuoioeiiaiioueeuiiiueoaieuueaoaiioeeuuauuuiuaueooeaaeeioieuieuuieaeoeoaaoeaoaoueiiaueuouiuuaauiiiuuoaaouaeioioooieoaioeouiiuoeaiaiiueoauaaiaeaaeouaeoiouieuaiaeuieuuioueiueueuaooiiouaioeuooeuaaoooieuauuaueiieoeiouaoaeuiaoaooeoeiaoieeaiiuaeaeauoaieeoeoeoauiauiaooouioaoiueuiueaueaaaoaouoeauueaieeuaiueiuauiueaoieoaioouiaaeuiiiueuaiuaiaeiaouooeioaoeaoiaieaeiuouaieeieoaiaaoioaeau',
];

cases.forEach((c) => {
  console.log(longestBeautifulSubstring(c));
});
