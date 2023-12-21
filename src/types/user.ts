import { MeFollowed } from "./follow";
import { MeLiked } from "./product";

export interface Restaurant {
    _id: String;
    mb_nick: string,
    mb_phone: string,
    mb_password: string,
    mb_type: string,
    mb_status: string,
    mb_address: string,
    mb_description: string,
    mb_image: string,
    mb_point: number,
    mb_top: string,
    mb_views: number,
    mb_likes: number,
    mb_follow_cnt: number,
    mb_subscriber: number,
    createdAt: Date,
    mb_liked: MeLiked[]    // Me liked
}

export interface Member {
    _id: String;
    mb_nick: string,
    mb_phone: string,
    mb_password: string,
    mb_type: string,
    mb_status: string,
    mb_address?: string,
    mb_description?: string,
    mb_image?: string,
    mb_point?: number,
    mb_top?: string,
    mb_views: number,
    mb_likes: number,
    mb_follow_cnt: number,
    mb_subscriber: number,
    createdAt: Date,
    mb_liked: MeLiked[];
    me_followed: MeFollowed[]; 
}

