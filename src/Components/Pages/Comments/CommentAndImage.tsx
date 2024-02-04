import React from 'react';

import { Box, Typography, Rating, Grid} from '@mui/material';

interface CommentProps {
  comment: {
    rating: number;
  };
}
const CommentAndImage: React.FC<CommentProps> = ({comment}) => {
    const { rating } = comment;
  return (
        <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2} width= "100%"> 
        {/* Comment width Images */}
            <Box>
                <Typography sx={{fontWeight: "bold", fontSize: "20px",  marginBottom: "40px"}}> Clients Comments width image</Typography>
                {/* User-1 */}
                <Grid sx={{display: "flex", flexDirection:"row"}} >
                    <img src="../../Images/bananas-1920.jpg" alt="#1" />
                    <Typography> User Name-1</Typography>
                </Grid>
                <Grid sx={{display: "flex", flexDirection:"row"}} >
                    <Rating name="read-only" value={rating} readOnly precision={0.1} />
                    <Typography sx={{fontWeight: "bold"}}> Title comment</Typography>
                </Grid>
                <Typography variant="body2">Published day</Typography>
                <Grid sx={{display: "flex", flexDirection:"row"}}>
                    <Typography variant="body2"sx={{marginRight: "10px"}}>Taille: 45 EU</Typography>
                    <Typography variant="body2"sx={{marginRight: "10px"}}>Couleur: Bleu</Typography>
                    <Typography variant="body2"sx={{color: "#ad1f41", fontWeight: "bold", marginBottom: "5px"}}>Achat vérifié</Typography>
                </Grid>
                <Typography variant="body2">A really comfortable wide fitting safety shoe.Lightweight and ideal for working a seven and three quarter hour shift.</Typography>
            </Box>
            <br />
            <Box>
                {/* User-2 */}
                <Grid sx={{display: "flex", flexDirection:"row"}} >
                    <img src="../../Images/bananas-1920.jpg" alt="#1" />
                    <Typography> User Name-2</Typography>
                </Grid>
                <Grid sx={{display: "flex", flexDirection:"row"}} >
                    <Rating name="read-only" value={rating} readOnly precision={0.1} />
                    <Typography sx={{fontWeight: "bold"}}> Title comment</Typography>
                </Grid>
                <Typography variant="body2">Published day</Typography>
                <Grid sx={{display: "flex", flexDirection:"row"}}>
                    <Typography variant="body2"sx={{marginRight: "10px"}}>Taille: 45 EU</Typography>
                    <Typography variant="body2"sx={{marginRight: "10px"}}>Couleur: Bleu</Typography>
                    <Typography variant="body2"sx={{color: "#ad1f41", fontWeight: "bold", marginBottom: "5px"}}>Achat vérifié</Typography>
                </Grid>
                <Typography variant="body2">A really comfortable wide fitting safety shoe.Lightweight and ideal for working a seven and three quarter hour shift.</Typography>
            </Box>
        </Box>
  )
}

export default CommentAndImage