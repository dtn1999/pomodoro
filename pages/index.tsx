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
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
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
              <Tab _selected={{ color: "#111426", bg: "#F26D6D" }}>
                pomodoro
              </Tab>
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
                      flexDir="column"
                    >
                      <Text fontSize="6xl" fontWeight="bold" color="#D0D9F2">
                        17:59
                      </Text>
                      <Text
                        letterSpacing="0.4rem"
                        textTransform="uppercase"
                        color="#D0D9F2"
                      >
                        pause
                      </Text>
                    </Box>

                    <CircularProgress
                      size="100%"
                      value={50}
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
          {/*  settings icon */}
          <Box cursor="pointer" onClick={onOpen}>
            <SettingsIcon w={6} h={6} color="#737896" />
          </Box>
        </Flex>
      </Flex>
      {/*  Model  */}
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            =
            <Text>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              libero nesciunt, accusantium nam veritatis quia laboriosam numquam
              repellat distinctio omnis reiciendis nemo ducimus saepe, fugit
              harum minus provident. Ad, reiciendis?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
