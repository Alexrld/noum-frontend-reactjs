import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

let item;

export const itemId = (data) => {
   item = data
}

const ItemDetail = () => {
   return (
      <Fragment>
         <Typography variant="h4" color="initial">{item.name}</Typography>
         <div>
            <img src={item.imgUrl} alt="" />
         </div>
         <div>
            <Typography variant="h5" color="initial">{item.description}</Typography>
         </div>
      </Fragment>
   )
}

export default ItemDetail
