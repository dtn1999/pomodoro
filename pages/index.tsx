import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  CircularProgress,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      width="100%"
      height="100Vh"
      bgColor="#1F2440"
    >
      <Flex direction="column" alignItems="center">
        <Heading color="#D0D9F2" mb={10}>
          pomodoro
        </Heading>
        {/*  render the tab panel */}
        <Tabs variant="solid-rounded">
          <TabList borderRadius="full" bgColor="#111426">
            <Tab _selected={{ color: "#111426", bg: "#F26D6D" }}>pomodoro</Tab>
            <Tab _selected={{ color: "#111426", bg: "#F26D6D" }}>
              short break
            </Tab>
            <Tab _selected={{ color: "#111426", bg: "#F26D6D" }}>
              long break
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                bg="#fff"
                display="flex"
                width="20rem"
                height="20rem"
                borderRadius="full"
                mt="4rem"
                shadow="timer"
                bgColor="#1E2140"
                p="1rem"
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  bg="#fff"
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  bgColor="#111426"
                  p="0rem"
                >
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="transparent"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text> 17:59 </Text>
                  </Box>

                  <CircularProgress
                    size="100%"
                    value={59}
                    thickness="2px"
                    color="#F26D6D"
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default Home;
