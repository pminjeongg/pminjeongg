const cart = [
    { item: "laptop", price: 1200000, quantity: 1 },
    { item: "mouse", price: 35000, quantity: 2 },
    { item: "keyboard", price: 89000, quantity: 1 },
];

// forEach()를 사용하여 총 가격 계산
let totalPrice = 0;
cart.forEach(function(goods) {
    totalPrice += goods.price * goods.quantity;
});
console.log(`Total price: ${totalPrice}`);

// reduce()로 총 가격 계산
totalPrice = cart.reduce(function(res, goods) {
    return res + (goods.price * goods.quantity);
}, 0);
console.log(`Total price: ${totalPrice}`);

// map()으로 각 상품의 총 가격을 계산하여 객체 배열로 출력
const itemTotals = cart.map(function(goods) {
    return {
        item: goods.item,
        total: goods.price * goods.quantity
    };
});
console.log('price total:', itemTotals);

// map()으로 대문자 배열을 출력
const upperCaseNames = names.map(function(name) {
    return name.toUpperCase();
});
console.log(upperCaseNames);

// map()으로 첫 글자만 대문자로 변환
const capitalStartNames = names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log(capitalStartNames);
