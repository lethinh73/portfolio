import React, { useEffect, useRef, useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  ClientOnly,
  HStack,
  Heading,
  Progress,
  RadioGroup,
  Skeleton,
  VStack,
} from "@chakra-ui/react"
import { animate, createScope, createSpring, createDraggable } from "animejs"

function App() {
  const root = useRef(null)
  const scope = useRef(null)
  const [rotations, setRotations] = useState(0)

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      // 1) Bounce the heading forever
      animate(".hero", {
        scale: [
          { to: 1.06, ease: "inOut(3)", duration: 220 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 300,
      })

      // 2) Make the primary button draggable (center-based)
      createDraggable(".cta", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 220 }),
      })

      // 3) Fill progress bar on mount (animate scaleX)
      //    We give Progress.Range a class of .progress-range and will scaleX it.
      animate(".progress-range", {
        transform: [
          { to: "scaleX(0)", duration: 0 }, // start collapsed
          { to: "scaleX(0.65)", ease: "out(4)", duration: 800 }, // fill to 65%
        ],
        transformOrigin: "left center",
      })

      // 4) Expose a method to rotate the heading externally
      self.add("rotateHero", (turns) => {
        animate(".hero", {
          rotate: turns * 360,
          ease: "out(4)",
          duration: 900,
        })
      })

      // 5) Small nudge when checking the first checkbox/radio
      self.add("nudgeControls", () => {
        animate(".nudge", {
          y: [
            { to: -6, ease: "out(3)", duration: 120 },
            { to: 0, ease: createSpring({ stiffness: 400 }) },
          ],
        })
      })
    })

    return () => scope.current?.revert()
  }, [])

  const handleRotate = () => {
    setRotations((prev) => {
      const next = prev + 1
      scope.current.methods.rotateHero(next)
      return next
    })
  }

  const handleNudge = () => {
    scope.current.methods.nudgeControls()
  }

  return (
    <Box ref={root} textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <Heading className="hero" size="2xl" letterSpacing="tight">
          Welcome to Chakra UI v3 + Vite
        </Heading>

        <HStack gap="10" className="nudge">
          <Checkbox.Root defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Label>Checkbox</Checkbox.Label>
          </Checkbox.Root>

          <RadioGroup.Root display="inline-flex" defaultValue="1">
            <RadioGroup.Item value="1" mr="2">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText lineHeight="1">Radio</RadioGroup.ItemText>
            </RadioGroup.Item>

            <RadioGroup.Item value="2">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText lineHeight="1">Radio</RadioGroup.ItemText>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </HStack>

        {/* We’ll keep value=65 for semantics, but visually animate Range with scaleX */}
        <Progress.Root width="300px" value={65} striped>
          <Progress.Track>
            <Progress.Range className="progress-range" />
          </Progress.Track>
        </Progress.Root>

        <HStack justify="center">
          <Button className="cta" onClick={handleRotate}>
            rotations: {rotations}
          </Button>
          <Button variant="outline" onClick={handleNudge}>
            Nudge controls
          </Button>
        </HStack>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          Haha
        </ClientOnly>
      </Box>
    </Box>
  )
}

export default App
