import {React, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    mainSize: {
        maxWidth: 340,
    },
});

const Products = () => {

    const useclass = useStyles();

    return (
        <Fragment>
            <Card className={useclass.mainSize}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/pc/new-matebook-x-pro-2020/matebookxpronew-0318.png"
                        height="220"
                    />
                    <CardContent>
                        <Typography variant="h6">
                            HUAWEI
                            MateBook X Pro 2020
                        </Typography>
                        <Typography variant="body2">
                            Con una increíble relación pantalla-cuerpo de 87% y biseles ultradelgados que se han reducido a sólo 5.3 mm, es
                            perfecta para ver películas, ser creativo o realizar algún trabajo.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="primary" variant="contained">Comprar</Button>
                </CardActions>
            </Card>
            <Card className={useclass.mainSize}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://i.blogs.es/e1fe2b/apple-macbook-pro-16/1366_2000.jpg"
                        height="220"
                    />
                    <CardContent>
                        <Typography variant="h6">
                            MacBook Pro de 16
                        </Typography>
                        <Typography variant="body2">
                            La MacBook Pro de 16 pulgadas es sin duda la notebook más poderosa de Apple, pensada para
                            quienes están dispuestos a desafiar los límites y cambiar el mundo.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="primary" variant="contained">Comprar</Button>
                </CardActions>
            </Card>
        </Fragment>
    )
}

export default Products