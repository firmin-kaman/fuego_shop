// Comment.tsx
import React from 'react';
import { Box, Typography, LinearProgress, Rating, Button } from '@mui/material';

interface LikesProps {
  comment: {
    rating: number;
    percentages: number[];
  };
}

const LikesAndEvaluations: React.FC<LikesProps> = ({ comment }) => {
  const { rating, percentages } = comment;

  return (
    
    <Box sx={{display:"flex", flexDirection:"row", width: "100%" }}>
        {/* Liked Comment */}
        <Box display="flex" flexDirection="column" marginBottom={2} width="100%">
            <Typography sx={{fontWeight: "bold", fontSize: "20px" , width: "100%"}}> Clients Likes</Typography>
            <Box sx={{display: "flex", alignItems: "center", width: "100%"}}>
                <Rating name="read-only" value={rating} readOnly precision={0.1} />
                <Typography variant="body2">{`${rating} sur 5`}</Typography>
            </Box>
            <Typography sx={{fontSize: "15px" , width: "100%", marginBlock: "10px", marginLeft: "5px"}}>207 évalutations globales</Typography>
            <Box sx={{ width: "100%", marginBlock: "10px", marginLeft: "5px", display:"flex", flexDirection:"column"}}>
                {[5, 4, 3, 2, 1].map((stars, index) => (
                <Box key={stars} width="100%" display="flex" alignItems="center">
                    <Typography variant="body2" width="25%">{`${stars} étoiles`}</Typography>
                    <LinearProgress
                    variant="determinate"
                    value={percentages[index]}
                    sx={{ marginLeft: 0, width: '100%', height: '15px' }}
                    />
                    <Typography variant="body2" width="45%" sx={{ marginLeft: "10px" }}>{`${percentages[index]} %`}</Typography>
                </Box>
                ))}
            </Box>
            {/* Write a comment */}
            <Box display="flex" flexDirection="column" marginBottom={2} width="100%">
                <Typography sx={{fontWeight: "600", fontSize: "20px" , width: "100%", marginTop: "20px"}}> Product evaluation</Typography>
                <Typography sx={{fontSize: "15px" , width: "100%"}}> Share your opinion with others clients</Typography>
                <Button sx={{width: "80%"}}> Write your comment</Button>
            </Box>
        </Box>
    </Box>
  );
};

export default LikesAndEvaluations;
