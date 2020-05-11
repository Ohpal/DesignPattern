const numbers = [2, 6, 7, 1, 5];

// const even = numbers.filter(function (x) {
//     return x%2 === 0;
// });

// 위 함수를 아래처럼 간결하게함 ES6
// 암시적으로 return 적용
// const even = numbers.filter(x => x % 2 === 0);
//
// console.log(even)

const even = numbers.filter(x => {
    if(x%2 === 0) {
        console.log(x + ' is even!');
        return true;
    }
})