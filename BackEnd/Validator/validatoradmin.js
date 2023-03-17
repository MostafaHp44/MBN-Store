const Ajv =require('ajv').default
const ajv =new Ajv()




const schema = {
    type: "object",
    properties: {
      username:  {type: "string"},
      password:  {type: "string"}
    },
    required: ["username","password"]
  }
  
  




 module.exports = ajv.compile(schema)
