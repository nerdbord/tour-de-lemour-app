import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

interface DirectionsProps {
  places: google.maps.places.PlaceResult[] | undefined;
}

function Directions(props: DirectionsProps) {
  const { places } = props;
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer | null>(null);
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs?.[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);
console.log(setRouteIndex)
  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer || !places || places.length < 2) return;

    const origin = places[0].geometry?.location;
    const destination = places[places.length - 1].geometry?.location;

    if (!origin || !destination) return;

    const waypoints = places
      .slice(1, -1)
      .map((place) => ({
        location: place.geometry?.location as google.maps.LatLng, // Assuming `geometry.location` is available
        stopover: true,
      }))
      .filter((waypoint) => waypoint.location); // Ensure that location is defined

    directionsService
      .route({
        origin: origin as google.maps.LatLng, // Ensuring LatLng is passed
        destination: destination as google.maps.LatLng, // Ensuring LatLng is passed
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => {
      if (directionsRenderer) {
        directionsRenderer.setMap(null);
      }
    };
  }, [directionsService, directionsRenderer, places]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
    </div>
  );
}

export default Directions;
