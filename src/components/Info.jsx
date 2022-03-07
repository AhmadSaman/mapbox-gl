import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Info({ info }) {
  console.log(info);
  return (
    <Box>
      {info ? (
        <Box marginLeft={"5"} marginTop={"5"}>
          <Heading>{info.title}</Heading>
          <Text fontSize="xl" marginTop={"2"}>
            Longitude: {info.longitude}
          </Text>
          <Text fontSize="xl" marginTop={"2"}>
            Latitude: {info.latitude}
          </Text>
          <Text fontSize="xl" marginTop={"2"}>
            Distance:
          </Text>
          <Box marginLeft={"5"}>
            <Text fontSize="lg" marginTop={"2"}>
              Next Point: {info.distance.next} meters
            </Text>
            <Text fontSize="lg" marginTop={"2"}>
              Previous Point {2}: {info.distance.prev} meters
            </Text>
          </Box>
        </Box>
      ) : (
        <Box textAlign={"center"} margin={"10"}>
          <Heading>Select a Point on the Map</Heading>
        </Box>
      )}
    </Box>
  );
}

export default Info;
