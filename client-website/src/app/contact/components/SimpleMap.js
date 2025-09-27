"use client";
import React from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const ICON = L.icon({
  iconUrl: "/image/marker-icon.png",
  iconSize: [22, 32],
  iconAnchor: [32 / 2, 32 + 9],
});

function SimpleMap() {
  return (
    <div className="pt-20" id="map">
      <MapContainer
        className="!h-[60vh] !z-0"
        center={[22.749283, 75.903513]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={ICON} position={[22.749283, 75.903513]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default SimpleMap;
