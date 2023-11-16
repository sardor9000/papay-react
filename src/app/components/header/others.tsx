import {
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";



export function NavbarOthers(props: any) {
    return (<div className="format_others home_navbar">
        <Container>
            <Stack flexDirection={'row'}
                className="navbar_config"
                justifyContent={'space-between'}>
                <Box>
                    <img src="/icons/papay.svg" />
                </Box>
                <Stack flexDirection={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    className="navbar_links"
                >
                    <Box className='hover-line' onClick={props.setPath}>
                        <NavLink to='/'>
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
                                <img src="/icons/shopping-cart.svg" />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box>
                        <Button variant="contained"
                            style={{
                                color: "#fffff",
                                background: "#1976d2"
                            }}
                        >
                            KIRISH
                        </Button>
                    </Box>

                </Stack>
            </Stack>
        </Container>
    </div>
    );
}
