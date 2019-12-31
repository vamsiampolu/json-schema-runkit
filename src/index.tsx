import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  Embed from 'react-runkit';
import personSchema from './schemas/person-schema.json';

const Validator: React.FC = () => {
  const source = ` 
   const jsf = require("json-schema-faker")
   const Ajv = require('ajv');
   const v4 = require('ajv/lib/refs/json-schema-draft-04.json') 
   const ajv = new Ajv({ schemaId: 'auto', allErrors: true });
   ajv.addMetaSchema(v4);

   const schema = ${JSON.stringify(personSchema)};
   const validator = ajv.compile(schema);

   const sample = jsf(schema);
   console.log(sample);

   const data = {};

    if(!validator(data)) {
      console.log(validator.errors) 
    } else {
      console.log('Valid'); 
    }
  `;

  return (<Embed source={source} title="Validator Example" />);
};


const App: React.FC = () => { 
  return (<div>
    <Validator />
  </div>);
};

ReactDOM.render(<App /> , app);
