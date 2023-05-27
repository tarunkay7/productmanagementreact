# React Frontend for the Product Management Webapp


### App.js


```javascript
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/get-all-products" element={<GetAllProducts/>} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/find-product-by-name" element={<FindByName />} />
                <Route path="/find-product-by-place" element={<FindByPlace />} />
                <Route path="/find-product-by-type" element={<FindByType />} />
                <Route path="/find-product-by-warranty" element={<FindByWarranty/>} />
            </Routes>
        </Router>
    );
}
```

The `App` function component represents the main component of the application. It defines the routing configuration using the `Router`, `Routes`, and `Route` components provided by `react-router-dom`.

- The `<Router>` component wraps the entire application and provides the routing context.
- The `<Routes>` component is used to define multiple routes within the application.
- Each `<Route>` component represents a specific route and maps it to a corresponding component.

The routes defined in the code are as follows:

- The root path `'/'` is mapped to the `LandingPage` component.
- The path `'/get-all-products'` is mapped to the `GetAllProducts` component.
- The path `'/add-product'` is mapped to the `AddProduct` component.
- The path `'/find-product-by-name'` is mapped to the `FindByName` component.
- The path `'/find-product-by-place'` is mapped to the `FindByPlace` component.
- The path `'/find-product-by-type'` is mapped to the `FindByType` component.
- The path `'/find-product-by-warranty'` is mapped to the `FindByWarranty` component.

### AddProduct


```javascript
export default function AddProduct() {
    const [name, setProductName] = React.useState('');
    const [type, setProductType] = React.useState('');
    const [place, setProductPlace] = React.useState('');
    const [warranty, setProductWarranty] = React.useState('');
```

The `AddProduct` function component represents the main component for adding a new product. It uses React hooks to manage the state of the form inputs (`name`, `type`, `place`, `warranty`) and their corresponding setter functions.

```javascript
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
```

The `handleClick` function is triggered when the user clicks the "Add" button. It prevents the default form submission behavior, constructs a `product` object using the form input values, and sends a POST request to the backend server at `http://localhost:8080/products` to add the product. Upon successful completion, a success toast notification is displayed, and the form is reset.

```javascript
    const resetForm = () => {
        setProductName('');
        setProductType('');
        setProductPlace('');
        setProductWarranty('');
    }
```

The `resetForm` function is responsible for resetting the form inputs to their initial empty state.

```javascript
    const Background = () => {
        return (
            <div className="background">
                {[...Array(20)].map((_, index) => (
                    <span key={index}></span>
                ))}
            </div>
        );
    };
```

The `Background` component is a functional component that renders a background effect. It generates multiple `<span>` elements to create a visual effect.

```javascript
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
```

The `theme` object is created using the `createTheme` function from Material-UI. It sets the application's color palette to a dark mode.

```javascript
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
                    <Paper elevation={24} sx={{ p: 2 ,borderRadius

:'30px'}} className={"title"}>
                        <h1 style={{ textAlign: 'center' }}>Add Product</h1>
                        {/* Form inputs */}
                        <Grid container spacing={3}>
                            {/* Product Name */}
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
                            {/* Product Type */}
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
                            {/* Product Warranty */}
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
                            {/* Add button */}
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
```

The `return` statement renders the JSX and utilizes Material-UI components such as `Container`, `Box`, `Grid`, `TextField`, `Paper`, and `Button` to create a form layout. The form inputs are bound to their corresponding state variables (`name`, `type`, `place`, `warranty`) and update their values using the setter functions. The "Add" button triggers the `handleClick` function when clicked.

The component is wrapped in a `ThemeProvider` component from Material-UI, which applies the specified theme to the component hierarchy. The `Container`, `Box`, and `Paper` components provide layout and styling for the form, while the `ToastContainer` component is responsible for displaying toast notifications.




