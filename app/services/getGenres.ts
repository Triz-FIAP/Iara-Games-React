import { twitchApi } from "./api";

export type GenresResponse = {
    id: number,
    name: string
};

export const getGenres = async (): Promise<GenresResponse[]> => {

    const { data } = await twitchApi.post<GenresResponse[]>(
        "/genres",
        `
            fields id, name;
            limit 100;
        `
    );

    return data;
};