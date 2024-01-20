import { Box, Button, Grid } from "@mui/material";
import React from "react";
import AdressCard from "../address_card/AdressCard";
import OrderTracker from "./OrderTracker";
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className=" px-5 lg:px-20 space-y-7">
      <Grid xs={12}>
        <h1 className="font-bold text-lg py-2">Delivery Address</h1>
        <AdressCard />
      </Grid>
      <div >
      <Grid
          container
          sx={{ justifyContent: "center", alignItems: "center"}}
        >
          <Grid item xs={9}>
            <OrderTracker activeStep={3} />
          </Grid>
          <Grid item>
            {true && (
              <Button sx={{ color: "" }} color="error" variant="text">
                RETURN
              </Button>
            )}

            {false && (
              <Button sx={{ color: deepPurple[500] }} variant="text">
                cancel order
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
      
      <Grid container className="space-y-5">
        {[1, 1, 1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={""}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">Title</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Nike</p>
                  <p>₹450</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
