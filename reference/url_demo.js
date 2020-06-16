const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=21&status=active');

//Serialise URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname (host but does not get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//serialise query
console.log(myUrl.search);

//search params
console.log(myUrl.searchParams);
myUrl.searchParams.append('k','j');
console.log(myUrl.search);

myUrl.searchParams.forEach((value,name)=> console.log(`${name},${value}`));
