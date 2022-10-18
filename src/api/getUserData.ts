import axios from "axios";
import React from "react";
import { IUserData, IUserDiscordData } from "../@types";

interface IPropsUserDiscord {
  token: string;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}

export default async function getUserData({
  token,
  setUserData,
}: IPropsUserDiscord) {
  const data = await axios
    .get("https://nlw-esports-backend.herokuapp.com/api/me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      setUserData({
        username: data.username,
        id: data.id,
        phone: data.phone,
        whatsapp: data.whatsapp,
      });
    });
}
