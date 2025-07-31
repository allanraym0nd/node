import { createServer } from "http";
const PORT = process.env.PORT

const users = [ 
    {id:1,name: 'John Doe' },
    {id:2,name: 'Jane Doe' },
    {id:3,name: 'John Doe' }
]

//middleware

const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`)
    next(); // says middleware function is done

}

const jsonMiddleWare = (req,res,next) => {
    res.setHeader('Content-Type', 'spplication/json')

}

//Route Handler for GET /api/users

const getUsersHandlers = (req,res) => {
     res.write(JSON.stringify(users))
     res.end() 
}

// Route handler for GET /api/users/id

const getUsersByIdHandler = (req,res) => {
    const id =req.url.split('/')[3]
    const user = users.find((user) => user.id === parseInt(id)) 

    if(user){
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(user))
            res.end() 
        } else {
        res.statusCode =404
        res.write(JSON.stringify({message: 'User Not Found'}))
        res.end()

        }

}

//Not found handler 
const notFoundHandler = (req,res) => {
    res.write(JSON.stringify({message: 'Route Not Found'}))
        res.end()
}

const createUserHandler = (req,res) => {
    let body =''
    req.on('data', (chunk) => {
        body +=chunk.toString()
    });
    req.on(end, () =>{
        const newUser =JSON.parse(body)
        users.push(newUser)
        res.statusCode =201
        res.write(JSON.stringify(newUser))
        res.end()
    })

}

const server = createServer( (req,res) => {

    logger(req,res, () => {
        jsonMiddleWare(req,res, () => {
            if(req.url === '/api/users' && req.method=== 'GET') {
                getUsersHandlers(req,res)
            } else if (req.url.match(/\/api\/users\/([0-9]+)/)&& req.method === 'GET') {
                getUsersByIdHandler(req,res);

        } else if (req.url === '/api/users' && req.method=== 'POST'){
            createUserHandler(req,res)
        }
        else {
            notFoundHandler(req,res)
        }
        })
    });
})

server.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}` )
    
})