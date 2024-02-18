/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, IconButton, Tooltip, Paper, Rating } from '@mui/material';
import { Favorite, FavoriteBorder, FilterList } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import "../../Css/ProductPage.css"

// Images of products
import productImage1 from '../../Images/Products/smartphone-1.jpg';
import productImage2 from '../../Images/Products/Macbook-1-copy.jpg';
import productImage3 from '../../Images/Products/headphones-3.jpg';
import productImage4 from '../../Images/Products/smartphone-2.png';
import productImage5 from '../../Images/Products/foot-pink-font-pink&blue-copy.jpg';
import productImage6 from '../../Images/Products/foot-black-font-blue.jpg';
import productImage7 from '../../Images/Products/foot-black-font-pink.jpg';
import productImage8 from '../../Images/Products/foot-green-font-green.jpg';
import productImage9 from '../../Images/Products/foot-Jordan-new-1.jpg';
import productImage10 from '../../Images/Products/foot-Jordan-new-7.jpg';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number | string;
  type: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Iphone 12',
    description: 'Un smartphone dernier cri avec des fonctionnalités avancées.',
    imageUrl: productImage1,
    price: 899.99.toFixed(2),
    type: 'smartphone',
  },
  {
    id: 2,
    name: 'Mackbook Pro 2024',
    description: 'Un ordinateur portable puissant pour toutes vos tâches informatiques.',
    imageUrl: productImage2,
    price: 1299.99,
    type: 'laptop',
  },
  {
    id: 3,
    name: 'Headphone Bluetooth',
    description: 'Un casque audio sans fil avec une qualité audio exceptionnelle.',
    imageUrl: productImage3,
    price: 99.99,
    type: 'headphone',
  },
  {
    id: 4,
    name: 'Huawei Watch 4',
    description: 'Un téléphone portable avec une large gamme de fonctionnalités.',
    imageUrl: productImage4,
    price: 799.99,
    type: 'smartwatch',
  },
  {
    id: 5,
    name: 'Dunk Low Pink Oxford',
    description: 'Un vélo élégant avec une autonomie de 4h. parfais pour les petites balades.',
    imageUrl: productImage5,
    price: 368.99,
    type: 'shoes',
  },
  {
    id: 6,
    name: 'Dunk Low UCLA',
    description: 'Un T-shirt soyeux pour homme, femme et enfants.',
    imageUrl: productImage6,
    price: 45.99,
    type: 't-shirt',
  },
  {
    id: 7,
    name: 'Dunk Low HUF NYC',
    description: 'Un T-shirt soyeux pour homme, femme et enfants.',
    imageUrl: productImage7,
    price: 60.99,
    type: 't-shirt',
  },
  {
    id: 8,
    name: 'Dunk Low Reverse',
    description: 'Un T-shirt soyeux pour homme, femme et enfants.',
    imageUrl: productImage8,
    price: 55.99,
    type: 't-shirt',
  },
  {
    id: 9,
    name: 'Air Jordan 1 Mid SE',
    description: "Une chaussure de sport pour les amoureux de Jordan.",
    imageUrl: productImage9,
    price: 38.99,
    type: 't-shirt',
  },
  {
    id: 10,
    name: 'Air Jordan 13',
    description: "L'élégante Air Jordan 13. MVP Basket en 2013",
    imageUrl: productImage10,
    price: 103.99,
    type: 'shoes',
  },
];

const ProductList: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleFavorite = (productId: number, event: React.MouseEvent<HTMLButtonElement>) => {
    if (favorites.includes(productId)) {
      event.stopPropagation();
      setFavorites(favorites.filter((id) => id !== productId));
      navigate(`/favorites`);
    } else {
      event.stopPropagation();
      setFavorites([...favorites, productId]);
      navigate(`/favorites`);
    }
  };

  // Navigation
  const handleProductClick = () => {
    // Redirect to the "/productDetails" page with the product ID
    navigate(`/productDetails`);
  };
  const gridStyle = {
    cursor: 'pointer',
  };

  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Stop the propagation of the click event to the parent Card
    event.stopPropagation();

    navigate('/cart');
  };


  // Rates Stars
  const [value] = React.useState<number | null>(2);

  return (
    // Filter
    <Paper className='filter'>
      <div style={{ marginBottom: 16 }}>
        <Tooltip title="Filtrer les produits">
          <IconButton>
            <FilterList />
          </IconButton>
        </Tooltip>
      </div>

      {/* Products */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} style={gridStyle}>
            <Card onClick={() => handleProductClick()}>
              {/* Images */}
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.name}
                className='ImgPic'
              />
              {/* Text */}
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              {/* Stars notation */}
              <CardContent sx={{ marginTop: "-25px", marginBottom: "-20px", display: "flex" }}>
                {/* <Typography component="legend">Rates</Typography> */}
                <Rating name="read-only" value={value} readOnly />
                <p style={{ margin: "7px" }}>250</p>
              </CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }}>
                <Typography variant="body1">€ {product.price}</Typography>
                <Button variant="outlined" color="primary" onClick={handleAddToCartClick}>
                  Ajouter au panier
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}>
                <Tooltip title={favorites.includes(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}>
                  <IconButton
                    onClick={(event) => toggleFavorite(product.id, event)}
                    color={favorites.includes(product.id) ? 'error' : 'default'}
                    style={{ color: favorites.includes(product.id) ? '#ff9800' : '' }}
                  >
                    {favorites.includes(product.id) ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Tooltip>

              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};


export default ProductList;
