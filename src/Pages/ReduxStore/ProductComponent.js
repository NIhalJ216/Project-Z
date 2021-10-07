import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Grid container direction="column">
                <Grid item key={id} xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={3}>
                            <Link to={`/product/${id}`}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <img src={image} alt={title} width='200' height='300' />
                                        <Typography variant='h5'> {title} </Typography>
                                        <Typography variant='h5'>$ {price}</Typography>
                                        <Typography variant='h5'>{category}</Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        )
    })
    return <>{renderList}</>;
}

export default ProductComponent;