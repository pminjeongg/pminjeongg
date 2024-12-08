const studentList = [
    { name: 'ksd', age: 31, math: 85, science: 75 },
    { name: 'kih', age: 31, math: 95, science: 83 },
    { name: 'pch', age: 35, math: 76, science: 98 },
];

// forEach()를 사용하여 각 학생의 이름과 합산된 점수 출력
studentList.forEach(student => {
    console.log(`${student.name} total: ${student.math + student.science}`);
});
