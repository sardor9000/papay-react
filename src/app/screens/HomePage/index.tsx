import React, { useEffect } from 'react';
import { Container } from "@mui/material";
import { Statistics } from './statistics';
import { TopRestaurants } from './topRestaurants';
import { BestRestaurants } from './bestRestaurants';
import { BestDishes } from './bestDishes';
import { Advertisements } from './advertisements';
import { Events } from './events';
import { Recommendations } from './recommendation';
import '../../../css/home.css';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import {setTopRestaurants, bestRestaurants } from "../../screens/HomePage/slice";
import {retrieveBestRestaurants, retrieveTopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from '../../../types/user';
import RestaurantApiService from '../../apiServices/restaurantApiService';

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
    setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
});
// REDUX SELECTOR
const topRestaurantRetriever = createSelector(
    retrieveTopRestaurants,
    (topRestaurants) => ({
        topRestaurants
    })
);

export function HomePage() {
    // INITIALIZATION
    const { setTopRestaurants } = actionDispatch(useDispatch());
  
    useEffect(() => {
        // backendan datani request => data
    const restaurantService = new RestaurantApiService();
        restaurantService
            .getTopRestaurants()
            .then(data => {
        setTopRestaurants(data);
            })
            .catch(err => console.log(err));

    },
[]);

    return <div className="homepage">
        <Statistics />
        <TopRestaurants />
        <BestRestaurants />
        <BestDishes />
        <Advertisements />
        <Events />
        <Recommendations />
    </div>

    
};