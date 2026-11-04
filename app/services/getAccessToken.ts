import "server-only";
import axios from "axios";

type AccessTokenResponse = {
    access_token: string;
    expires_in: number;
    token_type: string;
};

let accessToken: AccessTokenResponse | null = null;
let expiresAt = 0;

let tokenRequest: Promise<AccessTokenResponse> | null = null;

export const getAccessToken = async (): Promise<AccessTokenResponse> => {

    if (accessToken && Date.now() < expiresAt - 60_000) {
        return accessToken;
    }

    if (tokenRequest) {
        return tokenRequest;
    }

    tokenRequest = axios.post<AccessTokenResponse>(
        "https://id.twitch.tv/oauth2/token",
        null,
        {
            params: {
                client_id: process.env.TWITCH_CLIENT_ID,
                client_secret: process.env.TWITCH_CLIENT_SECRET,
                grant_type: "client_credentials"
            }
        }
    ).then(({ data }) => {

        accessToken = data;
        expiresAt = Date.now() + data.expires_in * 1000;

        return data;

    }).finally(() => {
        tokenRequest = null;
    });

    return tokenRequest;
};

export const getStoredToken = () => accessToken;