import React from "react";
import data from "./../data.json";
import * as turf from "@turf/turf";
function AddTitle({ Marker, setInfo }) {
  const { features } = data;

  return (
    <>
      {features.map((ele, i) => {
        let index = i;
        return ele.geometry.coordinates.map((el, i) => {
          const from = turf.point(el);
          const to1 = turf.point(
            features[index].geometry.coordinates[i + 1]
              ? features[index].geometry.coordinates[i + 1]
              : features[index].geometry.coordinates[0]
          );
          const to2 = turf.point(
            features[index].geometry.coordinates[i - 1]
              ? features[index].geometry.coordinates[i - 1]
              : features[index].geometry.coordinates[
                  features[index].geometry.coordinates.length - 1
                ]
          );
          const options = { units: "meters" };
          const distance1 = turf.distance(from, to1, options);
          const distance2 = turf.distance(from, to2, options);
          return (
            <Marker
              latitude={el[1]}
              longitude={el[0]}
              anchor={"bottom"}
              onClick={() =>
                setInfo({
                  title: `Point ${i}`,
                  longitude: el[0],
                  latitude: el[1],
                  distance: { next: distance1, prev: distance2 },
                })
              }
            >
              point {i}
            </Marker>
          );
        });
      })}
    </>
  );
}

export default AddTitle;
