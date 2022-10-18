import { CreateAdBanner } from "../components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "../components/CreateAdModal";
import getGames from "../api/getGames";
import GameSlider from "../components/GameSlider";
import Header from "../components/Header";
import { IGame } from "../@types";

export default function Home() {
  const [games, setGames] = useState<IGame[]>([]);
  const [gamesLoaded, setGamesLoaded] = useState<boolean>(false);

  useEffect(() => {
    getGames(setGames);
  }, []);

  useEffect(() => {
    games.length > 0 && setGamesLoaded(true);
  }, [games]);

  return (
    <div className="flex justify-center items-center flex-col my-20 px-5">
      <Header />

      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>
      {gamesLoaded && <GameSlider games={games} />}
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal games={games} />
      </Dialog.Root>
    </div>
  );
}
