const birthYear = [1975, 1997, 2002, 1995, 1985];

// forEach()를 사용하여 나이 계산
const ages = [];
birthYear.forEach(function(year) {
    ages.push(2023 - year); 

console.log(ages);
