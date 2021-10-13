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
import { Howl, Howler } from "howler";

import type { NextPage } from "next";
import React from "react";
import Timer from "../components/Timer";
import SettingDialogModal from "../components/SettingDialogModal";
import { Config } from "../types/types";

Howler.mute(false);
Howler.volume(1);

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeConfig, setTimeConfig] = React.useState<Config>({
    break: 5,
    pomodoro: 25,
  });
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
      <SettingDialogModal
        onApply={setTimeConfig}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Home;
