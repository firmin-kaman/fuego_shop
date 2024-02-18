  import React, { useState, useEffect } from 'react';
  import { Avatar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material';
  import { GoogleMap, Marker } from '@react-google-maps/api';
  import CssProfile from "../../Css/ProfileComponent.module.css";
  import P_image from "../../Images/woman-1920.jpg";
  import googleMapsApiKey from "../../Js/googleMapsApiKey";

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultLocation = {
    lat: 48.8584,
    lng: 2.2945
  };

  interface User {
    name: string;
    email: string;
    phone: string;
    address: string;
    mostPurchasedProduct: string;
    totalProductsPurchased: number;
    location: string;
  }

  const UserProfile: React.FC<{
    user: User;
    onEditProfile: (editedUser: User) => void;
    onDeleteProfile: () => void;
  }> = ({ user, onEditProfile, onDeleteProfile }) => {
    const [editOpen, setEditOpen] = useState(false);
    const [editedUser, setEditedUser] = useState<User>({ ...user });
  const [googleMapLoaded, setGoogleMapLoaded] = useState(false);

  useEffect(() => {
    // Charger Google Maps une fois que le composant est monté
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
    script.async = true;
    script.onload = () => setGoogleMapLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleEditOpen = () => {
    setEditedUser({ ...user });
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSave = () => {
    onEditProfile(editedUser);
    setEditOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
      <Grid className={CssProfile.profile} container spacing={3} >
        {/* User Info */}
        <Grid className={CssProfile.userInfo} item  >
          {/* Profile Img */}
          <Grid className={CssProfile.profileImg} item >
            <Avatar alt={user.name} src={P_image} sx={{ width: 100, height: 100, mx: 'auto', my: 2 }} />
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              User Account
            </Typography>
          </Grid>
          {/* Profile Details */}
          <Grid className={CssProfile.profileDetails} item>
            <Grid item className={CssProfile.profileGrid} >
              <Typography variant="body1" gutterBottom>
                Email: {user.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: {user.phone} 
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: {user.address}
              </Typography>
            </Grid>
            <br />
            <Grid item className={CssProfile.profileGrid} >
              <Typography variant="body1" gutterBottom>
                Most Purchased Product: {user.mostPurchasedProduct}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Total Products Purchased: {user.totalProductsPurchased}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Location: 
              </Typography>
            </Grid>
            <br />
          </Grid>
        </Grid>
        {/* Google Map */}
        <Grid className={CssProfile.googleMap} item >
          {googleMapLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultLocation}
              zoom={10}
            >
              <Marker position={defaultLocation} />
            </GoogleMap>
          )}
          {/* Ajoutez d'autres informations de profil si nécessaire */}
          <br />
          <br />
          <Button variant="contained" className={CssProfile.btnEdit} onClick={handleEditOpen} sx={{ mr: 2 }}>
            Edit Profile
          </Button>
          <Button variant="contained" className={CssProfile.btnDel} onClick={onDeleteProfile}>
            Delete Profile
          </Button>
        </Grid>
      </Grid>
      </Box>

      {/* Dialogue pour l'édition du profil */}
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={editedUser.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={editedUser.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            value={editedUser.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="address"
            name="address"
            label="Address"
            type="text"
            fullWidth
            value={editedUser.address}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="location"
            name="location"
            label="Location"
            type="text"
            fullWidth
            value={editedUser.location}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserProfile;
