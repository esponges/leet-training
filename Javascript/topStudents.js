/* 
You are given two string arrays positive_feedback and negative_feedback, containing the words denoting positive and negative feedback, respectively. Note that no word is both positive and negative.

Initially every student has 0 points. Each positive word in a feedback report increases the points of a student by 3, whereas each negative word decreases the points by 1.

You are given n feedback reports, represented by a 0-indexed string array report and a 0-indexed integer array student_id, where student_id[i] represents the ID of the student who has received the feedback report report[i]. The ID of each student is unique.

Given an integer k, return the top k students after ranking them in non-increasing order by their points. In case more than one student has the same points, the one with the lower ID ranks higher.

 

Example 1:

Input: positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
Output: [1,2]
Explanation: 
Both the students have 1 positive feedback and 3 points but since student 1 has a lower ID he ranks higher.
Example 2:

Input: positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2
Output: [2,1]
Explanation: 
- The student with ID 1 has 1 positive feedback and 1 negative feedback, so he has 3-1=2 points. 
- The student with ID 2 has 1 positive feedback, so he has 3 points. 
Since student 2 has more points, [2,1] is returned. */

/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {string[]} student_id
 * @param {number} k
 */
function topStudents(
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  const students = {};

  for (let i = 0; i < k; i++) {
    const actualId = student_id[i];
    const actualReport = report[i];

    let posCount = 0;
    positive_feedback.forEach(pos => {
      if (actualReport.includes(pos)) {
        posCount++;
      }
    });
    console.log('positive', posCount);

    let negCount = 0;
    negative_feedback.forEach(neg => {
      if (actualReport.includes(neg)) {
        negCount ++;
      }
    });
    console.log('negative', negCount);
    const actualScore = posCount * 3 - negCount;

    students[actualId] = [actualId, actualReport, actualScore];
  }

  // a - b -> ascending 1, 2, 3, 4...
  // b -a -> descending 4, 3, 2, 1 
  const std = Object.values(students);
  const sorted = std.sort((a, b) => {
    const aId = a[0];
    const bId = b[0];
    const aScore = a[2];
    const bScore = b[2];

    // if id not the same sort the score
    if (aId !== bId) {
      return bScore - aScore;   
    } else {
      // otherwise get the smaller Id // 
      return aId - bId;
    }
  });

  console.log('sorted', sorted);

  // console.log(students);

  return sorted.map(s => s[0]).slice(0, k);
}

const cases = [
  // [
  //   ['smart', 'brilliant', 'studious'],
  //   ['not'],
  //   ['this student is studious', 'the student is smart'],
  //   [1, 2],
  //   2,
  // ],
  [
    ['smart', 'brilliant', 'studious'],
    ['not'],
    ['this student is not studious', 'the student is smart'],
    [1, 2],
    2,
  ],
];

cases.forEach((c) => {
  console.log(topStudents(c[0], c[1], c[2], c[3], c[4]));
});
