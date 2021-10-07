const http=require('http');

const port=4810;

const dbComnection=false;
if(!dbComnection){
process.exit(1);
};

const server=http.createServer((req,res) => {
switch (req.url){
case'/':
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
break;
case'/admin':
res.end('welcome to admin page');
break;
case'/user':
res.end('welcome to user page');
break;
default:
res.end('not found');
};
});
server.listen(port,()=> {
console.log(`server is now listening on port ${port}`); 
});