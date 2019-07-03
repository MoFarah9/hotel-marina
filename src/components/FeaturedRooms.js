import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../RoomContext";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, rooms } = this.context;

    const featuredRooms = rooms.filter(room => room.featured === true);

    const roomsMarkup = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : roomsMarkup}
        </div>
      </section>
    );
  }
}
