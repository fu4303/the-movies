import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const getPathColor = (value) => {
  if (value > 0 && value < 33.33) {
    // Red
    return "#ef233c";
  } else if (value > 3.3 && value < 66.66) {
    // Light Orange
    return "#ffd000";
  } else if (value > 66.66) {
    // Green
    return "#21d07a";
  }
};

const circularProgressbar = (props) => (
  <>
    <Box {...props}>
      <CircularProgress
        size={props.size}
        max="10"
        bgColor="#27272A"
        rounded="full"
        boxShadow="lg"
        value={props.value}
        thickness="8px"
        trackColor="#4e4e69"
        color={getPathColor(Math.round((props.value * 100) / 10))}
      >
        <CircularProgressLabel
          color="white"
          fontSize={props.fontSize}
          fontWeight="600"
        >
          {props.value !== 0
            ? `${Math.round((props.value * 100) / 10)}%`
            : "NR"}
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  </>
);

export default circularProgressbar;
