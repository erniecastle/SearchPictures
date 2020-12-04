import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VemSQ7ic3v3LaFKM5YXpZx4Sr_yc44juMArdqZP5XTw",
  },
});
