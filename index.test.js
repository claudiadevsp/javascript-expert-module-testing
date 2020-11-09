const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
;
(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/four-items-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
              {
                "age": 35,
                "id": 123,
                "name": "Clau",
                "profession": "JavaScript Developer"                
              },
              {
                "age": 45,
                "id": 322,
                "name": "Zezinho",
                "profession": "Java Senior"                
              },
              {
                "age": 20,
                "id": 244,
                "name": "Joaninha",
                "profession": "Javascript Developer"                
              }            
        ]
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
})()