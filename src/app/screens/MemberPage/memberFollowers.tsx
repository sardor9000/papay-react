import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

//Redux
import { useSelector,useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from '@reduxjs/toolkit';
import { setMemberFollowers } from './slice';
import { retriveMemberFollowers } from './selector';
import { Follower } from "../../../types/follow";


// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) =>
    dispach(setMemberFollowers(data)),
});
  
//** Redux Selector */
const memberFollowersRetriever = createSelector(
  retriveMemberFollowers,
    (memberFollowers) => ({
      memberFollowers,
    })
);


const followers = [
  { mb_nick: "shimomoto", following: true },
  { mb_nick: "yoganglam", following: false },
  { mb_nick: "larisa", following: true },
];

export function MemberFollowers(props: any) {
    // INITIALIZATION
    const { setMemberFollowers } = actionDispatch(useDispatch());
    const { memberFollowers } = useSelector(memberFollowersRetriever);
    
  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/community/cute_girl.jpeg";
        return (
          <Box className={"follow_box"}>
            <Avatar src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className="username_text">USER</span>
              <span className="name_text">{follower.mb_nick}</span>
            </div>
            {props.actions_enabled &&
              (follower.following ? (
                <Button
                  variant="contained"
                  className="following_already"
                  disabled
                >
                  FOLLOWING
                </Button>
            ) : (
                
                <Button
                  variant="contained"
                  startIcon={
                    <img src="/icons/user.svg" style={{ width: "40px" }} />
                  }
                  className="follow_btn"
                >
                  Follow back
                </Button>
              ))}
          </Box>
        );
      })}
    </Stack>
  );
}