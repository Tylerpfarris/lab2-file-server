const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

    it('it returns "hi" when / is the path ', async() => {
        const res = await request(app)
            .get('/');
        
        expect(res.text).toEqual('hi');
    });
    

    it('it posts "sup" when /echo is the path ', async() => {
        const res = await request(app)
            .post('/echo')
            .send('sup');
        
        expect(res.text).toEqual('sup');
    });

    it('it returns "<h1>red</h1>" when /red is the path ', async() => {
        const res = await request(app)
            .get('/red');
        
        expect(res.text).toEqual('<h1>red</h1>');
    });

    it('it returns "<h1>green</h1>" when /green is the path ', async() => {
        const res = await request(app)
            .get('/green');
        
        expect(res.text).toEqual('<h1>green</h1>');
    });

    it('it returns "<h1>blue</h1>" when /blue is the path ', async() => {
        const res = await request(app)
            .get('/blue');
        
        expect(res.text).toEqual('<h1>blue</h1>');
    });
    
});



