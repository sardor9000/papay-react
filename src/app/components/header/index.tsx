import React, { useEffect, useState } from "react";
import { Badge, Box, Button, Container, IconButton, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { sweetTopSuccessAlert } from "../../../lib/sweetAlert";
import { Logout } from "@mui/icons-material";


export function NavbarHome(props: any) {
    // INITIALIZATION
   

    return( <div className="format home_navbar">
        <Container>
            <Stack flexDirection={'row'}
                className="navbar_config"
                justifyContent={'space-between'}>
                <Box>
                    <img src="/icons/papay.svg"/>
                </Box>
                <Stack flexDirection={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    className="navbar_links"
                >
                    <Box className='hover-line' onClick={props.setPath}>
                        <NavLink to='/' activeClassName="underline">
                            Bosh Sahifa
                        </NavLink>
                    </Box>
                    <Box className='hover-line' onClick={props.setPath}>
                        <NavLink to='/restaurant' activeClassName="underline">
                            Restaurant
                        </NavLink>
                    </Box>
                    {props.verifiedMemberData ? (
                     <Box className='hover-line' onClick={props.setPath}>
                     <NavLink to='/orders' activeClassName="underline">
                         Orders
                     </NavLink>
                 </Box>
                    ) : null};
                   
                    <Box className='hover-line' onClick={props.setPath}>
                        <NavLink to='/community' activeClassName="underline">
                            Community
                        </NavLink>
                    </Box>
                    {props.verifiedMemberData ? (
                     <Box className='hover-line' onClick={props.setPath}>
                     <NavLink to='/member-page' activeClassName="underline">
                         Sahifam
                     </NavLink>
                 </Box>
                    ) : null};
                    
                    <Box className='hover-line' onClick={props.setPath}>
                        <NavLink to='/help' activeClassName="underline">
                            Help
                        </NavLink>
                    </Box>
                    <Box className='hover-line'>
                        <IconButton
                            aria-label="cart"
                            id="basic-button"
                            aria-controls={undefined}
                            aria-haspopup="true"
                            aria-expanded={undefined}
                            // onClick={handClick}
                        >
                            <Badge badgeContent={3} color="secondary">
                                <img src="/icons/shopping-cart.svg"/>
                            </Badge>
                       </IconButton>
                    </Box>
                    {!props.verifiedMemberData ? (
                        <Box>
                            <Button
                                variant="contained"
                                style={{
                                    color: "#fffff",
                                    background: "#1976d2"
                                }}
                                onClick={props.handleLoginOpen}
                            >
                                KIRISH</Button>
                        </Box>
                    ) :
                        <img
                            style={{ width: '48px', height: "48px", borderRadius: '24px' }}
                            src={props.verifiedMemberData.mb_image}
                        onClick={props.handleLogOutClick}/>
                    };

            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin = {{horizontal: 'right',vertical: 'top' }}
              anchorOrigin={{horizontal: 'right',vertical: 'bottom'}}
            >
              <MenuItem 
              onClick={props.handleLogOutRequest}
              >
                <ListItemIcon>
                  <Logout fontSize="small" style={{color: "blue"}}/>
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
                    

                </Stack>
            </Stack>

            <Stack className="head_information">
                <Stack justifyContent={'column'} sx={{ marginTop: "86px", marginLeft: "24px" }}>
                    <Box>
                    <img src="/icons/welcomes.svg"/>
                    </Box>
                    <Box className="define_restaurat">
                    The Authentic  Restaurant & Cafe
                    </Box>
                    <Box className="timeline_service">
                        24 soat xizmatingizdamiz.
                    </Box>
                    <Box sx={{mt: '90px'}}>
                        {!props.verifiedMemberData ? (
                            <Button variant="contained"
                            style={{
                                width: '210px',
                                height: '60px',
                                background: '#1976d2'
                            }}
                            onClick={props.handleSignUpOpen}
                        >
                            RO'YHATDAN O'TISH
                        </Button>
                        ) : null }
                    </Box>
                </Stack>
                <Stack
                    flexDirection={'column'} >
                    <div className="big_img"></div>
                </Stack>
            </Stack>
        </Container> 
    </div>
)}