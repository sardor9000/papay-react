import React, { useState } from 'react';
import { Container, Box, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Pagination from '@mui/material/Pagination';
import "../../../css/community.css"
import { TargetArticles } from './targetAticles';
import { CommunityChats } from './communityChats';
import { TabContext } from '@mui/lab';
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackForward from '@mui/icons-material/ArrowForward';
import { ArrowForward } from '@mui/icons-material';

const targetAticles = [1, 2, 3, 4, 5]

export function CommunityPage(props: any) {
    // INITIALIZATION
    const [Value, setValue] = React.useState("1")

    // HANDLERS
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const handlePaginationChange = (event: any, value: number) => {
        console.log(value);
        
    };

    return <div className='community_page'>
        <div className={"community_frame"}>
            <Container sx={{ mt: "50px", mb: "50px" }}>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <CommunityChats />
                    <Stack
                        className={"community_all_frame"}
                        inputMode={"text"}
                        style={{ border: "1px solid #fff" }}
                    >
                        <TabContext value={Value}>
                            <Box className={"article_tabs"}>
                                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                    <TabList
                                        // value={Value}
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                        style={{ borderColor: "blue" }}
                                    >
                                        <Tab label="Barcha maqolalar" value={"1"} />
                                        <Tab label="Mashxurlar" value={"2"} />
                                        <Tab label="Oshhonaga baho" value={"3"} />
                                        <Tab label="Hikoyalar" value={"4"} />
                                    </TabList>
                                </Box>
                            </Box>

                            <Box className={"aeticle_main"}>
                                <TabPanel value={"1"}>
                                    <TargetArticles targetBoArticles={targetAticles} />
                                </TabPanel>
                                <TabPanel value={"2"}>
                                    <TargetArticles targetBoArticles={targetAticles} />
                                </TabPanel>
                                <TabPanel value={"3"}>
                                    <TargetArticles targetBoArticles={targetAticles} />
                                </TabPanel>
                                <TabPanel value={"4"}>
                                    <TargetArticles targetBoArticles={targetAticles} />
                                </TabPanel>
                            </Box>

                            <Box className={"article_bott"}>
                                <Pagination
                                    count={3}
                                    page={1}
                                    renderItem={(item) => (
                                        <PaginationItem
                                            components={{
                                                previous: ArrowBackIcon,
                                                next: ArrowForward,
                                            }}
                                            {...item}
                                            color={"secondary"}
                                        />
                                    )}
                                    onChange={handlePaginationChange}
                                />
                            </Box>
                        </TabContext>
                    </Stack>
                </Stack>
            </Container>
        </div>
    </div>
};