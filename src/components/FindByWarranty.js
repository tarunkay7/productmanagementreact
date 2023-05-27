import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function FindByWarranty() {
    const [warranty, setWarranty] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = () => {
        fetch(`http://localhost:8080/productsbywarranty/${warranty}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

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
                    <Background />
                    <Paper elevation={24} sx={{ p: 2 ,borderRadius:'30px'}} className={"title"}>
                        <h1 style={{ textAlign: 'center' }}>Get Product by Warranty</h1>

                        <div style={{ display: 'flex', marginBottom: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                            <input
                                type="text"
                                value={warranty}
                                onChange={(e) => setWarranty(e.target.value)}
                                style={{ marginRight: '1rem' }}
                            />
                            <Button variant="contained" onClick={handleSearch}>
                                Search
                            </Button>
                        </div>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>Product Type</TableCell>
                                        <TableCell>Product Place</TableCell>
                                        <TableCell>Product Warranty</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((product, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>{product.type}</TableCell>
                                            <TableCell>{product.place}</TableCell>
                                            <TableCell>{product.warranty}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <Background />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
