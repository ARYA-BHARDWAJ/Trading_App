import axios from "axios"

const TOKEN = API_KEY;

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})
