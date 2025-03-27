import { Api } from "./index";

export const fetchFixtures = async () => {
  try {
    const { data } = await Api.get("/fixtures");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchPlayers = async () => {
  try {
    const { data } = await Api.get("/players");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchClubs = async () => {
  try {
    const { data } = await Api.get("/clubs");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchNews = async () => {
  try {
    const { data } = await Api.get("/news");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
