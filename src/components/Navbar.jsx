import React from "react";
import { Box, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = ({ username, onSignOut }) => {
  return (
    <Box bg="gray.100" py={4} px={8} display="flex" alignItems="center">
      <Heading as="h1" size="xl">
        <Link to="/">Convergenous</Link>
      </Heading>
      <Spacer />
      {username && (
        <Button colorScheme="blue" onClick={onSignOut}>
          Sign Out
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
