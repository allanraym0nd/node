// import fs, { readFile } from 'fs'
import fs from 'fs/promises';

 // readFile() - callback
//  fs.readFile('./text.txt', 'utf8', (err,data) =>{ // callback
//     if(err) throw err;
//     console.log(data)
     
//  }) 

//  readFile() -sychronous version

//  const data = fs.readFileSync('./text/txt', 'utf8');
//  console.log(data)

// readFile() - promise .then()
// fs.readFile('./text.txt', 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

//  readFile() -asychronous version

const readDoc = async () => {
   try{ 
   const data = await fs.readFile('./text.txt', 'utf8');
   console.log(data)
   } catch(error) {
      console.log(error)

   }
};

//writeFile

const writeFile = async() =>{
   try{
      await fs.writeFile('./text.txt','Hello, im writing to you')
      console.log('File written to')
   } catch (error){
      console.log('Failed to write')
   }

}

const appendFile = async() =>{
   try{
      await fs.appendFile('./text.txt','\nHello, im appending you')
      console.log('File appended to')
   } catch (error){
      console.log('Failed to append')
   }

}

writeFile();
appendFile();
readDoc();