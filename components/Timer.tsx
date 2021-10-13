import { Box, Text, CircularProgress } from "@chakra-ui/react";
import { differenceInMinutes, differenceInSeconds } from "date-fns";
import ReactHowler from "react-howler";

import React from "react";

interface Props {
  duration: number;
  nextStep: string;
  onCompletion: () => void;
}

const Timer: React.FC<Props> = React.memo(
  ({ duration, nextStep, onCompletion }) => {
    const startTime = React.useMemo(() => new Date(), [duration]);
    const [remainingTime, setRemainingTime] = React.useState<string>("");
    const [progression, setProgression] = React.useState<number>(100);
    const [playing, setPlaying] = React.useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = React.useState<boolean>(false);

    React.useEffect(() => {
      const interval = setInterval(() => {
        if (!timeElapsed) {
          const min = duration - 1 - differenceInMinutes(new Date(), startTime);
          const sec = 59 - (differenceInSeconds(new Date(), startTime) % 60);
          setRemainingTime(`${min}:${sec < 10 ? "0" + sec : sec}`);
          /*  update progression  */
          const updatedProgression = ((min * 60 + sec) / (duration * 60)) * 100;
          setProgression(updatedProgression);
          if (min === 0 && sec === 0) {
            setPlaying(true);
            setTimeElapsed(true);
          }
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [duration, timeElapsed]);
    return (
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
              {remainingTime}
            </Text>
            <Text
              letterSpacing="0.4rem"
              textTransform="uppercase"
              mt="1rem"
              color="#D0D9F2"
            >
              {nextStep}
            </Text>
          </Box>

          <CircularProgress
            size="100%"
            value={progression}
            thickness="2px"
            color="#F26D6D"
            bgColor=""
            trackColor="#111426"
          />
        </Box>
        <ReactHowler
          src="/beeper-working-time.mp3"
          playing={playing}
          loop={false}
          onEnd={onCompletion}
        />
      </Box>
    );
  }
);

export default Timer;
