import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { ThemeExchanger } from "../context/ThemeExchangerContext";
import { Config } from "../types/types";
import ColorRadio from "./ColorRadio";

interface Props {
  onApply: (config: Config) => void;
  initialValue: Config;
  isOpen: boolean;
  onClose: () => void;
}

const SettingDialogModal: React.FC<Props> = React.memo(
  ({ onApply, isOpen, onClose, initialValue }) => {
    const { handlePrimaryColorChange } = React.useContext(ThemeExchanger);

    const [timeConfig, setTimeConfig] = React.useState<Config>({
      ...initialValue,
    });

    const handleApply = React.useCallback(() => {
      onApply({ ...timeConfig });
      // set new primary color before closing the setting
      handlePrimaryColorChange(timeConfig.color);
      onClose();
    }, [timeConfig]);

    const handleColorChange = React.useCallback(
      (nextColor: any) => {
        setTimeConfig({ ...timeConfig, color: nextColor });
      },
      [timeConfig]
    );

    // Custom color selection
    const options = ["#F26D6D", "#72F2F2", "#D080F2"];
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "framework",
      value: timeConfig.color,
      onChange: handleColorChange,
    });
    const group = getRootProps();
    return (
      <Modal
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton color="darkKText" />
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
                <Text fontWeight="thin" color="darkKText">
                  pomodoro
                </Text>
                <NumberInput
                  value={timeConfig.pomodoro}
                  onChange={(a, value) => {
                    setTimeConfig({ ...timeConfig, pomodoro: value });
                  }}
                  min={2}
                  bgColor="text"
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
                <Text fontWeight="thin" color="darkKText">
                  break
                </Text>
                <NumberInput
                  value={timeConfig.break}
                  onChange={(a, value) => {
                    setTimeConfig({ ...timeConfig, break: value });
                  }}
                  min={1}
                  bgColor="text"
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
            {/*  color selection */}
            <Flex flexDir="row" justifyContent="space-between" my="1rem">
              <Text
                fontWeight="medium"
                color="darkKText"
                letterSpacing="widest"
              >
                Color
              </Text>
              <HStack {...group}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return <ColorRadio key={value} radio={radio} color={value} />;
                })}
              </HStack>
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
              bgColor="primary"
              onClick={handleApply}
              _hover={{
                backgroundColor: "text",
                border: "2px",
                borderColor: "primary",
                color: "primary",
              }}
            >
              apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);

export default SettingDialogModal;
