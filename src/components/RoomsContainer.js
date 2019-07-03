import React, { useState, useEffect, useContext } from "react";
import { RoomContext } from "../RoomContext";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { filterRooms } from "../utils/rooms";

export default function RoomContainer() {
  const { rooms, loading } = useContext(RoomContext);

  const [filters, setFilters] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  });

  useEffect(() => {
    const maxPrice = rooms.length
      ? Math.max(...rooms.map(item => item.price))
      : 0;
    const maxSize = rooms.length
      ? Math.max(...rooms.map(item => item.size))
      : 0;
    setFilters(prevFilters => ({
      ...prevFilters,
      price: maxPrice,
      maxPrice,
      maxSize
    }));
  }, [rooms]);

  const filteredRooms = filterRooms(rooms, filters);

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFilters({
      ...filters,
      [name]: value
    });
  }

  return (
    <>
      <RoomsFilter
        rooms={rooms}
        filters={filters}
        handleChange={handleChange}
      />
      {loading ? <Loading /> : <RoomsList rooms={filteredRooms} />}
    </>
  );
}
