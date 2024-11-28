function getTodos(url)
{
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest(); // state: 0
        request.open('GET',url);// state: 1
        request.send(); // state: 2



        request.addEventListener('readystatechange',()=>{
            if(request.readyState==4 && request.status==200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            }
            else if(request.readyState == 4) {
                reject(request.status);
            }
        });
    });
}

getTodos('creating.json').then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})