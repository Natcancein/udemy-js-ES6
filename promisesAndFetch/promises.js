//creando un promise

promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },3000)
})

promise
    .then(()=>console.log('finally finished!'))
    .then(()=>console.log('I was also ran!!'))
    .catch(()=>console.log('uh oh!'))
//promise.catch();