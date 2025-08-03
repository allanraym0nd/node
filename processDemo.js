console.log(process.argv)
console.log(process.argv[3])

//GOING THROUGH DIFFERENT USECASES FOR THE PROCESS OBJECT ? 

//process.env
console.log(process.env.LOGNAME)

//pid
console.log(process.pid)

//cwd
console.log(process.cwd())

//title
console.log(process.title)

//memory usage
console.log(process.memoryUsage())

// uptime - from when u run command to the script executing
console.log(process.uptime())

process.on('exit', (code) =>{
    console.log(`About to exit with code: ${code}`)

})

process.exit(0)


console.log('Hello this is from exit')
