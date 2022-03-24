import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataProducts } from '../../redux/Actions/productActions'
import { Grid } from '@material-ui/core'
import { descriptionPage } from '../Navbar'
import { itemId } from '../Pages/ItemDetail'
import ProductCard from '../Molecules/ProductCard';

const DetailProduct = (item) => {
   descriptionPage();
   itemId(item);
}

const ProductsGrid = () => {

   const dispatch = useDispatch();
   const products = useSelector(store => store.store_products.products)

   useEffect(() => {
      dispatch(getDataProducts())
   }, [dispatch])

   return (
      <Fragment>
         <Grid spacing={0} container>
            {
               products.length === 0 ? 
                  <h3>Cargando ....</h3>
                  :
                  products.map(item => (
                     <div key={item._id} onClick={() => DetailProduct(item)} >
                        <ProductCard
                           productName={item.name}
                           img={item.imgUrl}
                           description={item.description}
                           price={item.price_in_BOB}
                        />
                     </div>
                  ))
            }
         </Grid>
      </Fragment>
   )
}

export default ProductsGrid
