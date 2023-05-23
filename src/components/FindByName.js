import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

export default function GetProductDetails() {
    const [productName, setProductName] = useState('');
    const [open, setOpen] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/productsbyname/${productName}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    setProductDetails(null);
                } else {
                    setProductDetails(data);
                    setError(null);
                }
                setOpen(true);
            }
            )

    };

    const resetForm = () => {
        setProductName('');
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    <h1>Enter Product Name</h1>

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
                                <Button variant="contained" color="primary" onClick={handleClick}>
                                    Go
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Product Details</DialogTitle>
                        <DialogContent>
                            {error ? (
                                <DialogContentText>Error: {error}</DialogContentText>
                            ) : (
                                <DialogContentText>
                                    {productDetails ? (
                                        <>
                                            <p>Name: {productDetails.name}</p>
                                            <p>Place: {productDetails.place}</p>
                                            <p>Type: {productDetails.type}</p>
                                            <p>Price: {productDetails.warranty}</p>
                                        </>
                                    ) : (
                                        <p>No product details found.</p>
                                    )}
                                </DialogContentText>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Box>
        </Container>
    );
}
