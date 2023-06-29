function calculateGrade(marks) {
    if (marks >= 80) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 40) {
        return 'C';
    } else {
        return 'D';
    }
}
function findSubjectWithHighestMarks(subjects) {
    var highestMarks = 0;
    var highestSubject = '';
    for (var subject in subjects) {
        if (subjects[subject] > highestMarks) {
        highestMarks = subjects[subject];
        highestSubject = subject;
        }
    }
    return highestSubject;
}
  // Test case
var maths = 82;
var english = 70;
var computers = 66;
var science = 84;
var marks = {
    Maths: maths,
    English: english,
    Computers: computers,
    Science: science
    };
for (var subject in marks) {
    var grade = calculateGrade(marks[subject]);
    console.log(subject + ' : ' + marks[subject] + ' : ' + grade);
    }
var highestSubject = findSubjectWithHighestMarks(marks);
console.log('Highest marks: ' + highestSubject);