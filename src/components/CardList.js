import React from 'react'
import Card from 'react-bootstrap/Card';

const CardList = () => {
  return (
    <>
         <Card style={{ width: '14rem',  }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* https://dummyjson.com/products */}
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Add to cart</Card.Link>
        <Card.Link href="#">Detail</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default CardList