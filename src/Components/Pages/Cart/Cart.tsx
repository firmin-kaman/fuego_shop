import React, { useState, useEffect } from 'react';
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button, Typography, Card, CardMedia} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "../../../Components/Css/Cart.css"

// Images of products
import productImage1 from '../../../Components/Images/Products/smartphone-1.jpg';
import productImage2 from '../../../Components/Images/Products/Macbook-1-copy.jpg';
import productImage3 from '../../../Components/Images/Products/headphones-1-copy.jpg';
import productImage4 from '../../../Components/Images/Products/Macbook-2-Air.jpg';

// Images of credit card
import productImage5 from '../../../Components/Images/American-Express-Logo.png';
import productImage6 from '../../../Components/Images/Mastercard_logo_PNG3.png';
import productImage7 from '../../../Components/Images/PayPal New 2023.png';
import productImage8 from '../../../Components/Images/Visa_logo.png';
import productImage9 from '../../../Components/Images/Klarna_Payment.png';


interface Product { id: number; name: string; price: number; image: string; quantity: number; description: string; selected: boolean;}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: 'Iphone 12', price: 950, image: productImage1, quantity: 1, description: " Un smartphone des plus utiles, fiable et efficace! ", selected: false },
    { id: 2, name: 'MacBook Pro 2024', price: 1700, image: productImage2, quantity: 1, description: " Une Bête de pc pour les frimeurs d'Epitech Technology ", selected: false },
    { id: 3, name: 'Iphone 13 pro Max', price: 1400, image: productImage3, quantity: 1, description: " Un portable qui ne sert qu'a draguer; aimant à meuf quoi ! ", selected: false },
    { id: 4, name: 'MacBook Air 13', price: 1250, image: productImage4, quantity: 1, description: " Un pc plus à la mode mais ultra sollicité ", selected: false },
    // Add more products as needed
  ]);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    console.log(`Produit ${productId} supprimé du panier.`);
  };
  const addToFavorite = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    console.log(`Produit ${productId} ajouté au favoris.`);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };


  /*** [ DEBUT ] Gestion des quantités de produits du panier ***/

    const [quantite, setQuantite] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setQuantite(event.target.value);
    };
  /*** [ FIN ] Gestion des quantités de produits du panier ***/


  /*** [ DEBUT ] Sélectionner/Désélectionner tous les produits du panier ***/
    const [selectAll, setSelectAll] = useState(true);
    // Mettre à jour selectAll en fonction des produits
    useEffect(() => {
      const allProductsSelected = cart.every(product => product.selected);
      setSelectAll(allProductsSelected);
    }, [cart]);

    const handleSelectAllToggle = () => {
      // Met à jour l'état de sélection de tous les éléments
      setSelectAll(!selectAll);
      
      // Met à jour la sélection individuelle de tous les produits
      const updatedCart = cart.map(product => ({
        ...product,
        selected: !selectAll
      }));
      setCart(updatedCart);
    };

    // Met à jour la logique de sélection pour un produit donné ici si nécessaire
    const handleProductCheckboxToggle = (productId: number) => {
      const updatedCart = cart.map(product => {
        if (product.id === productId) {
          // Met à jour le produit spécifié pour basculer entre sélection et désélection
          return { ...product, selected: !product.selected };
        }
        return product;
      });
      setCart(updatedCart);
    };
  /*** [ FIN ] Sélectionner/Désélectionner tous les produits du panier ***/



  return (
    <div className="Container">
      <div className='Cart'>

        {/* ---- Command ---- */}
        
        <TableContainer component={Paper} className='CartContainer'>
          {/* Product Cart*/}
          <TableContainer component={Paper} className='ProductCart'>
            <Table>
              <TableHead>
                <TableRow className='YourCartHeader'>
                  <h1 className='YourCart'>Your cart</h1>
                  <a href='#1' onClick={handleSelectAllToggle} className='SelectCart'>
                    {selectAll ? 'Deselect all elements' : 'Select all elements' }
                  </a>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map(product => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Card className='CartContent'>
                        <Checkbox
                          checked={selectAll || product.selected}
                          onChange={() => handleProductCheckboxToggle(product.id)}
                        />
                        <CardMedia
                          component="img"
                          alt={product.name}
                          height="200"
                          src={product.image}
                          title={product.name}
                          className='CartImage'
                          style={{ width: '150px', height: '30' }} 
                        />
                      </Card>
                    </TableCell>

                    <Typography className='ProductName'>
                      {/* Nom et prix du produit */}
                      <Typography style={{ display: "flex", flexDirection: "column" }}>
                        <h3>{product.name}</h3>
                        <h4>{product.description}</h4>
                      </Typography>
                      <Typography>
                        {/* Somme des produits */}
                        <Typography style={{ marginRight: "15px", fontWeight: "600"}}>{product.price * product.quantity} €</Typography>
                      </Typography>
                    </Typography>
                    <Typography className='ProductQuantity'>
                      {/* Quantity */}
                      <Typography>
                        <FormControl className='QuantityForm' >
                          <InputLabel id="Qté">Qté</InputLabel>
                          <Select labelId="Qté" id="demo-simple-select-helper" value={quantite} label="Qté" onChange={handleChange} className='QuantityFormSelect'>
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem >1</MenuItem><MenuItem >2</MenuItem><MenuItem >3</MenuItem>
                            <MenuItem >4</MenuItem><MenuItem >5</MenuItem><MenuItem >6</MenuItem>
                            <MenuItem >7</MenuItem><MenuItem >8</MenuItem><MenuItem >9</MenuItem>
                          </Select>
                          {/* Boutons de suppression et de favori */}
                          <span className='btn btn-del QuantityButton' onClick={() => removeFromCart(product.id)}>
                            Delete
                          </span>
                          <span className='SpanDivider' role="separator" aria-label="|">|</span>
                          <span className='btn btn-upd QuantityButton' onClick={() => addToFavorite(product.id)}>
                            Set aside
                          </span>
                          <span className='SpanDivider' role="separator" aria-label="|">|</span>
                          <span className='btn btn-shr QuantityButton' onClick={() => addToFavorite(product.id)}>
                            Share
                          </span>
                        </FormControl>
                      </Typography>
                    </Typography>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Available Card */}
          <TableContainer component={Paper} className='AvailableCard'>
            <Table >
              <TableHead>
                <TableRow className='WeAgreeHeader'>
                  <h1 className='WeAgree'>We agree</h1>
                </TableRow>
              </TableHead>
              <TableBody className='WeAgreeContent'>
                {[
                  productImage5,
                  productImage6,
                  productImage7,
                  productImage8,
                  productImage9
                ].map((image, index) => (
                  <Typography key={index}>
                    <TableCell>
                      <Card>
                        <CardMedia component="img" alt={`Image ${index + 3}`} height={"40"} width={"100%"} src={image} title={`Image ${index + 3}`} />
                      </Card>
                    </TableCell>
                  </Typography>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableContainer>

        {/* ---- Pay ---- */}

        {/* Make Command */}
        <Paper elevation={0} className='MakeCommand'>
          <Typography className='MakeCommandContainer'>
            <Typography className='MakeCommandTitle' style={{display: "flex", justifyContent:"space-between"}}>
              <Typography variant="h5" >Total:</Typography>
              <Typography variant="h5" ></Typography>
            </Typography>
            <br />
            <Typography className='MakeCommandDetails'>
              <Typography variant="h5" >Sub-total:</Typography>
              <Typography variant="h5" >{calculateTotal()} €</Typography>
            </Typography>
            <Typography className='MakeCommandDetails'>
              <Typography variant="h5" >Delivery:</Typography>
              <Typography variant="h5" >0,00 €</Typography>
            </Typography>
            <Typography className='MakeCommandDetails'>
              <Typography variant="h5" >Total (VAT included)</Typography>
              <Typography variant="h5" >{calculateTotal()} €</Typography>
            </Typography>
          </Typography>
          <Button variant="contained" color="primary" className='MakeCommandButton'>
            Checkout
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Cart;
