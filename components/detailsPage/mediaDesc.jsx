import { Button, Collapse, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";

const MediaDesc = (props) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <ListItem>
        <Text as="span" fontSize="lg" fontWeight={{ base: "500", lg: "600" }}>
          {props.title}:{" "}
        </Text>
        {props.description ? (
          <>
            {props.description.length >= 900 ? (
              <>
                <Collapse startingHeight={165} in={show}>
                  {props.description}
                </Collapse>
                <Button
                  size="sm"
                  onClick={handleToggle}
                  mt="0.5rem"
                  variant="ghost"
                  _focus={{ outline: "none" }}
                >
                  Show {show ? "Less" : "More"}
                </Button>
              </>
            ) : (
              props.description
            )}
          </>
        ) : (
          "-"
        )}
      </ListItem>
    </>
  );
};

export default MediaDesc;
