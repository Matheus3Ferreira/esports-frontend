import axios from "axios";
import { IGame } from "../pages/Home";

export default async function getGames(
  setGames: React.Dispatch<React.SetStateAction<IGame[]>>
) {
  await axios
    .get("https://nlw-esports-backend.herokuapp.com/api/games")
    .then((response) => {
      setGames(response.data);
    });
}
