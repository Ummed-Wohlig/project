const http=require('http');

const port=4810;

const server=http.createServer();

server.listen(port,()=> {
    console.log(`server is now listening on port ${port}`); 
});