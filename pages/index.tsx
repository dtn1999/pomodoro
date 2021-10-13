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
import {
  defaultConfig,
  loadUserAppConfig,
  saveUserAppConfig,
} from "../storage/storageUtils";

Howler.mute(false);
Howler.volume(1);

const Home: NextPage = React.memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userConfig, setUserConfig] = React.useState<Config>();

  /*  use effects to load default user config */

  React.useEffect(() => {
    const initialConfig: Config = loadUserAppConfig();
    setUserConfig({ ...initialConfig });
    // on page unmount save config again
    return () => {
      saveUserAppConfig(userConfig || defaultConfig);
    };
  }, []);

  /*  handler functions  */
  // track the active tab index
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);

  // programmatically change tab on completion
  const handleTabsChange = React.useCallback(
    (index) => {
      setActiveTabIndex(index);
    },
    [activeTabIndex]
  );

  // on apply save changed to the localStorage
  const handleSettingsApply = React.useCallback(
    (newConfig: Config) => {
      setUserConfig(newConfig);
      // save changes to local storage
      saveUserAppConfig(newConfig);
    },
    [userConfig]
  );

  // reset timer config each time a section is completed
  const handleTimerCompletion = React.useCallback(() => {
    if (activeTabIndex === 0) {
      handleTabsChange(1);
    } else {
      handleTabsChange(0);
    }
    setUserConfig(userConfig);
  }, [userConfig, activeTabIndex]);
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
                  duration={userConfig?.pomodoro || defaultConfig.pomodoro}
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
                  duration={userConfig?.break || defaultConfig.break}
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
        initialValue={userConfig || defaultConfig}
        onApply={setUserConfig}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
});

export default Home;
