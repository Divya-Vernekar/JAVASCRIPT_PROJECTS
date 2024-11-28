function cal_sum(arr) {
    let sum=0;

    for(let i=0; i<arr.length;i++){ //loop
        sum = sum + arr[i];
        
    }
    console.log(sum);
}

let arr1 = [1, 2, 3, 4, 5];
cal_sum(arr1);

let arr2 = [1,1,1,1,1];
cal_sum(arr2);

