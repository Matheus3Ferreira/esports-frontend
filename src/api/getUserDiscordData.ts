import axios from "axios";
import React from "react";
import { IUserDiscordData } from "../@types";

interface IPropsUserDiscord {
  token: string;
  setUserDiscordData: React.Dispatch<React.SetStateAction<IUserDiscordData>>;
}

export default async function getUserDiscordData({
  token,
  setUserDiscordData,
}: IPropsUserDiscord) {
  const data = await axios
    .get("https://nlw-esports-backend.herokuapp.com/users/@me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      setUserDiscordData({
        username: data.username,
        avatar: data.avatar,
        discriminator: data.discriminator,
        id: data.id,
      });
    });

  return data;
}
