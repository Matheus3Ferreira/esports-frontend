import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import logoImg from "../assets/logo-nlw-esports.svg";
import { IUserData, IUserDiscordData } from "../@types";
import ProfileButton from "./ProfileButton";
import { SignInModal } from "./SignInModal";
import { SignUpModal } from "./SignUpModal";
import getUserDiscordData from "../api/getUserDiscordData";
import getUserData from "../api/getUserData";

export default function Header() {
  const [gamesLoaded, setGamesLoaded] = useState<boolean>(false);
  const [userDiscordData, setUserDiscordData] = useState<IUserDiscordData>({
    id: "",
    avatar: "",
    username: "",
    discriminator: "",
  });
  const [userData, setUserData] = useState<IUserData>({
    id: "",
    username: "",
    phone: "",
    whatsapp: false,
    discord: userDiscordData || undefined,
  });
  const [whichModalIsOpen, setWhichModalIsOpen] = useState({
    signIn: false,
    signUp: false,
  });

  useEffect(() => {
    if (localStorage.getItem("access_token_discord") !== null) {
      const token = localStorage.getItem("access_token_discord") as string;
      getUserDiscordData({ token, setUserDiscordData });
    }
    if (localStorage.getItem("jwt_token") !== null) {
      const token = localStorage.getItem("jwt_token") as string;
      getUserData({ token, setUserData });
    }
  }, []);

  return (
    <header className="justify-center items-center flex flex-col-reverse w-[100%] flex-wrap">
      <img src={logoImg} alt="" />
      <div className="relative self-end md:absolute md:right-4">
        <Dialog.Root>
          {userData.id || userDiscordData.id ? (
            <ProfileButton
              id={userDiscordData.id ? userDiscordData.id : userData.id}
              avatar={userDiscordData.avatar}
              username={
                userDiscordData.username
                  ? userDiscordData.username
                  : userData.username
              }
              discriminator={userDiscordData.discriminator}
            />
          ) : (
            <div>
              <Dialog.Trigger
                onClick={() =>
                  setWhichModalIsOpen({
                    signIn: true,
                    signUp: false,
                  })
                }
                className="font-semibold text-violet-600 m-7 hover:animate-shake"
              >
                Conectar-se
              </Dialog.Trigger>
              {whichModalIsOpen.signIn && (
                <SignInModal
                  onChangeModal={setWhichModalIsOpen}
                  setUserData={setUserData}
                />
              )}
              {whichModalIsOpen.signUp && (
                <SignUpModal
                  onChangeModal={setWhichModalIsOpen}
                  setUserData={setUserData}
                />
              )}
            </div>
          )}
        </Dialog.Root>
      </div>
    </header>
  );
}
