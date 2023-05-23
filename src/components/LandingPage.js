import React from 'react';
import { Box, Container, Typography, Avatar, Grid} from '@mui/material';
import './background.css';
import AddProductButton from './AddProductButton';
import Paper from '@mui/material/Paper';
import GetAllProductsButton from "./GetAllProductsButton";
import FindProductsByNameButton from "./FindProductsByNameButton";
import FindProductsByPlaceButton from "./FindProductsByPlaceButton";
import FindProductsByWarrantyButton from "./FindProductsByWarrantyButton";

const Background = () => {
    return (
        <div className="background">
            {[...Array(20)].map((_, index) => (
                <span key={index}></span>
            ))}
        </div>
    );
};


const LandingPage = () => {

    return (
        <Box>
            <Background/>
            <Paper elevation={5} sx={{ p: 1 }} className = "title">
             <Box
                sx={{
                    backgroundColor: '#f2f2f2',
                    py: 8,
                }}
            >

                <Container>
                    <Typography variant="h2" component="h1" className="title">
                        Welcome to our Amazing Landing Page!
                    </Typography>
                </Container>
            </Box>
            <Box py={8}>
                <Container>
                    <Box display="flex" justifyContent="center">
                        <AddProductButton />
                        <GetAllProductsButton/>
                        <FindProductsByNameButton/>
                        <FindProductsByPlaceButton/>
                        <FindProductsByWarrantyButton/>
                    </Box>
                </Container>
            </Box>
            </Paper>


            <Box py={8}>
                <Container>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Meet the People Behind This
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item>
                            <Avatar
                                alt="Person 1"
                                src="/path/to/person1.jpg"
                                sx={{ width: 200, height: 200 }}
                            />
                        </Grid>
                        <Grid item>
                            <Avatar
                                alt="Person 2"
                                src="/path/to/person2.jpg"
                                sx={{ width: 200, height: 200 }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    );
};

export default LandingPage;
