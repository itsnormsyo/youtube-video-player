import axios from 'axios';

const KEY = "AIzaSyC0p7pZofMyaARYlMBVU1bO6xPaxwV43ps";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY

  }
});

