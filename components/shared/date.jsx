import { Box } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

const Date = (props) => {
  const date = parseISO(props.datestring);

  return (
    <>
      <Box as="time" dateTime={props.datestring} {...props}>
        {format(date, "LLLL d, yyyy")}
      </Box>
    </>
  );
};

export default Date;
