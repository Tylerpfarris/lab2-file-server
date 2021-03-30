module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
    return `HTTP/1.1 ${status}\nAccept-Ranges: bytes\nContent-Length: ${body.length}\nContent-Type: ${contentType}\r\n\r\n${body}`;
};
