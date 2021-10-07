const http=require('http');

const port=4810;

const server=http.createServer((req,res) => {
res.end(`
<html>
<head>
<title>First Node.js application</title>
</head>
<body>
<h1>First Node.js application</h1>
</body> 
</html>
`);
});



server.listen(port,()=> {
    console.log(`server is now listening on port ${port}`); 
});