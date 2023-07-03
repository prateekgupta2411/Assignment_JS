const mathsMarks = 82;
const englishMarks = 70;
const computersMarks = 66;
const scienceMarks = 84;
// Create object to store subject marks and grades
const subjects = {
    Maths: mathsMarks,
    English: englishMarks,
    Computers: computersMarks,
    Science: scienceMarks
};
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
for (const subject in subjects) {
    const marks = subjects[subject];
    const grade = calculateGrade(marks);
    console.log(subject + ' : ' + marks + ' : ' + grade);
}
let highestSubject = '';
let highestMarks = 0;
for (const subject in subjects) {
    const marks = subjects[subject];
    if (marks > highestMarks) {
        highestMarks = marks;
        highestSubject = subject;
    }
}
console.log('Highest marks : ' + highestSubject);

