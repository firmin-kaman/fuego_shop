import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, IconButton, Tooltip, Paper, Rating } from '@mui/material';
import { Favorite, FavoriteBorder, FilterList } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


interface FavoritesProps {
  favoriteProducts: number[];
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}

const Favorites: React.FC<FavoritesProps> = ({ favoriteProducts, products }) => {
  const navigate = useNavigate();
  const value = 2;
  // const [value] = useState<number | null>(2);

  const toggleFavorite = (productId: number) => {
    // Implement your toggleFavorite logic here
  };

  const handleAddToCartClick = (productId: number) => {
    // Implement your handleAddToCartClick logic here
  };

  const handleProductClick = (productId: number) => {
    navigate(`/productDetails/${productId}`);
  };

  const gridStyle = {
    cursor: 'pointer',
  };

  return (
    <div>
      <Paper>
        <Grid container spacing={2}>
          {products
            .filter((product) => favoriteProducts.includes(product.id))
            .map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} style={gridStyle}>
                <Card onClick={() => handleProductClick(product.id)}>
                  {/* Images */}
                  <CardMedia
                    component="img"
                    style={{ objectFit: 'cover' }}
                    image={product.imageUrl}
                    alt={product.name}
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
                    <Rating name="read-only" value={value} readOnly /> 
                    <p style={{ margin: "7px" }}>250</p>
                  </CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }}>
                    <Typography variant="body1">€ {product.price}</Typography>
                    <Button variant="outlined" color="primary" onClick={() => handleAddToCartClick(product.id)}>
                      Ajouter au panier
                    </Button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}>
                    <Tooltip title="Retirer des favoris">
                      <IconButton
                        onClick={() => toggleFavorite(product.id)}
                        color="error"
                      >
                        <Favorite />
                      </IconButton>
                    </Tooltip>
                  </div>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default Favorites;
