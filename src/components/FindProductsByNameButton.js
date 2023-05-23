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

function FindProductsByNameButton() {
    return (
        <Link to="/find-product-by-name">
            <CoolButton>Find a product by its name</CoolButton>
        </Link>
    );
}

export default FindProductsByNameButton;
