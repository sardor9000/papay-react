import React, { useEffect, useState } from "react";
import { Badge, Box, Button, Container, IconButton, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { sweetTopSuccessAlert } from "../../../lib/sweetAlert";


export function NavbarHome(props: any) {
    // INITIALIZATION
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(true)

    useEffect(() => {
        setCount(count + 1)
    }, [value])

    return <div className="format home_navbar">
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
                    <Box className='hover-line' onClick={props.setPath}>
                        <NavLink to='/orders' activeClassName="underline">
                            Orders
                        </NavLink>
                    </Box>
                    <Box className='hover-line' onClick={props.setPath}>
                        <NavLink to='/community' activeClassName="underline">
                            Community
                        </NavLink>
                    </Box>
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
                        <Button variant="contained"
                            style={{
                                width: '210px',
                                height: '60px',
                                background: '#1976d2'
                            }}
                            onClick={props.handleSignUpOpen}
                        >
                            RO'YHATDAN O'TISH</Button>
                    </Box>
                </Stack>
                <Stack
                    flexDirection={'column'} >
                    <div className="big_img"></div>
                </Stack>
            </Stack>
        </Container> 
    </div>
}