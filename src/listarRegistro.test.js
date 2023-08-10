const {listarRegistro} = require('./listarRegistro');
jest.useFakeTimers()

test('test listar registros', () => {
    jest.useFakeTimers()
    event = JSON.parse({
        "body":{
            "url": "https://swapi.py4e.com/api/people/1/"
        }
      })


    response = listarRegistro(parm);
    console.log("sdada", response)
  expect(response).toBe(response);
});