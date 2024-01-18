import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Paper,
} from '@mui/material';
import { Favorite, FavoriteBorder, FilterList } from '@mui/icons-material';

import productImage1 from '../../Images/smartphone.png';
import productImage2 from '../../Images/laptop.png';
import productImage3 from '../../Images/headphones.png';
import productImage4 from '../../Images/smartwatch.png';

const products = [
  {
    id: 1,
    name: 'Smartphone XYZ',
    description: 'Un smartphone dernier cri avec des fonctionnalités avancées.',
    imageUrl: productImage1,
    price: 599.99,
  },
  {
    id: 2,
    name: 'Ordinateur Portable ABC',
    description: 'Un ordinateur portable puissant pour toutes vos tâches informatiques.',
    imageUrl: productImage2,
    price: 1299.99,
  },
  {
    id: 3,
    name: 'Casque Audio Bluetooth',
    description: 'Un casque audio sans fil avec une qualité audio exceptionnelle.',
    imageUrl: productImage3,
    price: 99.99,
  },
  {
    id: 4,
    name: 'Montre Connectée',
    description: 'Une montre connectée élégante avec suivi d`activité et notifications.',
    imageUrl: productImage4,
    price: 199.99,
  },
  // ... Ajoutez d'autres produits selon vos besoins
];

const ProductList: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <Paper style={{ padding: 16, margin: '0px auto', maxWidth: 1280, backgroundColor: "#D3D3D3" }}>
      <div style={{ marginBottom: 16 }}>
        <Tooltip title="Filtrer les produits">
          <IconButton>
            <FilterList />
          </IconButton>
        </Tooltip>
      </div>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                width="14"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }}>
                <Typography variant="body1">${product.price}</Typography>
                <Button variant="outlined" color="primary">
                  Ajouter au panier
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}>
                <Tooltip title={favorites.includes(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}>
                  <IconButton
                    onClick= {() => toggleFavorite(product.id)}
                    color= {favorites.includes(product.id) ? 'error' : 'default'}
                    style= {{ color: favorites.includes(product.id) ? '#ff9800' : ''}}
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





// eslint-disable-next-line no-use-before-define

// {/* <Tooltip title={favorites.includes(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}>
//   <IconButton
//     onClick={() => toggleFavorite(product.id)}
//     color= {favorites.includes(product.id) ? 'error' : 'default'}
//     style={{ backgroundColor: favorites.includes(product.id) ? 'orange' : '' , color: favorites.includes(product.id) ? 'green' : '' }}
//   >
//     {favorites.includes(product.id) ? <Favorite style={{ color: 'white' }} /> : <FavoriteBorder />}
//   </IconButton>
// </Tooltip>  */}