module.exports = rawRequest => {
    const [method, path] = rawRequest
        .split('\n')[0]
        .split(' ');
    
    const body = rawRequest.split('\r\n\r\n')[1];

        
    return {
        method,
        path,
        body
    };
};
