const firstFunction = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happend',error));// to check the error
    
}

//another way to write those fetch


// for adding "async" infront of parameter we need to add "await" infront of them 
const secondFunction = async()=>{
    try{
        const  res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error('error happend')
    }
}


///----2
async function secondFunction2(){
    try{
        const  res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error('error happend')
    }
}