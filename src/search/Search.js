import React, { Component } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input,Select } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Flex w="100%" p={4} color="black">
      <Input w="100%" variant="filled"  placeholder="Piriyus..." />
    </Flex>
    <Flex w="100%" px={4} pb={2} color="black">
     <Input w="220%" mr={2} placeholder="Qiymet" size="md" />
      <Select ml={2} >
        <option value="option1">AZN</option>
        <option value="option2">USD</option>
      </Select>
    </Flex>
    <Flex w="100%" px={4} color="black">
      <Select mr={2} placeholder="Marka">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select ml={2} placeholder="Şəhər">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
      
      </>
  );
};
export default Search;
