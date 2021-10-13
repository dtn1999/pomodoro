import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Howler } from "howler";

import type { NextPage } from "next";
import React from "react";
import Timer from "../components/Timer";
import SettingDialogModal from "../components/SettingDialogModal";
import { Config } from "../types/types";

Howler.mute(false);
Howler.volume(1);

const Home: NextPage = React.memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [timeConfig, setTimeConfig] = React.useState<Config>({
    break: 1,
    pomodoro: 1,
  });
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);
  const handleTabsChange = React.useCallback(
    (index) => {
      setActiveTabIndex(index);
    },
    [activeTabIndex]
  );
  const handleTimerCompletion = React.useCallback(() => {
    if (activeTabIndex === 0) {
      handleTabsChange(1);
    } else {
      handleTabsChange(0);
    }
    setTimeConfig({ ...timeConfig });
  }, [timeConfig, activeTabIndex]);
  return (
    <>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100Vh"
        bgColor="bgColor"
      >
        <Flex direction="column" alignItems="center">
          <Heading color="text" mb={10}>
            pomodoro
          </Heading>
          {/*  render the tab panel */}
          <Tabs
            variant="solid-rounded"
            isLazy
            isFitted
            index={activeTabIndex}
            onChange={handleTabsChange}
          >
            <TabList
              borderRadius="full"
              display="flex"
              flexDir="row"
              justifyContent="space-between"
              bgColor="dark"
              p="0.25rem"
            >
              <Tab
                isDisabled={activeTabIndex !== 0}
                fontSize="sm"
                px="1.5rem"
                _selected={{ color: "dark", bg: "primary" }}
              >
                pomodoro
              </Tab>
              <Tab
                isDisabled={activeTabIndex !== 1}
                fontSize="sm"
                px="1.5rem"
                _selected={{ color: "dark", bg: "primary" }}
              >
                break
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Timer
                  duration={timeConfig.pomodoro}
                  nextStep="break"
                  onCompletion={handleTimerCompletion}
                />
              </TabPanel>
              <TabPanel
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Timer
                  duration={timeConfig.break}
                  nextStep="pomodoro"
                  onCompletion={handleTimerCompletion}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/*  settings icon */}
          <Box cursor="pointer" onClick={onOpen}>
            <SettingsIcon w={6} h={6} color="darkText" />
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
});

export default Home;
