import { Button, Box, HStack } from "@chakra-ui/react";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <Box as="section" marginTop={8}>
        <HStack spacing={4}>
          <Button colorScheme="blue">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </HStack>
      </Box>
    </main>
  );
}
