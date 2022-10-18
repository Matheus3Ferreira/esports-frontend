export interface IGame {
  bannerUrl: string;
  id: string;
  title: string;
  _count: { ads: number };
}

export interface IUserDiscordData {
  id: string;
  avatar: string;
  username: string;
  discriminator: string;
}

export interface IUserData {
  id: string;
  username: string;
  phone: string;
  whatsapp: boolean;
  discord?: IUserDiscordData | undefined;
}
