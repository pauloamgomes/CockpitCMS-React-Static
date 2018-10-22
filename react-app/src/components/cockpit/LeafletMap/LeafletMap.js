import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "reactstrap";
import styled from "styled-components";
import convert from "htmr";

const MapStyled = styled(Map)`
  height: 450px;
  margin-bottom: 1rem;
`;

const LeafletMap = ({ name, location, zoom, marker }) => {
  if (!location) return null;

  const position = [location.lat, location.lng];

  return (
    <Container className={`component--${name}`}>
      <link
        rel="stylesheet"
        media="all"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.3/leaflet.css"
      />
      <MapStyled center={position} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {marker && (
          <Marker position={position}>
            <Popup>
              <div>{convert(marker)}</div>
            </Popup>
          </Marker>
        )}
      </MapStyled>
    </Container>
  );
};

LeafletMap.defaultProps = {
  zoom: 13,
};

export default LeafletMap;
