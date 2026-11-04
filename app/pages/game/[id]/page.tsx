"use client";

import { getGameByID } from "@/app/services/getGameByID";
import { GamesResponse } from "@/app/services/getGames";
import { useEffect, useState } from "react";

export default function Game() {
    const [game, setGame] = useState<GamesResponse | null>();

    useEffect(() => {
        const routeId = window.location.pathname.split("/").pop();
        getGameByID(Number(routeId)).then((data) => {
            setGame(data[0] || null);
        });
    }, []);

    return <div>Detalhes do jogo</div>;
}