import Hapi from 'hapi';
const server = new Hapi.Server({
	host: 'localhost',
    port: 7000
});

/*
* Get API
*/
server.route({
    method: 'GET',
    path: '/hello',
    handler: ( request, response ) => {
        return ( 'Hello World!' );
    }
});

try {
    await server.start();
}
catch (err) {
	console.error( 'Error was handled!' );
    console.log(err);
}


