import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";
import { RestaurantPage } from ".";


const selecetRestaurantPage = (state: AppRootState) => state.restaurantPage;
export const retrieveTargetRestaurants = createSelector(
    selecetRestaurantPage,
    (RestaurantPage) => RestaurantPage.targetRestaurants
);
export const retrieveRandomRestaurants = createSelector(
    selecetRestaurantPage,
    (RestaurantPage) => RestaurantPage.randomRestaurants
);

export const retrieveChosenRestaurants = createSelector(
    selecetRestaurantPage,
    (RestaurantPage) => RestaurantPage.chosenRestaurant
);

export const retrieveTargetProducts = createSelector(
    selecetRestaurantPage,
    (RestaurantPage) => RestaurantPage.targetProducts
);

export const retrieveChosenDish = createSelector(
    selecetRestaurantPage,
    (RestaurantPage) => RestaurantPage.chosenProduct
);

