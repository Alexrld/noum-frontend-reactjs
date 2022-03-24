import React from 'react'
import { connect } from 'react-redux'

const ProducCouter = ({productLength}) => {
   return (
      <div>
         <h2>Hola</h2>
         <label>{`Numero de productos: ${productLength}`}</label>
      </div>
   )
}

//Mapea el estado Global de la App
const mapStateToProps = state => (
   {
      productLength: state.store_products.products.length
   }
)

/* const mapDispatchToProps = () => {

} */

export default connect(mapStateToProps) (ProducCouter)
