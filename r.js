function runAfter3Seconds() {
    setTimeout(() => {
        console.log('excute after 3 sec');
    }, 3000);
}

function runAfter1Second() {
    setTimeout(() => {
        console.log('excute after 1 sec');
    }, 1000);
}

console.log('start');
runAfter3Seconds();
runAfter1Second();
console.log('end');
