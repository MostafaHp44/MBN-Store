const Ajv =require('ajv').default
const ajv =new Ajv()




const schema = {
    type: "object",
    properties: {
      firstname: {type: "string",},
      lastname:  {type: "string",},
      email:     {type: "string", },
      username:  {type: "string"},
      password:  {type: "string"}
    },
    required: ["firstname","lastname","email","username","password"],
  }
  
  




 module.exports = ajv.compile(schema)
