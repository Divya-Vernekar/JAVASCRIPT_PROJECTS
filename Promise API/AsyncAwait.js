// An Async function will return a Promise


const getData = async () =>{
    const response = await fetch('creating.json');
    const data = await response.json();
    return data;
};
getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})