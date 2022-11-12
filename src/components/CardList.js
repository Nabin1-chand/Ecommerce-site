import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CardList = ({title,description,images,rating,price,discountPercentage}) => {
  return (
    <>
    <Card sx={{maxwidth: 300, display:'inline-block',my:9, mx:3, height:'425px'}}>
            <CardMedia
              component="img"
              height="150px"
              width='100%'
              image={images}
              alt="green iguana"
            />
              <CardContent >
                      <p> {title.slice(0,10)}</p>
                      <p>{description.slice(0,32)}</p>
                      <p> Price: {price}</p>
                       <p>Discount:{discountPercentage}</p>
                 </CardContent>
                          <Stack spacing={1} sx={{mx:5}} > 
                        {rating} <Rating name="size-small" defaultValue={2} size="small"  />
                        </Stack> 
           <CardActions>
                <Button size="small" sx={{m:'auto'}}>Add to cart</Button>
           </CardActions>
    </Card>
    </>
  )
}

export default CardList