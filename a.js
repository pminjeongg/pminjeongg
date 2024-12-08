const students = [
    { name: 'ksd', age: 31, math: 85, english: 87 },
    { name: 'kjh', age: 29, math: 95, english: 97 },
    { name: 'csh', age: 27, math: 76, english: 80 },
    { name: 'mattue', age: 40, math: 56, english: 65 },
    { name: 'kelly', age: 33, math: 49, english: 100 },
];

const filteredStudents = students.filter(function(s) {
    return s.age >= 21 && s.age <= 30;  // 21~30세 학생 필터링
});

const totalScore = filteredStudents.map(function(student) {
    return student.math + student.english;  // 각 학생의 수학과 영어 점수 합산
});

const totalSum = totalScore.reduce(function(prev, curr, index, array) {
    return prev + (curr / array.length);  // 합계를 구하고, 학생 수로 나누어 평균 계산
}, 0);

const between21to30StudentAvg = totalSum / 2;  // 최종 평균 계산
console.log(between21to30StudentAvg);
