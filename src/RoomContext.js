import React, { useState, useEffect } from "react";
import { formatRoomData } from "./utils/rooms";
// import items from "./data";
import Client from "./Contentful";

const RoomContext = React.createContext();

export default function RoomProvider(props) {
  const [state, setState] = useState({
    rooms: [],
    loading: true
  });

  useEffect(() => {
    getData();
    // getLocalData();
  }, []);

  async function getData() {
    try {
      let response = await Client.getEntries({
        content_type: "hotelRoom"
      });
      let rooms = formatRoomData(response.items);

      setState({
        rooms,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  // function getLocalData() {
  //   let rooms = formatRoomData(items);

  //   setState({
  //     rooms,
  //     loading: false
  //   });
  // }

  return (
    <RoomContext.Provider
      value={{
        ...state
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
}

export { RoomProvider, RoomContext };
