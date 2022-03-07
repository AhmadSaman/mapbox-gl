/* eslint import/no-webpack-loader-syntax: off */
import Map, { Layer, Marker, Source } from "react-map-gl";
import data from "../data.json";
import { useState } from "react";
import AddTitle from "./AddTitle";
import { Box, Button } from "@chakra-ui/react";

export default function MapComp({ setInfo }) {
  const [dark, setDark] = useState(false);
  const [viewState, setViewState] = useState({
    latitude: 36.1901,
    longitude: 43.993,
    zoom: 14,
  });
  const lineLayer = {
    id: "line",
    type: "line",
    paint: { "line-color": dark ? "#ffffff" : "#000" },
  };
  const pointLayer = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 2,
      "circle-color": dark ? "#ffffff" : "#000",
    },
  };
  return (
    <Map
      initialViewState={viewState}
      mapboxAccessToken={
        "pk.eyJ1IjoiYWhtYWRzYW1hbiIsImEiOiJjbDA1OGJ0MjUwdGNzM3BtajM1cXlsYjhzIn0.M9nI2jKSDNZZjTmmmxtwog"
      }
      style={{ width: "full", height: "100vh" }}
      mapStyle={`${
        dark
          ? "mapbox://styles/ahmadsaman/cl0ax7i7t007j14p46gddlwkd"
          : "mapbox://styles/mapbox/streets-v9"
      }`}
      onMove={(event) => setViewState(event.viewState)}
    >
      <Source id="lines" type="geojson" data={data}>
        <Layer {...lineLayer} />
      </Source>
      <Source id="point" type="geojson" data={data}>
        <Layer {...pointLayer} />
      </Source>
      {viewState.zoom > 15 && <AddTitle Marker={Marker} setInfo={setInfo} />}
      <Box
        style={{
          width: 30,
          backgroundColor: "transparent",
          position: "absolute",
          top: "5px",
          left: "5px",
          zIndex: 10,
        }}
      >
        <Button title="Button" onClick={() => setDark((prev) => !prev)}>
          Dark Mode
        </Button>
      </Box>
    </Map>
  );
}
