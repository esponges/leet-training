/* 1487. Making File Names Unique
Medium
Topics
Companies
Hint
Given an array of strings names of size n. You will create n folders in your file system such that, at the ith minute, you will create a folder with the name names[i].

Since two files cannot have the same name, if you enter a folder name that was previously used, the system will have a suffix addition to its name in the form of (k), where, k is the smallest positive integer such that the obtained name remains unique.

Return an array of strings of length n where ans[i] is the actual name the system will assign to the ith folder when you create it.

 

Example 1:

Input: names = ["pes","fifa","gta","pes(2019)"]
Output: ["pes","fifa","gta","pes(2019)"]
Explanation: Let's see how the file system creates folder names:
"pes" --> not assigned before, remains "pes"
"fifa" --> not assigned before, remains "fifa"
"gta" --> not assigned before, remains "gta"
"pes(2019)" --> not assigned before, remains "pes(2019)"
Example 2:

Input: names = ["gta","gta(1)","gta","avalon"]
Output: ["gta","gta(1)","gta(2)","avalon"]
Explanation: Let's see how the file system creates folder names:
"gta" --> not assigned before, remains "gta"
"gta(1)" --> not assigned before, remains "gta(1)"
"gta" --> the name is reserved, system adds (k), since "gta(1)" is also reserved, systems put k = 2. it becomes "gta(2)"
"avalon" --> not assigned before, remains "avalon"
Example 3:

Input: names = ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"]
Output: ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
Explanation: When the last folder is created, the smallest positive valid k is 4, and it becomes "onepiece(4)".
 

Constraints:

1 <= names.length <= 5 * 104
1 <= names[i].length <= 20
names[i] consists of lowercase English letters, digits, and/or round brackets.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
33.4K
Submissions
90.4K
Acceptance Rate
37.0%

https://leetcode.com/problems/making-file-names-unique/
*/

function parseFileName(n) {
  let version = '';
  let name = '';

  // no version at all
  if (n[n.length - 1] !== ')' || n.length === 1) return [n, 0];

  for (let i = 0; i < n.length; i++) {
    const actual = n[i];
    // b
    if (actual === '(') {
      // pseudo versions like a(b)b
      // restart version and add fake version to name
      if (version.length > 0) {
        // a(1)b
        name += version;

        version = actual;
      } else {
        // start version candidate
        version += actual;
      }
    } else if (version.length > 0 && version[version.length - 1] !== ')') {
      version += actual;
      continue;
    }

    if (version.length === 0 || version[version.length - 1] === ')') {
      if (version[version.length - 1] === ')') {
        name += version + actual;
        version = '';
      } else {
        name += actual;
      }
    }

    // cases ab(aaa( <- never closes version in the last string el so there's no version at all
    if (
      version.length > 0 &&
      version[version.length - 1] !== ')' &&
      i + 1 === name.length
    ) {
      name += version;
      version = '';
    }
  }

  return [name, parseInt(version.slice(0 + 1, version.length - 1))];
}

/**
 * @param {string[]} names
 * @returns {string[]}
 */
function getFolderNames(names) {
  const mem = {};
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    const actual = names[i];
    const [name, version] = parseFileName(actual);
    if (name in mem === false) {
      mem[name] = 0;
      newNames.push(actual);
    } else if (name in mem && !!version && version !== mem[name] + 1 && version > mem[name]) {
      newNames.push(actual);
    } else {
      mem[name]++;
      newNames.push(name + '(' + mem[name] + ')');
    }
  }

  return newNames;
}

const cases = [
  ['pes', 'fifa', 'gta', 'pes(2019)'],
  // // edge cases
  ['pes(1)a(2)', 'a(', 'a'],
  ['gta', 'gta(1)', 'gta', 'avalon'],
  ['onepiece', 'onepiece(1)', 'onepiece(2)', 'onepiece(3)', 'onepiece'],
];

cases.forEach((c) => {
  console.log(getFolderNames(c));
});
