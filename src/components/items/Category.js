import React from 'react'
import { Dropdown } from 'react-bootstrap'
const Category = () => {
  return (
    <>
    <Dropdown>
             <Dropdown.Toggle variant="outline" id="dropdown-basic">
                Categories
            </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">smartphones</Dropdown.Item>
                <Dropdown.Item href="#/action-2">laptops</Dropdown.Item>
                <Dropdown.Item href="#/action-3">fragrances</Dropdown.Item>
                <Dropdown.Item href="#/action-4">skincare</Dropdown.Item>
                <Dropdown.Item href="#/action-5">groceries</Dropdown.Item>
                <Dropdown.Item href="#/action-6">home-decoration</Dropdown.Item>          

                </Dropdown.Menu>
</Dropdown>

</>
  )
}

export default Category