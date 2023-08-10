const {v4} = require('uuid')
const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-1'})

const crear = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    console.log(event)
    const {
        title,
        description,
        name,
        height, 
        mass, 
        gender, 
        homeworld,
        vehicles,
        url } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();

    const registroNuevo = {
        id,
        "titulo":title,
        "descripcion":description,
        "nombre": name,
        "altura": height,
        "masa": mass,
        "genero": gender,
        "planeta origen": homeworld,
        "vehiculo": vehicles,
        createdAt
    }
    
    console.log(registroNuevo)

    await dynamodb.put({
        TableName: 'RetoRimac',
        Item: registroNuevo,
    }).promise()

    return { 
        status: 200,
        body: JSON.stringify(registroNuevo)
    }
}

module.exports = {
    crear
}