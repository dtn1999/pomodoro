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

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeConfig, setTimeConfig] = React.useState<Config>({
    break: 1,
    pomodoro: 1,
  });
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(1);
  const handleTabsChange = React.useCallback(
    (index) => {
      setActiveTabIndex(index);
    },
    [activeTabIndex]
  );
  const handleTimerCompletion = React.useCallback(() => {
    if (activeTabIndex === 1) {
      setActiveTabIndex(2);
    } else {
      setActiveTabIndex(1);
    }
    setTimeConfig({ ...timeConfig });
  }, [timeConfig]);
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
              bgColor="#111426"
              p="0.25rem"
            >
              <Tab
                isDisabled={activeTabIndex !== 1}
                fontSize="sm"
                px="1.5rem"
                _selected={{ color: "#111426", bg: "#F26D6D" }}
              >
                pomodoro
              </Tab>
              <Tab
                isDisabled={activeTabIndex !== 2}
                fontSize="sm"
                px="1.5rem"
                _selected={{ color: "#111426", bg: "#F26D6D" }}
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
              <TabPanel>
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
