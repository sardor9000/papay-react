

import React from 'react';
import { Favorite, LocationOnRounded, Visibility } from '@mui/icons-material';
import { AspectRatio, Card, CardOverflow, CssVarsProvider, IconButton, Typography, Link } from '@mui/joy';
import { Box, Button, Container, Stack } from '@mui/material';
import CallIcon from "@mui/icons-material/Call"

export function BestRestaurants() {
    return (
        <div className='best_restaurant_frame'>
            <img src={"icons/line_group.svg"}
            style={{position: "absolute", left: "6%", transform: "rotate(0deg)"}} />
            <Container sx={{ mt: "153px" }} >
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Box className="category_title">Zo'r Restaurantlar</Box>
                    <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
                        <CssVarsProvider>
                            <Card
                                variant="outlined"
                                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio="1">
                                        <img src={"restaurant/burak.jpg" } />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label='Like minimal photography'
                                        size="md"
                                        variant="solid"
                                        color="neutral"
                                        sx={{
                                            position: "absolute",
                                            zIndex: 2,
                                            borderRadius: "50%",
                                            right: "rem",
                                            bottom: 0,
                                            transform: "translateY(50%)",
                                            color: "rgba(0,0,0,.4)"
                                        }}
                                    >
                                        <Favorite
                                            style={{
                                            color: "white",
                                        }}/>

                                    </IconButton>
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", mt: 2}}>
                                    Texas De Brazil Restaurant
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<LocationOnRounded />}
                                        textColor="neutral.700"
                                    >
                                        Tashkent, Yunus Abad 4-1
                                    </Link>
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                        +99890 7743234
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outlinedBorder",
                                        bgcolor: "background.level1",
                                        flexDirection: "row",


                                    }}
                                >
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        100{" "}
                                        <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        <div>500</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}} />
                                        

                                    </Typography>

                                </CardOverflow>
                            </Card>

                            <Card
                                variant="outlined"
                                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio="1">
                                        <img src={"restaurant/burak.jpg" } />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label='Like minimal photography'
                                        size="md"
                                        variant="solid"
                                        color="neutral"
                                        sx={{
                                            position: "absolute",
                                            zIndex: 2,
                                            borderRadius: "50%",
                                            right: "rem",
                                            bottom: 0,
                                            transform: "translateY(50%)",
                                            color: "rgba(0,0,0,.4)"
                                        }}
                                    >
                                        <Favorite
                                            style={{
                                            color: "white",
                                        }}/>

                                    </IconButton>
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", mt: 2}}>
                                    Texas De Brazil Restaurant
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<LocationOnRounded />}
                                        textColor="neutral.700"
                                    >
                                        Tashkent, Yunus Abad 4-1
                                    </Link>
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                        +99890 7743234
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outlinedBorder",
                                        bgcolor: "background.level1",
                                        flexDirection: "row",


                                    }}
                                >
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        100{" "}
                                        <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        <div>500</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}} />
                                        

                                    </Typography>

                                </CardOverflow>
                            </Card>

                            <Card
                                variant="outlined"
                                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio="1">
                                        <img src={"restaurant/burak.jpg" } />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label='Like minimal photography'
                                        size="md"
                                        variant="solid"
                                        color="neutral"
                                        sx={{
                                            position: "absolute",
                                            zIndex: 2,
                                            borderRadius: "50%",
                                            right: "rem",
                                            bottom: 0,
                                            transform: "translateY(50%)",
                                            color: "rgba(0,0,0,.4)"
                                        }}
                                    >
                                        <Favorite
                                            style={{
                                            color: "white",
                                        }}/>

                                    </IconButton>
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", mt: 2}}>
                                    Texas De Brazil Restaurant
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<LocationOnRounded />}
                                        textColor="neutral.700"
                                    >
                                        Tashkent, Yunus Abad 4-1
                                    </Link>
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                        +99890 7743234
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outlinedBorder",
                                        bgcolor: "background.level1",
                                        flexDirection: "row",


                                    }}
                                >
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        100{" "}
                                        <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        <div>500</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}} />
                                        

                                    </Typography>

                                </CardOverflow>
                            </Card>

                            <Card
                                variant="outlined"
                                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio="1">
                                        <img src={"restaurant/burak.jpg" } />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label='Like minimal photography'
                                        size="md"
                                        variant="solid"
                                        color="neutral"
                                        sx={{
                                            position: "absolute",
                                            zIndex: 2,
                                            borderRadius: "50%",
                                            right: "rem",
                                            bottom: 0,
                                            transform: "translateY(50%)",
                                            color: "rgba(0,0,0,.4)"
                                        }}
                                    >
                                        <Favorite
                                            style={{
                                            color: "white",
                                        }}/>

                                    </IconButton>
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", mt: 2}}>
                                    Texas De Brazil Restaurant
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<LocationOnRounded />}
                                        textColor="neutral.700"
                                    >
                                        Tashkent, Yunus Abad 4-1
                                    </Link>
                                </Typography>
                                <Typography level="body-sm" sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=""
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                        +99890 7743234
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outlinedBorder",
                                        bgcolor: "background.level1",
                                        flexDirection: "row",


                                    }}
                                >
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        100{" "}
                                        <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                                    </Typography>
                                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                                    <Typography
                                        level="body-sm"
                                        sx={{
                                            fontWeight: "md",
                                            color: "text.secondary",
                                            alignItems: "center",
                                            display: "flex",
                                        }}
                                    >
                                        <div>500</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}} />
                                        

                                    </Typography>

                                </CardOverflow>
                            </Card>
                        </CssVarsProvider>
                    </Stack>

                    <Stack
                        flexDirection={"row"}
                        justifyContent={'flex-end'}
                        style={{ width: "100%", marginTop: "16px" }}>
                        <Button
                            style={{ background: "#1976d2", color: "#ffffff" }}>
                            Barchasini Ko'rish
                        </Button>
                    </Stack>

                </Stack>
            </Container>
        </div>
    )
} 