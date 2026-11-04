import axios from "axios";
import { NextResponse } from "next/server";
import { getAccessToken } from "@/app/services/getAccessToken";

const IGDB_BASE_URL = "https://api.igdb.com/v4";

// Endpoints permitidos
const allowedEndpoints = [
    "games",
    "genres",
    "companies",
    "platforms",
    "release_dates",
    "release_date_regions",
    "involved_companies"
];

export async function POST(
    request: Request,
    { params }: { params: Promise<{ endpoint: string[] }> }
) {
    try {

        const { endpoint } = await params;

        // Impede o acesso a endpoints não autorizados
        if (endpoint.length !== 1 || !allowedEndpoints.includes(endpoint[0])) {
            return NextResponse.json(
                { error: "Endpoint não permitido." },
                { status: 400 }
            );
        }

        const token = await getAccessToken();

        const body = await request.text();

        const response = await axios.post(
            `${IGDB_BASE_URL}/${endpoint[0]}`,
            body,
            {
                headers: {
                    "Client-ID": process.env.TWITCH_CLIENT_ID!,
                    "Authorization": `Bearer ${token.access_token}`,
                    "Content-Type": "text/plain"
                }
            }
        );

        return NextResponse.json(response.data);

    } catch (error) {

        if (axios.isAxiosError(error)) {
            return NextResponse.json(
                error.response?.data ?? {
                    error: "Erro ao consultar a IGDB."
                },
                {
                    status: error.response?.status ?? 500
                }
            );
        }

        return NextResponse.json(
            { error: "Erro interno no proxy." },
            { status: 500 }
        );
    }
}