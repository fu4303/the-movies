import { Input } from "@chakra-ui/react";

const SearchBar = ({ isWidthFull }) => {
  return (
    <>
      <Input placeholder="Search..." w={isWidthFull ? "full" : "25%"} />
    </>
  );
};

export default SearchBar;
