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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import type { NextPage } from "next";
import React from "react";
import Timer from "../components/Timer";

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
            <TabList borderRadius="full" bgColor="#111426" p="0.25rem">
              <Tab
                fontSize="sm"
                px="1.5rem"
                _selected={{ color: "#111426", bg: "#F26D6D" }}
              >
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
                <Timer duration={1} nextStep="pause" />
              </TabPanel>
              <TabPanel>
                <Timer duration={25} nextStep="pause" />
              </TabPanel>
              <TabPanel>
                <Timer duration={25} nextStep="pause" />
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
      <Modal
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton color="#737896" />
          <ModalBody pb={6} borderTop="1px" borderTopColor="gray.100">
            <Text
              fontSize="large"
              fontStyle="bold"
              textTransform="uppercase"
              letterSpacing="0.2rem"
            >
              Time (Minutes)
            </Text>
            <Flex direction="row" experimental_spaceX="2" py="2rem">
              {/*  pomodoro */}
              <Box>
                <Text fontWeight="thin" color="#737896">
                  pomodoro
                </Text>
                <NumberInput
                  defaultValue={15}
                  min={10}
                  max={20}
                  bgColor="#D0D9F2"
                  borderRadius="md"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
              {/*  short break*/}
              <Box>
                <Text fontWeight="thin" color="#737896">
                  short break{" "}
                </Text>
                <NumberInput
                  defaultValue={15}
                  min={10}
                  max={20}
                  bgColor="#D0D9F2"
                  borderRadius="md"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
              {/*  long break */}
              <Box>
                <Text fontWeight="thin" color="#737896">
                  long break
                </Text>
                <NumberInput
                  defaultValue={15}
                  min={10}
                  max={20}
                  bgColor="#D0D9F2"
                  borderRadius="md"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter
            position="absolute"
            display="flex"
            flexDir="row"
            justifyContent="center"
            bottom="-8"
            left="0"
            right="0"
          >
            <Button
              colorScheme="blue"
              mr={3}
              textTransform="capitalize"
              borderRadius="full"
              px="4rem"
              bgColor="#F26D6D"
            >
              apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
