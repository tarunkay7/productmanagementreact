import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CoolButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function AddProductButton() {
    return (
        <Link to="/add-product">
            <CoolButton>Add a Product</CoolButton>
        </Link>
    );
}

export default AddProductButton;
