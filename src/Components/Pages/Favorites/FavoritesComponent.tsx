// import React from 'react'
// import Header from '../Navigation/Header';
// import Footer from '../Navigation/Footer';
// import { Paper } from '@mui/material'

// const Favorites: React.FC = () => {

//   return (
//     <div className="container">
//         <Header/>
//         <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
//             <h1 className="title"> 💖 My Favorites 💖</h1>
//         </Paper>
//         <div>Favorites</div>
//         <Footer/>
//     </div>
//   )
// }



// // export default Favorites

// import React from 'react';
// import { Grid, Card, CardContent, CardMedia, Typography, Button, IconButton, Tooltip, Paper, Rating } from '@mui/material';
// import { Favorite, FavoriteBorder, FilterList } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Navigation/Header';

// // Importez les images des produits comme dans le composant ProductList.tsx
// // ...

// interface FavoritesProps {
//   favorites: number[];
//   products: Product[];
// }

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   imageUrl: string;
//   price: string;
// }

// const Favorites: React.FC<FavoritesProps> = ({ favorites, products }) => {
//   const navigate = useNavigate();

//   const handleProductClick = (productId: number) => {
//     // Naviguez vers la page de détails du produit
//     // navigate(`/productDetails/${productId}`);
//     navigate(`/productDetails`);
//   };

//   const gridStyle = {
//     cursor: 'pointer',
//   };

//   const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     // Empêchez la propagation de l'événement de clic vers la Card parent
//     event.stopPropagation();

//     // Naviguez vers la page du panier
//     navigate('/cart');
//   };

//   const value = 2; // Remplacez cela par la logique réelle pour la notation des étoiles

//   return (
//     <Paper style={{ padding: 16, margin: '0px auto', maxWidth: 1280, backgroundColor: "#e3e3e3" }}>
//       <Header/>
//       <div style={{ marginBottom: 16 }}>
//         <Tooltip title="Filtrer les favoris">
//           <IconButton>
//             <FilterList />
//           </IconButton>
//         </Tooltip>
//       </div>

//       <Grid container spacing={2}>
//         {products
//           .filter(product => favorites.includes(product.id))
//           .map((product) => (
//             <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} style={gridStyle}>
//               <Card onClick={() => handleProductClick(product.id)}>
//                 <CardMedia
//                   component="img"
//                   style={{ objectFit: 'cover' }}
//                   image={product.imageUrl}
//                   alt={product.name}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{product.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                 </CardContent>
//                 <CardContent sx={{ marginTop: "-25px", marginBottom: "-20px", display: "flex" }}>
//                   <Rating name="read-only" value={value} readOnly />
//                   <p style={{ margin: "7px" }}>250</p>
//                 </CardContent>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }}>
//                   <Typography variant="body1">€ {product.price}</Typography>
//                   <Button variant="outlined" color="primary" onClick={handleAddToCartClick}>
//                     Ajouter au panier
//                   </Button>
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}>
//                   <Tooltip title="Retirer des favoris">
//                     <IconButton
//                       // Ajoutez ici la logique pour retirer le produit des favoris
//                       // ...
//                     >
//                       <Favorite />
//                     </IconButton>
//                   </Tooltip>
//                 </div>
//               </Card>
//             </Grid>
//           ))}
//       </Grid>
//     </Paper>
//   );
// };

// export default Favorites;


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
