const server = require('http');
const  url = require('url');
const fs = require('fs')

server.createServer (function (req,res) 
{
  
    if(req.url === "/signup" && req.method === "POST")
        {
            let body = " ";
            req.on('data',function(chunk)
                {
                    body += chunk;
                });
            req.on('end',function()
                {    
                 const formData = new URLSearchParams(body);
                 const newUser = {FirstName: formData
.get('Fname'), MiddleName: formData.get('Mname'), LastName: formData.get('Lname'),DateOfBirth: formData.get('DOB'), email: formData.get('Email'), password: formData.get('password')}

                 fs.readFile('users.json','utf8',function (err,data)
                    {
                         if(err)
                            {
                                 console.log(err);
                                 return;
                            }
                         let users = JSON.parse(data);
                         users.push(newUser);
                         fs.writeFile('users.json', JSON.stringify(users, null, 2),function(err)
                            {
                                 if(err)
                                {
                                     console.log(err);
                                     return;
                                }
                         res.writeHead(200, {'Content-type' : 'text/html'})
                          res.end('RECEIVED.') })          
                    })
               });
        }
    else if(req.url ==="/signup" && req.method === "GET")
                { 
                    fs.writeFile(signup.html)
                 res.writeHead(200, {'Content-type' : 'text/html'})
                 res.end('RECIEVED.')
                   
                }       
    else if(req.url === '/login' && req.method === 'POST')
            {
                 let body = " ";
                 req.on('data',function(chunk)
                       {
                          body += chunk;
                       });
                 req.on('end',function ()
                       {
                             res.writeHead(200, {'Content-type':'text/html'})
                             res.write('RECEIVED')
                       });
            }   
    else 
        {
            res.writeHead(404, {'Content-type' : 'text/plain'})
            res.end('THERE IS AN ERROR WITH THIS PAGE.')
        }

    
}).listen(3000)