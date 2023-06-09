exports.swagger = {
    routePrefix: '/doc',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'SMS swagger',
        version: '1.0.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: `localhost:3000`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  };

  exports.cors = {
    origin: '*',
  };