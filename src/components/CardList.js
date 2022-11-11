import React from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const CardList = ({title,description,images,rating}) => {
  const [value, setValue]= useState('')
  return (
    <>
    <Card sx={{maxwidth: 300, display:'inline-block',my:9, mx:3, height:'350px'}}>
      <CardMedia
        component="img"
         height="150px"
         width='100%'
        image={images}
        alt="green iguana"
      />
      <CardContent>
              <Typography gutterBottom variant="h4"  component="div">
                {title.slice(0,10)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {description.slice(0,30)}
              </Typography>
      </CardContent>
            <Stack spacing={1}>
                {rating} <Rating name="size-small" defaultValue={2} size="small" />
          </Stack> 
    <CardActions>
        <Button size="small" sx={{m:'auto'}}>Add to cart</Button>
      </CardActions>
   
    </Card>
    </>
  )
}

export default CardList