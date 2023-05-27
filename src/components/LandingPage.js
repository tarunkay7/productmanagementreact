import React from 'react';
import { Box, Container, Typography, Button,  Paper,IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const LandingPage = () => {


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
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#f2f2f2"
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                borderRadius={10}
                component={Paper}
                elevation={3}
                bgcolor="white"
            >
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/tarun-kay7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                    className={"title"}
                >
                    <LinkedInIcon />
                </IconButton>
                <Background />
                <Paper elevation={24} sx={{ p: 2 ,borderRadius:'30px'}} className={"title"}>
                <Typography variant="h3" component="h1" gutterBottom className={"title"}>
                    Product Management System
                </Typography>
                </Paper>
                <Paper elevation={24} sx={{ p:4 ,borderRadius:'30px',marginTop:'20px'}} className={"title"}>


                <Container>
                    <Box display="flex" justifyContent="center" mt={4} >
                        <Button variant="contained" color={"secondary"} size="large" component={Link} to={"/add-product"}>
                            Add Product
                        </Button>
                    </Box>
                    <Box display="flex" justifyContent="center" mt={5}>
                        <Button variant="contained" color="secondary" size="large" style={{ marginRight: '10px' }} component={Link} to={"/find-product-by-name"}>
                            Find Products By Name
                        </Button>
                        <Button variant="contained" color="secondary" size="large" component={Link} to={"/find-product-by-type"}>
                            Find Products By Type
                        </Button>
                    </Box>
                    <Box display="flex" justifyContent="center" mt={4}>

                        <Button variant="contained" color="secondary" size="large" style={{ marginRight: '10px' }} component={Link} to={"/find-product-by-place"}  >
                            Find Products By Place
                        </Button>
                        <Button variant="contained" color="secondary" size="large" component={Link} to={"/find-product-by-warranty"}>
                            Find Products By Warranty
                        </Button>
                    </Box>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Button variant="contained" color="secondary" size="large" component={Link} to={"/get-all-products"}>
                            See All Products
                        </Button>
                    </Box>
                </Container>
                </Paper>
            </Box>
        </Box>
        </ThemeProvider>
    );
};

export default LandingPage;
