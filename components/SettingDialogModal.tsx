import {
  Box,
  Button,
  Flex,
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
} from "@chakra-ui/react";
import React from "react";
import { Config } from "../types/types";

interface Props {
  onApply: (config: Config) => void;
  isOpen: boolean;
  onClose: () => void;
}

const SettingDialogModal: React.FC<Props> = React.memo(
  ({ onApply, isOpen, onClose }) => {
    const [timeConfig, setTimeConfig] = React.useState<Config>({
      break: 5,
      pomodoro: 25,
    });
    const handleApply = React.useCallback(() => {
      onApply({ ...timeConfig });
      onClose();
    }, [timeConfig]);
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
                  value={timeConfig.pomodoro}
                  onChange={(a, value) => {
                    setTimeConfig({ ...timeConfig, pomodoro: value });
                  }}
                  min={2}
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
                  break
                </Text>
                <NumberInput
                  value={timeConfig.break}
                  onChange={(a, value) => {
                    setTimeConfig({ ...timeConfig, break: value });
                  }}
                  min={1}
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
              onClick={handleApply}
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
