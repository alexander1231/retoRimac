const AWS = require('aws-sdk');
const axios = require('axios').default;

 const getListSwapi = async (url, payload) => axios.get(
    url
 ).then((result) => {
     console.log(result)
     return result.data
 })

const listarRegistro = async (event) => {
    console.log(event)
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {url} = JSON.parse(event.body)

    const result = await dynamodb.scan({
        TableName: 'RetoRimac'
    }).promise()

    const registros = result.Items
    console.log(registros)
    let registroSwapi = await getListSwapi(url, '');
    console.log(registroSwapi)

    return { 
        status: 200,
        body: {
            "dynamo": registros,
            "swapi": registroSwapi
        }
    }

}

module.exports.listarRegistro = listarRegistro;