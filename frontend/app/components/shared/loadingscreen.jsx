import { Center, Spinner, Stack, Text } from '@chakra-ui/react';

export default function LoadingScreen() {
  return (
    <Center minH="70vh">
      <Stack align="center" gap="3">
        <Spinner size="lg" color="blue.solid" thickness="3px" />
        <Text color={{ base: 'gray.600', _dark: 'gray.300' }}>
            Loading…
        </Text>
      </Stack>
    </Center>
  )
}
