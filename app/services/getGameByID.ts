import { twitchApi } from "./api";

export type GameResponse = {
    id: number,
    cover: {
        id: number,
        url: string,
    },
    genres?: {
        id: number,
        name: string
    }[],
    involved_companies?: number[],
    name: string,
    summary: string,
    game_type: number
    storyline?: string,
    rating?: number,
    rating_count?: number,
};

export const getGameByID = async (id: number): Promise<GameResponse[]> => {

    const { data } = await twitchApi.post<GameResponse[]>(
        "/games",
        `
            fields id, aggregated_rating_count, game_type, cover.url, genres.name, hypes, involved_companies, name, rating, rating_count, storyline, summary, involved_companies.company.name;
            where id = ${id};
        `
    );

    return data;
};