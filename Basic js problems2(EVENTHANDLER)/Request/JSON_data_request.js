function getTodos(callback)
{
    const request = new XMLHttpRequest(); // state: 0
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');// state: 1
    request.send(); // state: 2



    request.addEventListener('readystatechange',()=>{
        if(request.readyState==4 && request.status==200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        }
        else if(request.readyState == 4) {
            callback(request.status,undefined);
        }
    });
    }

getTodos((err,data)=>{
    if(data){
        console.log(data);

    }
    else{
        console.log(err);
    }
}); 