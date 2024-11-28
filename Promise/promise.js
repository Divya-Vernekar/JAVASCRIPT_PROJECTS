let a = parseInt(prompt("Enter a number"));
function getEven(){
    return new Promise((resolve,reject)=>{
        if(a%2==0){
            resolve("Even number");
        }
        else{
            reject("Number is not even");
        }
    })
}
getEven().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

