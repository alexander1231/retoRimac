const {crear} = require('./crearRegistro');
jest.useFakeTimers()

test('test create registro', () => {
    jest.useFakeTimers()
    parm = {
        version: '2.0',
        routeKey: 'POST /registros',
        rawPath: '/registros',
        rawQueryString: '',
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'cache-control': 'no-cache',
          'content-length': '1044',
          'content-type': 'application/json',
          host: '7o3ax5jd7d.execute-api.us-east-1.amazonaws.com',
          'postman-token': 'e44a2862-0d6a-4c30-b72c-364acdef1dc1',
          'user-agent': 'PostmanRuntime/7.31.3',
          'x-amzn-trace-id': 'Root=1-64d5048d-6afab74154707bbd26b4bf82',
          'x-forwarded-for': '38.25.18.44',
          'x-forwarded-port': '443',
          'x-forwarded-proto': 'https'
        },
        requestContext: {
          accountId: '060233393602',
          apiId: '7o3ax5jd7d',
          domainName: '7o3ax5jd7d.execute-api.us-east-1.amazonaws.com',
          domainPrefix: '7o3ax5jd7d',
          http: {
            method: 'POST',
            path: '/registros',
            protocol: 'HTTP/1.1',
            sourceIp: '38.25.18.44',
            userAgent: 'PostmanRuntime/7.31.3'
          },
          requestId: 'Jc2mIgboIAMEJWw=',
          routeKey: 'POST /registros',
          stage: '$default',
          time: '10/Aug/2023:15:38:53 +0000',
          timeEpoch: 1691681933359
        },
        body: '{\n' +
          '    "title": "algoooo",\n' +
          '    "description": "sssisiisisis",\n' +
          '        "name": "Luke Skywalker",\n' +
          '    "height": "172",\n' +
          '    "mass": "77",\n' +
          '    "hair_color": "blond",\n' +
          '    "skin_color": "fair",\n' +
          '    "eye_color": "blue",\n' +
          '    "birth_year": "19BBY",\n' +
          '    "gender": "male",\n' +
          '    "homeworld": "https://swapi.py4e.com/api/planets/1/",\n' +
          '    "films": [\n' +
          '        "https://swapi.py4e.com/api/films/1/",\n' +
          '        "https://swapi.py4e.com/api/films/2/",\n' +
          '        "https://swapi.py4e.com/api/films/3/",\n' +
          '        "https://swapi.py4e.com/api/films/6/",\n' +
          '        "https://swapi.py4e.com/api/films/7/"\n' +
          '    ],\n' +
          '    "species": [\n' +
          '        "https://swapi.py4e.com/api/species/1/"\n' +
          '    ],\n' +
          '    "vehicles": [\n' +
          '        "https://swapi.py4e.com/api/vehicles/14/",\n' +
          '        "https://swapi.py4e.com/api/vehicles/30/"\n' +
          '    ],\n' +
          '    "starships": [\n' +
          '        "https://swapi.py4e.com/api/starships/12/",\n' +
          '        "https://swapi.py4e.com/api/starships/22/"\n' +
          '    ],\n' +
          '    "created": "2014-12-09T13:50:51.644000Z",\n' +
          '    "edited": "2014-12-20T21:17:56.891000Z",\n' +
          '    "url": "https://swapi.py4e.com/api/people/1/"\n' +
          '}',
        isBase64Encoded: false
      }

    response = crear(parm);
    console.log("sdada", response)
  expect(response).toBe(response);
});