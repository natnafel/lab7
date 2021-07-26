function sum(arr) {
    return arr.reduce(function(total, curr) {
        return total + curr;
    }, 0);
}

function multiply(arr) {
    return arr.reduce(function(prod, curr) {
        return prod * curr;
    }, 1);
}

function reverse(str) {
    return str.split('').reduce(function(acc, curr) {
        return curr + acc;
    });
}

function filterLongWords(arr, len) {
    return arr.filter(function(ele) {
        return ele.length > len;
    })
}

console.log("sum([10, 20, 30]) = " + sum([10, 20, 30]));
console.log("multiply([10, 20, 30]) = " + multiply([10, 20, 30]));
console.log("reverse('hello') = " + reverse('hello'));
console.log("filterLongWords(['hi', 'hello', 'world'], 3) = " + filterLongWords(['hi', 'hello', 'world'], 3));