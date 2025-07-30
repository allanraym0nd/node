// create a server 
import http from 'http' // module included with node js!
const  PORT = 8000

const server = http.createServer((req,res) => {
    // res.setHeader('Content-Type', 'text/html')
    //res.statusCode = 404
    // res.write('Hello World')
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: 'Server Error'}))

} )

server.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}` )
    
})