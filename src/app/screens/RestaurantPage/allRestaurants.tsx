import React, { useEffect } from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Pagination from '@mui/material/Pagination';
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForward from '@mui/icons-material/ArrowForward';
import { CssVarsProvider } from '@mui/joy/styles';
import Card from "@mui/joy/Card";
import CardOverflow  from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Favorite from "@mui/icons-material/Favorite";
import Typography from '@mui/joy/Typography';
import Link from "@mui/joy/Link";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from "@mui/icons-material/Favorite";

//Redux
import { useSelector,useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetRestaurants } from "../../screens/RestaurantPage/selector";
import { Dispatch } from '@reduxjs/toolkit';
import { Restaurant } from '../../../types/user';
import { setTargetRestaurants } from "../../screens/RestaurantPage/slice";


const order_list = Array.from(Array(8).keys());

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTargetRestaurants: (data: Restaurant[]) => dispach(setTargetRestaurants(data)),
});

//** Redux Selector */
const targetRestaurantsRetriever = createSelector(
  retrieveTargetRestaurants,
  (targetRestaurants) => ({
    targetRestaurants,
  })
);

export function AllRestaurants() {
    // INITIALIZATION
  const { setTargetRestaurants } = actionDispatch(useDispatch());
  const { targetRestaurants } = useSelector(targetRestaurantsRetriever);

  useEffect(() => {
    // TODO:  Retrieve target restaurant data
  }, []);
  


    return <div className="all_restaurant">
        <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
                <Box className={"fil_search_box"}>
                    <Box className={"fil_box"}>
                        <a>Zo'r</a>
                        <a>Mashhur</a>
                        <a>Trendagi</a>
                        <a>Yangi</a>
                    </Box>
                    <Box className={"search_big_box"}>
                        <form className={"search_form"} action={""} method={""}>
                            <input
                                type="search"
                                className={"searchInput"}
                                name={"resSearch"}
                                placeholder={"Qidiruv"}
                            />
                            <Button
                                className={"button_search"}
                                variant='contained'
                                endIcon={<SearchIcon />}
                            >
                                Izlash
                            </Button>
                        </form>
                    </Box>
                </Box>
                <Stack className={"all_res_box"}>
                <CssVarsProvider>
               {order_list.map(ele => {
                return (
                    <Card
                    variant="outlined"
                    sx={{ minHeight: 410, minWidth: 290, mx: "17px", my: "20px" }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio={"1"}>
                        <img src="/restaurant/resto.jpg" alt="" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.4)",
                        }}
                      >
                        <Favorite style={{ color: "white" }} />
                      </IconButton>
                    </CardOverflow>
                    
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      Texas De Brazil Restaurant
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 1 }}>
                      <Link
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor={"neutral.700"}
                      >
                        Tashkent, Yunus Abad 4-1
                      </Link>
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 1 }}>
                      <Link startDecorator={<CallIcon />} textColor={"neutral.700"}>
                        99890 3216547
                      </Link>
                    </Typography>
                    <CardOverflow
                      variant="soft"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        borderColor: "neutral.outlinedBorder",
                        bgcolor: "background.level1",
                      }}
                    >
                      <Typography
                        level="body-md"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        1000{" "}
                        <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        level="body-md"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div>500</div>
                        <FavoriteIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>  
                )
               })} 
            </CssVarsProvider>
                </Stack>
                <Stack className="bottom_box">
            <img src="/icons/right_angel.svg" className="line_img" alt="" />
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForward,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
            <img src="/icons/right_angel.svg" className="line_img_two" alt="" />
          </Stack>
        </Stack>
        </Container>
    </div>
}