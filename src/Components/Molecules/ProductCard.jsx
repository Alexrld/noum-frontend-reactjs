import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'


const useStyle = makeStyles ({
   Size:{
      maxWidth: 300
   }
})

const ProductCard = ({ img, productName, description, price }) => {

   const myClasses = useStyle();

   return (
      <Fragment>
         <Card className={myClasses.Size}>
            <CardActionArea>
               <CardMedia
                  component = "img"
                  image = {img}
                  height = "260"
               />
               <CardContent>
                  <Typography variant="h6" color="initial">
                     {productName}
                  </Typography>
                  <Typography variant="body2" color="initial">
                     {description}
                  </Typography>
                  <Typography variant="h6" color="initial">
                     {price} Bs.
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
      </Fragment>
   )
}

ProductCard.propTypes = {
   productName: PropTypes.string,
   img: PropTypes.string,
   description: PropTypes.string,
   price: PropTypes.string
}

ProductCard.defaultProps = {
   productName: 'Sin Titulo',
   img: 'https://lh3.googleusercontent.com/proxy/VGxPK6yDtZ1mYtU7ylY-FtOZ3bA1yAJRfljnoTt_G0L9fu8MzUV9xqiEZ-VFwyZ-rsDG3DMgQ4h-uu135Tfs6fTjlAXSNrw',
   description: 'Sin descripcion',
   price: 'Sin precio'
}

export default ProductCard
