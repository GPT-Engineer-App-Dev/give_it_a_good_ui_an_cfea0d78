import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" py={4} px={8} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Convergenous. All rights reserved.</Text>
      <Link href="/about" marginLeft={4}>
        About
      </Link>
      <Link href="/contact" marginLeft={4}>
        Contact
      </Link>
    </Box>
  );
};

export default Footer;
