import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function GetAllProducts() {
    const [products, setProducts] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [orderBy, setOrderBy] = React.useState('');
    const [order, setOrder] = React.useState('asc');

    React.useEffect(() => {
        fetch('http://localhost:8080/allproducts')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const theme = createTheme({
        palette: {
            mode: 'dark', // Set the mode to dark
        },
    });

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrderBy(property);
        setOrder(isAsc ? 'desc' : 'asc');
    };

    const sortedProducts = React.useMemo(() => {
        if (orderBy && order) {
            const sorted = [...products].sort((a, b) => {
                const aValue = a[orderBy];
                const bValue = b[orderBy];
                if (aValue < bValue) return order === 'asc' ? -1 : 1;
                if (aValue > bValue) return order === 'asc' ? 1 : -1;
                return 0;
            });
            return sorted;
        }
        return products;
    }, [products, orderBy, order]);

    const Background = () => {
        return (
            <div className="background">
                {[...Array(20)].map((_, index) => (
                    <span key={index}></span>
                ))}
            </div>
        );
    };

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
                    <Paper elevation={24} sx={{ p: 2, borderRadius: '30px' }} className={"title"}>
                        <h1 style={{ textAlign: 'center' }}>Product List</h1>

                        <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            onClick={() => handleSort('name')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Product Name
                                            {orderBy === 'name' && (
                                                <span>{order === 'asc' ? ' ▲' : ' ▼'}</span>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            onClick={() => handleSort('type')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Product Type
                                            {orderBy === 'type' && (
                                                <span>{order === 'asc' ? ' ▲' : ' ▼'}</span>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            onClick={() => handleSort('place')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Product Place
                                            {orderBy === 'place' && (
                                                <span>{order === 'asc' ? ' ▲' : ' ▼'}</span>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            onClick={() => handleSort('warranty')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Product Warranty
                                            {orderBy === 'warranty' && (
                                                <span>{order === 'asc' ? ' ▲' : ' ▼'}</span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sortedProducts
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((product, index) => (
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

                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={products.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={(event, newPage) => setPage(newPage)}
                            onRowsPerPageChange={(event) => {
                                setRowsPerPage(parseInt(event.target.value, 10));
                                setPage(0);
                            }}
                        />
                    </Paper>
                    <Background />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
