import { twitchApi } from "./api";

export type GamesResponse = {
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

export const getGames = async (companies_ids: string[], genres_ids: string[]): Promise<GamesResponse[]> => {

    const { data } = await twitchApi.post<GamesResponse[]>(
        "/games",
        `
            fields id, aggregated_rating_count, game_type, cover.url, genres.name, hypes, involved_companies, name, rating, rating_count, storyline, summary, involved_companies.company.name;
            where involved_companies.company = (${companies_ids})
    & involved_companies.developer = true
    & genres = (${genres_ids});
        `
    );

    return data;
};