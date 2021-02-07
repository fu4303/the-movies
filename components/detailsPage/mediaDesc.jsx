import { useState } from "react";
import { Button, Collapse, ListItem, Text } from "@chakra-ui/react";

const MediaDesc = (props) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const { title, description } = props;

  return (
    <>
      <ListItem>
        <Text as="span" fontSize="lg" fontWeight={{ base: "500", lg: "600" }}>
          {title}:{" "}
        </Text>
        {description ? (
          <>
            {description.length >= 900 ? (
              <>
                <Collapse startingHeight={165} in={show}>
                  {description}
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
              description
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
