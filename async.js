const myLoader = () =>{
    return new Promise((resolve , reject) =>{
        const success = Math.random();
        if(success <= 0.5){
            resolve(success);
        }
        else{
            reject(success);
        }
      }
   )
}

myLoader()
.then(data => console.log("resolved value",data))
.catch(err => console.log("error",err))