"use client";

import { getGameByID } from "@/app/services/getGameByID";
import { GamesResponse } from "@/app/services/getGames";
import { useEffect, useState } from "react";
import style from "./game.module.css";
import Image from "next/image";
import { TagComponent } from "@/app/components/Tag/TagComponent";
import { ButtonComponent } from "@/app/components/Button/ButtonComponent";
import cartIcon from '@/public/icons/cart-icon.svg'
import saveIcon from '@/public/icons/save-icon.svg'

export default function Game() {
    const [game, setGame] = useState<GamesResponse | null>();

    useEffect(() => {
        const routeId = window.location.pathname.split("/").pop();
        getGameByID(Number(routeId)).then((data) => {
            setGame(data[0] || null);
        });
    }, []);

    return <div className={style.container}>
        <div className={style.gameCoverContainer}>
            {
                game?.cover && <Image className={style.gameCover} src={`https:${game?.cover.url}`} alt={`Capa do jogo ${game?.name}`} width={100} height={100} />
            }
        </div>
        <div className={style.gamePrincipalInfo}>
            {
                game?.cover && <Image className={style.gamePrincipalCover} src={`https:${game?.cover.url}`} alt={`Capa do jogo ${game?.name}`} width={100} height={100} />
            }
            <div className={style.gamePrincipalInfoText}>
                <h1>{game?.name}</h1>
                <div className={style.gameTagsContainer}>
                    {game?.genres?.map((genre) => genre.name).map((tag, index) => {
                        return <TagComponent key={index} name={tag} />
                    })}
                </div>
                <div className={style.gameButtonsContainer}>
                    <ButtonComponent
                        href={''}
                        type="primary"
                        text="Comprar"
                    />
                    <ButtonComponent
                        type="iconButton"
                        icon={saveIcon}
                        iconWhenClicked={saveIcon}
                    />
                    <ButtonComponent
                        type="iconButton"
                        icon={cartIcon}
                        iconWhenClicked={cartIcon}
                    />
                </div>
            </div>
        </div>
    </div>;
}