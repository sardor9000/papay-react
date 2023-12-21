import React, { useEffect } from 'react';
// import { Container } from "@mui/material";
import { Statistics } from './statistics';
import { TopRestaurants } from './topRestaurants';
import { BestRestaurants } from './bestRestaurants';
import { BestDishes } from './bestDishes';
import { Advertisements } from './advertisements';
import { Events } from './events';
import { Recommendations } from './recommendation';
import '../../../css/home.css'

export function HomePage() {
    
    // selector: store => data 

    useEffect(() => {
        // backendan datani request => data
        console.log("componentDidMount => Data fetch")

        return () => {
        console.log("run componentDidmount");
 
        }
    }, [])

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