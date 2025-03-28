import { Api } from "./index";

export const fetchFixtures = async () => {
  const { data } = await Api.get("/fixtures");
  return data;
};

export const fetchPlayers = async () => {
  const { data } = await Api.get("/players");
  return data;
};

export const fetchClubs = async () => {
  const { data } = await Api.get("/clubs");
  return data;
};

export const fetchNews = async () => {
  const { data } = await Api.get("/news");
  return data;
};
