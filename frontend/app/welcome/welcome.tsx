import { Button, Box, HStack } from "@chakra-ui/react";

export function Welcome() {
  return (
    <Box as="main" p={4} width="100%">
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </Box>
  );
}
