import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Button, Grid, InputLabel, MenuItem, FormControl, ListItemButton, ListItemIcon, ListItemText, Collapse , List, Rating} from '@mui/material';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Img1 from "../../Images/store-1920.jpg";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ExpandLess, ExpandMore} from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import Likes from "../Comments/LikesAndEvaluations.tsx";
import Comment from "../Comments/CommentAndImage.tsx";

const ProductDetails: React.FC = () => {
    
  // Ajoutez ces états pour stocker les valeurs sélectionnées dans les menus déroulants
  const [materialOpen, setMaterialOpen] = React.useState(false);
  const [productDetailsOpen, setProductDetailsOpen] = React.useState(false);
  const [sizeAndFitOpen, setSizeAndFitOpen] = React.useState(false);


  // Placeholder pour les commentaires (remplacez cela avec les données réelles de votre backend)
  const likesData = {
    rating: 4.2,
    percentages: [20, 30, 10, 25, 15],
  };
  const commentData = {
    rating: 4.2,
  };



  const [taille, setTaille] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTaille(event.target.value as string);
  };

  const { productId } = useParams();

  // Placeholder pour les détails du produit (remplacez cela avec les données réelles de votre backend)
  const productDetails = {
    id: productId,
    name: 'Nom du produit',
    description: 'Description du produit',
    price: '100.00 €',
    // Autres détails du produit
  };

 // État pour gérer la quantité ajoutée au panier
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    // Check if the quantity is greater than 1 before decrementing
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      console.log(`Retirer 1 ${productDetails.name} du panier`);
    } else {
      console.log(`${productDetails.name} est déjà à la quantité minimale`);
    }
  };
 

  // Ouverture et fermeture des menus 

  const handleMaterialClick = () => {
  setMaterialOpen(!materialOpen);
};

const handleProductDetailsClick = () => {
  setProductDetailsOpen(!productDetailsOpen);
};

const handleSizeAndFitClick = () => {
  setSizeAndFitOpen(!sizeAndFitOpen);
};

// Rates Stars
  const [value] = React.useState<number | null>(2);


  return (
    <div className='product_details'>
      <Card>
        {/* Product details */}
        <CardContent style={{backgroundColor: "#DCDCDC"}}>
          <Grid container spacing={3}>
            {/***  Première moitié ***/}
            <Grid item xs={12} md={6}>
              {/***  Images déroulantes ***/}
              <div className='ImgContainer' style={{display: "flex", }}>
                <div className='Left' style={{width: "30%", marginTop: "-16.5px"}}>
                  <Grid>
                  <Button className='SlideUp'></Button>
                  <Grid>
                    <img
                      src= {Img1}
                      alt={productDetails.name}
                      style={{ width: '90%', height: 'auto' }}
                    />
                  </Grid>
                  <Grid>
                    <img
                      src= {Img1}
                      alt={productDetails.name}
                      style={{ width: '90%', height: 'auto' }}
                    />
                  </Grid>
                  <Grid>
                    <img
                      src= {Img1}
                      alt={productDetails.name}
                      style={{ width: '90%', height: 'auto' }}
                    />
                  </Grid>
                  <Grid>
                    <img
                      src= {Img1}
                      alt={productDetails.name}
                      style={{ width: '90%', height: 'auto' }}
                    />
                  </Grid>
                  <Grid>
                    <img
                      src= {Img1}
                      alt={productDetails.name}
                      style={{ width: '90%', height: 'auto' }}
                    />
                  </Grid>
                  <Button className='SlideDown'></Button>
                </Grid>
                </div>
                <div className="right" style={{width: "70%", marginTop: "46.5px"}}>
                  {/***  Image zoomable ***/}
                  <Grid>
                      <img
                        src= {Img1}
                        alt={productDetails.name}
                        style={{ width: '100%', height: '71vh' }}
                      />
                  </Grid>
                </div>
              </div>
              
            </Grid>
            {/***  Deuxième moitié ***/}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {productDetails.name}
              </Typography>
              {/* Stars notation */}
              <CardContent sx={{ marginTop: "-15px", marginBottom: "5px", marginLeft: "-15px", display: "flex"  }}> 
                <Rating name="read-only" value={value} readOnly /> 
                <p style={{ margin: "7px" }}>250</p>
              </CardContent>
              {/* Price of product */}
              <Typography variant="h6" style={{display: "flex", marginBottom: "25px", fontWeight: "600"}}>
                {productDetails.price}
              </Typography>
              {/* Description of product */}
              <Typography variant="body1" paragraph>
                {productDetails.description}
              </Typography>

            {/* Quantité et bouton Ajouter au panier */}
              {/* Taille */}
              <Grid item style={{marginTop: "20px", marginBottom: "10px"}}>
              {/* Bouton d'ajout */}
              <FormControl fullWidth>
                <InputLabel id="material-label" style={{marginTop: "0px"}}>Votre taille</InputLabel>
                <Select
                  labelId="material-label"
                  id="taille-select"
                  value={taille}
                  label="Votre Taille"
                  onChange={handleChange}
                >
                  <MenuItem>32 x 34</MenuItem>
                  <MenuItem>34 x 36</MenuItem>
                  <MenuItem>36 x 38</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              {/* Quantité */}
              <Grid item style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                <Typography variant="body1" style={{fontWeight: "600"}}>Quantité:</Typography>
                <Grid item style={{marginTop: "10px", marginBottom: "10px", marginLeft:"15px"}}>
                  <BaseNumberInput
                    slots={{
                      root: StyledInputRoot,
                      input: StyledInput,
                      incrementButton: StyledButton,
                      decrementButton: StyledButton,
                    }}
                    slotProps={{
                      incrementButton: {
                        children: <AddIcon fontSize="small" />,
                        className: 'increment',
                      },
                      decrementButton: {
                        children: <RemoveIcon fontSize="small" />,
                        disabled: quantity === 1,
                        onClick: () => setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1)),
                      },
                    }}
                    value={quantity}
                    onChange={(_event, value) => setQuantity(value as number)}
                  />
                </Grid>
              </Grid>
              {/* Add Button */}
              <Grid item style={{marginTop: "0px", marginBottom: "10px", display: "flex", justifyContent: "space-between"}}>
                <Button variant="contained" color="primary" onClick={handleAddToCart} style={{width: "87%"}}>
                  Ajouter au panier
                </Button>
                <Button variant="contained" color="primary" onClick={handleAddToCart} style={{ width: "10%"}}>
                  <FavoriteIcon />
                </Button>
              </Grid>
              {/* Menu déroulant Matière et entretien */}
              <Grid item style={{marginTop: "0px", marginBottom: "10px"}}>
                <ListItemButton onClick={handleMaterialClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Matière et entretien" />
                  {materialOpen ?  <ExpandLess />:  <ExpandMore /> }
                </ListItemButton>
                <Collapse in={materialOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                      <ListItemText style={{marginLeft: "20px"}} primary="Composition:" />
                  </List>
                </Collapse>
              </Grid>

              {/* Menu déroulant Détails du produit */}
              <Grid item style={{marginTop: "0px", marginBottom: "10px"}}>
                <ListItemButton onClick={handleProductDetailsClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Détails du produit" />
                  {productDetailsOpen ?  <ExpandLess />:  <ExpandMore /> }
                </ListItemButton>
                <Collapse in={productDetailsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                      <ListItemText style={{marginLeft: "20px"}} primary="Taille:" />
                      <ListItemText style={{marginLeft: "20px"}} primary="Motif/ Couleur:" />
                      <ListItemText style={{marginLeft: "20px"}} primary="Informations additionnelles:" />
                      <ListItemText style={{marginLeft: "20px"}} primary="Référence:" />
                  </List>
                </Collapse>
              </Grid>

              {/* Menu déroulant Taille & coupe */}
              <Grid item style={{marginTop: "0px", marginBottom: "10px"}}>
                <ListItemButton onClick={handleSizeAndFitClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Taille & coupe" />
                  {sizeAndFitOpen ?  <ExpandLess />:  <ExpandMore /> }
                </ListItemButton>
                <Collapse in={sizeAndFitOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding style={{}}>
                      <ListItemText style={{marginLeft: "20px"}} primary="Coupe:" />
                      <ListItemText style={{marginLeft: "20px"}} primary="Silhouette:" />
                      <ListItemText style={{marginLeft: "20px"}} primary="Longueur:" />
                  </List>
                </Collapse>
              </Grid>
              {/* Entreprise de production */}
              <Grid item style={{marginTop: "20px", marginBottom: "10px", display: "flex", flexDirection: "row"}}>
                  <ListItemIcon style={{marginLeft:"15px", marginRight:"2px"}}> <InboxIcon /> </ListItemIcon>
                  <Grid container style={{display:"flex", justifyContent: "space-between"}}>
                    <Grid item>
                        <ListItemText primary="Amazone" />
                    </Grid>
                    <Grid item style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Button style={{ display: "flex", alignItems: "center", border: "2px solid lightgray", borderRadius: "5px" }}>
                          <AddCircleOutlineIcon/>
                          <span style={{ marginLeft: "8px" }}>Suivre</span>
                        </Button>
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>

        {/* User Comments */}
        <CardContent style={{backgroundColor: "#DCDCDC"}}>
          <Grid container spacing={3}sx={{display: "flex", flexDirection: "row", width: "100%"}}>
            {/***  Première moitié ***/}
            <Grid sx={{width: "50%"}}>
              <div style={{display: "flex", }}>
                <div className='Left' style={{width: "100%", marginTop: "-16.5px"}}>
                  <Grid >
                    {/* Stars notation */}
                    <CardContent sx={{ marginTop: "-15px", marginBottom: "5px", marginLeft: "0px", display: "flex", width: "100%" }}> 
                      <Likes comment={likesData}/>
                    </CardContent>
                  </Grid>
                </div>
              </div>
            </Grid>
            {/***  Deuxième moitié ***/}
            <Grid sx={{width: "40%"}}>
              <div  style={{display: "flex", }}>
                <div className='right' style={{width: "100%", marginTop: "-16.5px"}}>
                  <Grid>
                    {/* Comments */}
                    <CardContent sx={{ marginTop: "-15px", marginBottom: "5px", display: "flex", width: "100%" }}> 
                      <Comment comment={commentData}/>
                    </CardContent>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;



/***** CSS Bouton Quantité Start *****/

const blue = {  100: '#daecff', 200: '#b6daff', 300: '#66b2ff', 400: '#3399ff',  500: '#007fff',  600: '#0072e5',  700: '#0059B2',  800: '#004c99' };

const grey = { 50: '#F3F6F9',  100: '#E5EAF2',  200: '#DAE2ED',  300: '#C7D0DD',  400: '#B0B8C4',  500: '#9DA8B7', 600: '#6B7A90',  700: '#434D5B',  800: '#303740',  900: '#1C2025' };

const StyledInputRoot = styled('div')( ({ theme }) => ` font-family: 'IBM Plex Sans', sans-serif; font-weight: 400; color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]}; display: flex; flex-flow: row nowrap; justify-content: center;  align-items: center; ` );

const StyledInput = styled('input')(
  ({ theme }) => ` font-size: 0.875rem; font-family: inherit; font-weight: 400; line-height: 1.375; color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${ theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)' };
  border-radius: 8px; margin: 0 8px; padding: 10px 12px; outline: 0; min-width: 0; width: 4rem; text-align: center; &:hover { border-color: ${blue[400]}; }
  &:focus { border-color: ${blue[400]}; box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]}; } &:focus-visible { outline: 0; } `);

const StyledButton = styled('button')(
  ({ theme }) => ` font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;  box-sizing: border-box;
  line-height: 1.5;  border: 1px solid; border-radius: 999px; border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]}; background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]}; width: 32px; height: 32px;
  display: flex; flex-flow: row nowrap; justify-content: center; align-items: center; transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 120ms;
  &:hover { cursor: pointer; background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]}; border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]}; color: ${grey[50]}; }
  &:focus-visible { outline: 0; }
  &.increment { order: 1; }
    &.decrement { order: 0; } // Add this line to set the order for the decrement button
  &[data-name='decrement'] {
    &:before {
      display: none;
    }
  }
  &:not([aria-disabled='true']) {
    &[data-name='decrement'][disabled='false'] {
      &:before {
        display: none;
      }
    }
  }`,
);

/***** CSS Bouton Quanttité End *****/