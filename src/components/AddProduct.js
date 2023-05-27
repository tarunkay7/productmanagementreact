import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AddProduct() {
    const [name, setProductName] = React.useState('');
    const [type, setProductType] = React.useState('');
    const [place, setProductPlace] = React.useState('');
    const [warranty, setProductWarranty] = React.useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const product = { name, type, place, warranty };
        console.log(product);
        fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(() => {
                toast.success('Product added successfully', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
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
    const Background = () => {
        return (
            <div className="background">
                {[...Array(20)].map((_, index) => (
                    <span key={index}></span>
                ))}
            </div>
        );
    };
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >

                <Paper elevation={24} sx={{ p: 2 ,borderRadius:'30px'}} className={"title"}>
                    <h1 style={{ textAlign: 'center' }}>Add Product</h1>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TextField
                                    size="small"
                                    id="productName"
                                    label="Product Name"
                                    variant="outlined"
                                    value={name}
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
                                    value={type}
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
                                    value={place}
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
                                    value={warranty}
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
                <ToastContainer />
            </Box>
            <Background/>
        </Container>
        </ThemeProvider>
    );
}
