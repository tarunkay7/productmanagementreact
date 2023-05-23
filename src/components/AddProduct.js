import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function AddProduct() {
    const [productName, setProductName] = React.useState('');
    const [productType, setProductType] = React.useState('');
    const [productPlace, setProductPlace] = React.useState('');
    const [productWarranty, setProductWarranty] = React.useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const product = { productName, productType, productPlace, productWarranty };
        console.log(product);
        fetch('http://localhost:8080/api/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(() => {
                console.log('new product added');
                resetForm();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const resetForm = () => {
        setProductName('');
        setProductType('');
        setProductPlace('');
        setProductWarranty('');
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Paper elevation={24} sx={{ p: 2 }}>
                    <h1>Add Product</h1>


                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TextField
                                    size="small"
                                    id="productName"
                                    label="Product Name"
                                    variant="outlined"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </Box>
                        </Grid>



                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                size="small"
                                id="productType"
                                label="Product Type"
                                variant="outlined"
                                value = {productType}
                                onChange={(e) => setProductType(e.target.value)}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                size="small"
                                id="productPlace"
                                label="Product Place"
                                variant="outlined"
                                value={productPlace}
                                onChange={(e) => setProductPlace(e.target.value)}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                size="small"
                                id="productWarranty"
                                label="Product Warranty"
                                variant="outlined"
                                value={productWarranty}
                                onChange={(e) => setProductWarranty(e.target.value)}
                            />
                        </Box>
                    </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary" onClick={handleClick}>
                                    Add
                                </Button>
                            </Box>
                        </Grid>


                    </Grid>



                </Paper>
            </Box>
        </Container>
    );
}
