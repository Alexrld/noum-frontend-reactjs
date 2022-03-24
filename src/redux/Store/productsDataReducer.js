import { GET_DATA_PRODUCTS } from "../Actions/actions"

const InitialData = {
   products: []
}

//El reducer, el unico encargado de modificar los datos en el Store
const productsDataReducer = (state = InitialData, action) => {

   console.log(action)

   switch (action.type) {
      case GET_DATA_PRODUCTS:
         return {
            ...state,
            products: action.payload
         }
      /* case POST_DATA_PRODUCTS:      //TEST   
         return {
            ...state,
            products: action.payload
          } */
      default:
         return state
   }
}

export default productsDataReducer