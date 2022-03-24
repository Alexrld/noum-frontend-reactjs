import React from 'react'

const Contact = ({match, location, history}) => {
   return (
      <div>
         <h3>Contactanos!</h3>
         { JSON.stringify(history) }
      </div>
   )
}

export default Contact

//Investigar como utilizar las propiedades de react-route de :
//match, location y history
//En este caso deberia salir en pantalla lo siguiente:
// {"path":"/contact","url":"contact","isExact":true,"params":{}}
