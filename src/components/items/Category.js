import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <>
    <Dropdown>
             <Dropdown.Toggle variant="outline" id="dropdown-basic">
                Categories
            </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item ><Link to ="/smartphones">smartphones</Link></Dropdown.Item>
                <Dropdown.Item ><Link to ="/laptops">laptops</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-3">fragrances</Dropdown.Item>
                <Dropdown.Item href="#/action-3">skincare</Dropdown.Item>
                <Dropdown.Item href="#/action-3">groceries</Dropdown.Item>
                <Dropdown.Item href="#/action-3">home-decoration</Dropdown.Item>
                

                </Dropdown.Menu>
</Dropdown>

</>
  )
}

export default Category