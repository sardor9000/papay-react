import { BoArticle } from "./boArticle";
import { Follower, Following } from "./follow";
import { Order } from "./order";
import { Product } from "./product";
import { Member, Restaurant } from "./user";


/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;
    ordersPage: OrdersPageState;
    communityPage: CommunityPageState;
    memberPage: MemeberPageState;
}


/**  HOMEPAGE  */
export interface HomePageState{
    topRestaturants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoArticles: BoArticle[];
    trendBoArticles: BoArticle[];
    newsBoArticles: BoArticle[];
}

/**   RESTAURANT PAGE  */
export interface RestaurantPageState {
    targetRestaurants: Restaurant[];
    randomRestaurants: Restaurant[];
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
}

/** Orders */
export interface OrdersPageState {
    pausedOrders: Order[],
    processOrders: Order[],
    finishedOrders: Order[]
}

/** Community Page */
export interface CommunityPageState {
    targetBoArticles: BoArticle[];
}


/** MEMBER PAGE */
export interface MemeberPageState {
    chosenMember: Member | null;
    chosenMemberBoArticles: BoArticle[];
    chosenSingleBoArticle?: BoArticle | null;
    memberFollowers: Follower[];
    memberFollowings: Following[];
}