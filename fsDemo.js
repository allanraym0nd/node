import fs from 'fs'

 // readFile() - callback
 fs.readFile('./text/txt', 'utf8', (err,data) =>{
    if(err) throw err;
    console.log(data)
     
 }) 

 // readFile() -sychronous version

 const data = fs.readFileSync('./text/txt', 'utf8');
 console.log(data)