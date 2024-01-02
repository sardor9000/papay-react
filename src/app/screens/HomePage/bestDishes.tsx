import { MonetizationOn } from '@mui/icons-material';
import { Box, Container, Stack } from '@mui/material';
import React, { useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { Product } from '../../../types/product';
import { setTrendProducts } from './slice';
import ProductApiService from '../../apiServices/productApiService';
import { createSelector } from 'reselect';
import { retrieveTrendProducts } from "./selector";
import { serverApi } from '../../../lib/config';
import { useHistory } from 'react-router-dom';

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTrendProducts: (data: Product[]) => dispach(setTrendProducts(data)),
});

// REDUX SELECTOR
const trendProductRetriever = createSelector(
    retrieveTrendProducts,
    (trendProducts) => ({
        trendProducts
    })
);

export function BestDishes() {
    // INITIALIZATION
    const history = useHistory();
    const {setTrendProducts } = actionDispatch(useDispatch());
    const { trendProducts } = useSelector(trendProductRetriever);
    useEffect(() => {
        const productService = new ProductApiService();
        productService.getTargetdProducts({ order: "product_likes", page: 1, limit: 4, })
            .then((data) => setTrendProducts(data))
            .catch(err => console.log(err))
    }, [])

    /** HANDLERS */

    const chosenDishHandler = (id: string) => {
        history.push(`/restaurant/dish/${id}`);
    }


    return (
        <div className='best_dishes_frame'>
            <Container>
                <Stack flexDirection={'column'} alignItems={'center'} sx={{ mt: "71px"}}>
                <Box className="category_title">Trendagi Ovqatlar</Box>
                    <Stack sx={{ mt: "43px" }} flexDirection={'row'}>
                        {trendProducts.map((product: Product) => {
                            const image_path = `${serverApi}/${product.product_images[0]}`;
                            const size_volume =
                                product.product_collection === "drink"
                                    ? product.product_volume + "l"
                                    : product.product_size + "size";
                            return (
                                <Box className="dish_box">
                            <Stack
                                className="dish_img"
                                        sx={{
                                    backgroundImage: `url(${image_path})`
                                }}
                            >
                                        <div className={"dish_sale"}>{ size_volume}</div>
                                        <div className={"view_btn"}
                                        onClick={() => chosenDishHandler(product._id)}>
                                    Batafsil ko'rish
                                    <img
                                        src={"/icons/arrow_right.svg"}
                                        style={{marginLeft: "9px"}}
                                    />
                                </div>
                            </Stack>
                            <Stack className={"dish_desc"}>
                                        <span className={"dish_title_text"}>{ product.product_name}</span>
                                <span className={"dish_desc_text"}>
                                    <MonetizationOn />
                                    11
                                </span>

                            </Stack> 
                        </Box>
                            )
                        })}
                        
                </Stack>
                </Stack>
            </Container>
        </div>
    )
} 