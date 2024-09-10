import swapiInstance from "./instances/swapi";

export const getPlanets = async () => {
  const response = await swapiInstance.get("planets");
  return response.data;
};
