// get a single room using it's slug
export function getRoom(slug, rooms) {
  let tempRooms = [...rooms];
  const room = tempRooms.find(room => room.slug === slug);
  return room;
}

export function formatRoomData(items) {
  let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);

    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
}

// get all unique values for filtering
export function getUnique(items, value) {
  return [...new Set(items.map(item => item[value]))];
}

export function filterRooms(rooms, filters) {
  let { type, capacity, price, minSize, maxSize, breakfast, pets } = filters;

  let tempRooms = [...rooms];
  // get capacity
  capacity = parseInt(capacity);
  price = parseInt(price);
  // filter by type
  if (type !== "all") {
    tempRooms = tempRooms.filter(room => room.type === type);
  }
  // filter by capacity
  if (capacity !== 1) {
    tempRooms = tempRooms.filter(room => room.capacity >= capacity);
  }
  // filter by price
  tempRooms = tempRooms.filter(room => room.price <= price);
  //filter by size
  tempRooms = tempRooms.filter(
    room => room.size >= minSize && room.size <= maxSize
  );
  //filter by breakfast
  if (breakfast) {
    tempRooms = tempRooms.filter(room => room.breakfast === true);
  }
  //filter by pets
  if (pets) {
    tempRooms = tempRooms.filter(room => room.pets === true);
  }

  return tempRooms;
}
