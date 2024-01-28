import React, { useState, useEffect } from 'react';
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button, Typography, Card, CardMedia} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "../../Components/Css/Cartpage.css"

// Images of products
import productImage1 from '../../Components/Images/smartphone.png';
import productImage2 from '../../Components/Images/laptop.png';

// Images of credit card
import productImage3 from '../../Components/Images/American-Express-Logo.png';
import productImage4 from '../../Components/Images/Mastercard_logo_PNG3.png';
import productImage5 from '../../Components/Images/PayPal New 2023.png';
import productImage6 from '../../Components/Images/Visa_logo.png';
import productImage7 from '../../Components/Images/Klarna_Payment.png';


interface Product { id: number; name: string; price: number; image: string; quantity: number; description: string; selected: boolean;}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: 'Iphone 13 pro Max', price: 10, image: productImage1, quantity: 1, description: " Un portable qui ne sert qu'a draguer; aimant à meuf quoi ! ", selected: false },
    { id: 2, name: 'MacBook Air 13', price: 15, image: productImage2, quantity: 2, description: " Une Bête de pc pour les frimeurs d'Epitech Technology ", selected: false },
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
    <div className="container">
      <Header/>
      <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
        <h1 className="title">Shopping Cart</h1>
      </Paper>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {/* Product cart*/}
        <TableContainer component={Paper} style={{ marginTop: '16px', width: "70%"}}>
          <TableContainer component={Paper} style={{ marginTop: '16px', width: "90%"}}>
            <Table>
              <TableHead>
                <TableRow style={{display: "flex", flexDirection: "column"}}>
                  <h1 style={{ fontWeight: "500", marginBottom: "10px", marginLeft: "15px" }}>Your cart</h1>
                  <a href='#1' onClick={handleSelectAllToggle} style={{ color: "#137034", textDecoration: "none", marginTop: "-10px", marginLeft: "15px"}}>
                    {selectAll ? 'Deselect all elements' : 'Select all elements' }
                  </a>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map(product => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Card style={{ display: 'flex', alignItems: 'center' }}>
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
                        />
                      </Card>
                    </TableCell>

                    <Typography style={{ display: "flex", justifyContent: "space-between"}}>
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
                    <Typography style={{ display: "flex"}}>
                    {/* Quantité */}
                    <Typography>
                      <FormControl sx={{ m: 1, minWidth: 120 }} style={{display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center"}}>
                        <InputLabel id="Qté">Qté</InputLabel>
                        <Select labelId="Qté" id="demo-simple-select-helper" value={quantite} label="Qté" onChange={handleChange} style={{height: "40px", width: "100px", borderRadius: "30px", marginTop: "8px"}} >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem >1</MenuItem><MenuItem >2</MenuItem><MenuItem >3</MenuItem>
                          <MenuItem >4</MenuItem><MenuItem >5</MenuItem><MenuItem >6</MenuItem>
                          <MenuItem >7</MenuItem><MenuItem >8</MenuItem><MenuItem >9</MenuItem>
                        </Select>
                        {/* Boutons de suppression et de favori */}
                        <span className='btn btn-del' style={{ color: "#137034", textDecoration: "none", marginTop: "15px", marginLeft:"15px"}} onClick={() => removeFromCart(product.id)}>
                          Delete
                        </span>
                        <span role="separator" aria-label="|" style={{color: "#137034", marginLeft: "10px", marginTop: "13px"}}>|</span>
                        <span className='btn btn-upd' style={{ color: "#137034", textDecoration: "none", marginTop: "15px", marginLeft:"15px"}} onClick={() => addToFavorite(product.id)}>
                          Set aside
                        </span>
                        <span role="separator" aria-label="|" style={{color: "#137034", marginLeft: "10px", marginTop: "13px"}}>|</span>
                        <span className='btn btn-shr' style={{ color: "#137034", textDecoration: "none", marginTop: "15px", marginLeft:"15px"}} onClick={() => addToFavorite(product.id)}>
                          Share
                        </span>
                      </FormControl>
                    </Typography>
                    <Typography>
                    </Typography>
                    </Typography>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Available Card */}
          <TableContainer component={Paper} style={{ marginTop: '16px', width: "90%", marginBottom: "20px"}}>
            <Table >
              <TableHead>
                <TableRow style={{display: "flex", flexDirection: "column"}}>
                  <h1 style={{ fontWeight: "500", marginBottom: "10px", marginLeft: "15px" }}>We agree</h1>
                </TableRow>
              </TableHead>
              <TableBody style={{display: "flex"}}>
                <Typography style={{display: "flex"}}>
                    <TableCell>
                      <Card style={{ display: 'flex', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          alt={"Am-Ex"}
                          height={"40"}
                          width={"100%"}
                          src={productImage3}
                          title={"American Express"}
                        />
                      </Card>
                    </TableCell>
                </Typography>
                <td/><td/>
                <Typography style={{display: "flex"}}>
                    <TableCell>
                      <Card style={{ display: 'flex', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          alt={"Am-Ex"}
                          height={"40"}
                          width={"100%"}
                          src={productImage4}
                          title={"American Express"}
                        />
                      </Card>
                    </TableCell>
                </Typography>
                <td/><td/>
                <Typography style={{display: "flex"}}>
                    <TableCell>
                      <Card style={{ display: 'flex', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          alt={"Am-Ex"}
                          height={"40"}
                          width={"100%"}
                          src={productImage5}
                          title={"American Express"}
                        />
                      </Card>
                    </TableCell>
                </Typography>
                <td></td>
                <Typography style={{display: "flex"}}>
                    <TableCell>
                      <Card style={{ display: 'flex', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          alt={"Am-Ex"}
                          height={"40"}
                          width={"100%"}
                          src={productImage6}
                          title={"American Express"}
                        />
                      </Card>
                    </TableCell>
                </Typography>
                <td></td>
                <Typography style={{display: "flex"}}>
                    <TableCell>
                      <Card style={{ display: 'flex', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          alt={"Am-Ex"}
                          height={"40"}
                          width={"100%"}
                          src={productImage7}
                          title={"American Express"}
                        />
                      </Card>
                    </TableCell>
                </Typography>
              </TableBody>
            </Table>
          </TableContainer>
        </TableContainer>

        {/* Passer la commande */}
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px', width: "25%", height: "300px", display: "flex", flexDirection: "column" , alignItems: "center"}}>
          <Typography style={{ marginBottom: "8px", marginTop: "10px", textAlign: "left", width: "90%" }}>
            <Typography style={{display: "flex", justifyContent:"space-between"}}>
              <Typography variant="h5" style={{fontWeight:"600"}}>Total:</Typography>
              <Typography variant="h5" ></Typography>
            </Typography>
            <br />
            <Typography style={{display: "flex", justifyContent:"space-between", marginBottom: "10px"}}>
              <Typography variant="h5" >Sub-total:</Typography>
              <Typography variant="h5" >{calculateTotal()} €</Typography>
            </Typography>
            <Typography style={{display: "flex", justifyContent:"space-between", marginBottom: "10px"}}>
              <Typography variant="h5" >Delivery:</Typography>
              <Typography variant="h5" >0,00 €</Typography>
            </Typography>
            <Typography style={{display: "flex", justifyContent:"space-between", marginBottom: "10px"}}>
              <Typography variant="h5" >Total (VAT included)</Typography>
              <Typography variant="h5" >{calculateTotal()} €</Typography>
            </Typography>
          </Typography>
          <Button variant="contained" color="primary" style={{ width: "90%", fontWeight: "550" }}>
            Checkout
          </Button>
        </Paper>
      </div>
      <Footer/>
    </div>
  );
};

export default CartPage;
