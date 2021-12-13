import React from "react";
import {
  Box,
  Heading,
  Container,
  Stack,
  List,
  VStack,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <div>
      <Container maxW={"3xl"} bg={"gray.900"}>
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 5, md: 5 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "xl", sm: "3xl", md: "5xl" }}
            lineHeight={"110%"}
            color={"gray.50"}
            pl="10px"
          >
            Skills
          </Heading>
          <SimpleGrid
            columns={{ base: 4, sm: 4, md: 4 }}
            spacing={10}
            color={"gray.50"}
            fontSize={{
              base: "12px",
              sm: "14px",
              md: "16px",
            }}
            textAlign="center"
          >
            <VStack>
              <Heading fontSize={{ base: "sm", sm: "md", md: "xl" }}>
                Languages
              </Heading>
              <List>
                <ListItem>JavaScript</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>SASS</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Dart</ListItem>
              </List>
            </VStack>
            <VStack>
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
                textAlign={"center"}
              >
                Libraries
              </Heading>
              <List>
                <ListItem>React</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>NodeJS</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>Chakra-UI</ListItem>
                <ListItem>Material-UI</ListItem>
              </List>
            </VStack>
            <VStack>
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
                textAlign={"center"}
              >
                Storage
              </Heading>
              <List>
                <ListItem>MongoDB</ListItem>
                <ListItem>PostgresSQL</ListItem>
                <ListItem>Oracle</ListItem>
              </List>
            </VStack>
            <VStack>
              <Heading
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
                textAlign={"center"}
              >
                Tools
              </Heading>
              <List>
                <ListItem>Git</ListItem>
                <ListItem>VS Code</ListItem>
                <ListItem>Virtualization</ListItem>
                <ListItem>Figma</ListItem>
              </List>
            </VStack>
          </SimpleGrid>
        </Stack>
      </Container>
    </div>
  );
};

export default Skills;
