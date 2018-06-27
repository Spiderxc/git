function add(sum) {

    const reduce = (sum.reduce((item, num) => {
        return item + num
    }, 0));
    console.log(reduce);
}


add([1, 2, 3, 4]);
