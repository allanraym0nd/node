// create a server 
import http from 'http' // module included with node js!
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const  PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename, __dirname)

const server = http.createServer(async(req,res) => {

 try {
    if(req.method === 'GET') {
        let filePath;
        if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html' )
            // res.writeHead(200, {'Content-Type': 'text/html'})
            // res.end("<h1>Homepage</h1>")
    } else if(req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html' )
        // res.writeHead(200, {'Content-Type': 'text/html'})
        //     res.end("<h1>About</h1>")
    } else {
        throw new Error('Not Found')
        // res.writeHead(404, {'Content-Type': 'text/html'})
        // res.end("<h1>Not Found</h1>")
    }

    const data = await fs.readFile(filePath)
    res.setHeader('Content-Type', 'text/html')
    res.write(data)
    res.end()

    } else {
        throw new Error('Method not allowed')

    }

 } catch {
    res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end("Server Error")
    

 }
    // res.setHeader('Content-Type', 'text/html')
    //res.statusCode = 404
    // res.write('Hello World')

    // console.log(req.url)
    // console.log(req.method)
    // res.writeHead(500, {'Content-Type': 'application/json'})
    // res.end(JSON.stringify({message: 'Server Error'}))

} )

server.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}` )
    
})