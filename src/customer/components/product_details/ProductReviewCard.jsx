import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Aditya</p>
              <p className="opacity-70">Jan 11, 2024</p>
            </div>
            <div>
              <Rating
                value={4.5}
                readOnly
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
            </div>
            <p>Nice Product, I want it now</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
