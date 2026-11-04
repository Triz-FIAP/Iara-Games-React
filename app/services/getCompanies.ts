import { twitchApi } from "./api";

export type CompaniesResponse = {
    id: number,
    name: string,
    country: number,
};

export const getCompanies = async (): Promise<CompaniesResponse[]> => {

    const { data } = await twitchApi.post<CompaniesResponse[]>(
        "/companies",
        `
            fields id, name, country;
            where country = 31;
        `
    );

    return data;
};