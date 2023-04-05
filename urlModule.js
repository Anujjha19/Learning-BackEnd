import url from 'url'
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)
/* URL {
    href: 'https://example.org/a/b/c?d=e#fgh',
    origin: 'https://example.org',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'example.org',
    hostname: 'example.org',
    port: '',
    pathname: '/a/b/c',
    search: '?d=e',
    searchParams: URLSearchParams { 'd' => 'e' },
    hash: '#fgh'
    } 
*/
// If we give new URL('https://example.org:8000');  we will get to see port: '8000'

const myURL1 = new URL('https://abc:xyz@example.com');
console.log(myURL1.password); // xyz
console.log(myURL1.username); // abc


/* 
"http"	80
"https"	443 
    Default ports are automatically transformed to the empty string
    (HTTPS protocol's default port is 443)
    myURL.port = '443';
    console.log(myURL.port);
    Prints the empty string

    
        Completely invalid port strings are ignored
        myURL.port = 'abcd';
        console.log(myURL.port);
        Prints 1234

        Leading numbers are treated as a port number
        myURL.port = '5678abcd';
        console.log(myURL.port);
        Prints 5678

*/