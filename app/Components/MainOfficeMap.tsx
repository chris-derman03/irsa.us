"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  boxShadow: "0 0 15px white",
};

const center = {
  lat: 34.16664651953603,
  lng: -118.59702971288436,
};

const MainOfficeMap = ({ onMapLoad }: { onMapLoad: () => void }) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    return (
      <div
        className="flex items-center justify-center p-10"
        style={containerStyle}
      >
        <h1 className="text-2xl text-center">
          Google Maps Cannot be Loaded Right Now:{" "}
          <span className="text-secondary">No API key provided</span>
        </h1>
      </div>
    );

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      onLoad={() => {
        console.log("Map loaded");
        onMapLoad();
      }}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MainOfficeMap;
