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
  const students = [];

  for (let i = 0; i < student_id.length; i++) {
    const actualId = student_id[i];
    const actualReport = report[i];
    const feedback = actualReport.split(' ');

    let positiveCount = 0;
    let negativeCount = 0;
    feedback.forEach((word) => {
      if (positive_feedback.includes(word)) {
        positiveCount++;
      } else if (negative_feedback.includes(word)) {
        negativeCount++;
      }
    });

    const actualScore = positiveCount * 3 - negativeCount;

    students.push([actualId, actualScore]);
  }

  // a - b -> ascending 1, 2, 3, 4...
  // b - a -> descending 4, 3, 2, 1
  // [1, 4, 2].sort((a, b) => a - b); // 1, 2, 4
  // [1, 4, 2].sort((a, b) => b - a); // 4, 2, 1
  const sorted = students.sort((a, b) => {
    const aId = a[0];
    const bId = b[0];
    const aScore = a[1];
    const bScore = b[1];

    // if id not the same sort the score
    if (aScore === bScore) {
      return aId - bId;
    } else {
      // otherwise get the highest score
      return bScore - aScore;
    }
  });

  return sorted.map((s) => s[0]).slice(0, k);
}

// [[1, 3], [2, 3]];
const cases = [
  // [
  //   ['smart', 'brilliant', 'studious'],
  //   ['not'],
  //   ['this student is studious', 'the student is smart'],
  //   [1, 2],
  //   2, // [1, 2]
  // ],
  // [
  //   ['smart', 'brilliant', 'studious'],
  //   ['not'],
  //   ['this student is not studious', 'the student is smart'],
  //   [1, 2], // student1 = 2 , student2 = 3
  //   2, // [2, 1]
  // ],
  [
    ['fkeofjpc', 'qq', 'iio'], // positive
    ['jdh', 'khj', 'eget', 'rjstbhe', 'yzyoatfyx', 'wlinrrgcm'], // negative
    [
      'rjstbhe eget kctxcoub urrmkhlmi yniqafy fkeofjpc iio yzyoatfyx khj iio', // 7 -- 96537918
      'gpnhgabl qq qq fkeofjpc dflidshdb qq iio khj qq yzyoatfyx', // 16 - 589204657
      'tizpzhlbyb eget z rjstbhe iio jdh jdh iptxh qq rjstbhe',
      'jtlghe wlinrrgcm jnkdbd k iio et rjstbhe iio qq jdh',
      'yp fkeofjpc lkhypcebox rjstbhe ewwykishv egzhne jdh y qq qq', // 7 - 43871615
      'fu ql iio fkeofjpc jdh luspuy yzyoatfyx li qq v',
      'wlinrrgcm iio qq omnc sgkt tzgev iio iio qq qq', // 18 - 239084671
      'd vhg qlj khj wlinrrgcm qq f jp zsmhkjokmb rjstbhe',
    ],
    [
      96537918, 589204657, 765963609, 613766496, 43871615, 189209587, 239084671,
      908938263,
    ],
    3, // [239084671,589204657,43871615]
  ],
];

// todo: improve runtime
cases.forEach((c) => {
  console.log(topStudents(c[0], c[1], c[2], c[3], c[4]));
});
