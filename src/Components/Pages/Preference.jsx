import React, { Fragment } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

//<<<<<<< HEAD:src/Components/Pages/Preference.jsx
import { getDataProducts } from '../../redux/Actions/productActions'//test
//=======
//import {  getDataProducts } from '../redux/actions/product-actions'//test
//>>>>>>> parent of 7396376 (noum-frontend v0.3):src/Components/Preference.jsx


const Preference = () => {

    const dispatch = useDispatch()
    const products = useSelector(store => store.store_products.products)
    console.log(products)

    return (
        <Fragment>
            <Typography variant="h4" color="initial">Mis Preferencias</Typography>
            <Button onClick={() => dispatch(getDataProducts())}>GetData</Button> 
            <ul>
                {
                    products.map(item => (
                        <li key={item._id}>{item.name}</li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatchEvent => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Preference)


