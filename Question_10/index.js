function oddndPair(array){
    return array.sort((a, b) =>{
        if (a % 2 == 0 && b % 2 != 0){
            return -1;
        }

        if (a % 2 != 0 && b % 2 == 0){
            return 1;
        }

        return 0;
    });
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(oddndPair(list))