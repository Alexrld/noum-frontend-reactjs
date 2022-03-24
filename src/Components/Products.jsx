import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataProducts } from '../redux/actions/product-actions'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    mainSize: {
        maxWidth: 340
    }
})  

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(store => store.store_products.products)
    const useclass = useStyle();

    useEffect(() => {
        dispatch(getDataProducts())
    }, [dispatch])

    return (
        <div>
            <ul>
                {
                    products.map(item => (
                        <div key={item._id}>
                            <Card className={useclass.mainSize}>
                                <CardActionArea>                              
                                    <CardMedia
                                        component="img"
                                        image={item.imgUrl}
                                        //image='https://firebasestorage.googleapis.com/v0/b/noum-storage.appspot.com/o/Products%2F5fd13e63e8ae9b0009b9df90?alt=media&token=a4932f52-d10b-444d-af2f-40e5f84f1a39'
                                        height="220"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="initial">
                                            {item.description}
                                        </Typography>
                                        <Typography variant="body2" color="initial">
                                            Precio: {item.price_in_BOB} Bs.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button color="primary" variant="contained">Comprar</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Products
