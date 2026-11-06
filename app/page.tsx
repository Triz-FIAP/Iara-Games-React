"use client"

import logo from "@/public/logo-hero.svg"
import Image from "next/image"
import { ButtonComponent } from "./components/Button/ButtonComponent"
import { VerticalCardComponent } from "./components/VerticalCard/VerticalCardComponent"
import style from "./page.module.css"

import { useEffect, useState } from "react"
import { HorizontalCardComponent } from "./components/HorizontalCard/HorizontalCardComponent"
import { getCompanies } from "./services/getCompanies"
import { GamesResponse, getGames } from "./services/getGames"

export default function Home() {

  const [games, setGames] = useState<GamesResponse[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);

  // Genero aventura: 31
  // Como eles não tem gênero de ação, escolhi indie: 32 

  useEffect(() => {
    getCompanies().then((data) => {

      data.map((company) => {
        setCompanies((prevCompanies) => [...prevCompanies, company.id.toString()]);
      })
    })
  }, []);

  useEffect(() => {
    companies.length > 0 && getGames(companies, ["31", "32"]).then((data) => {
      data.forEach((game) => {
        if (!game.cover || !game.cover.url) {
          game.cover = {
            id: 0,
            url: ''
          }
        }
        else {
          game.cover.url = `https:${game.cover.url}`;
        }
      })
      setGames(data);
    });
  }, [companies]);

  return <>
    <section className={style.hero}>
      <div className={style.text}>
        <h1 className={style.title}>Onde a lenda <br /> <span className="">encontra performance.</span></h1>
        <p>Somos a maior plataforma de compra
          e troca de games do Brasil</p>
        <div>
          <ButtonComponent href="/pages/login" type="primary" text="Entrar" />
          <ButtonComponent href="/pages/signIn" type="secondary" text="Cadastrar" />
        </div>
      </div>
      <Image src={logo} alt="Logo do Iara Games" className={style.logo} />
    </section>
    <section>
      <h2 className={style.categoryTitle}>Jogos de aventura</h2>
      <div className={style.adventureGames}>
        {games.length > 0 && games.filter((game) => game.genres?.some((genre) => genre.id === 31)).map((game) => (
          <VerticalCardComponent
            key={game.id}
            href={`/pages/game/${game.id}`}
            img={game.cover.url}
            title={game.name}
            tags={game.genres?.map((genre) => genre.name) || []}
            price={14.99}
            evaluation={game.rating || 0}
            isFavorite={false}
            isOnCart={false} />
        ))
        }
      </div>
    </section>
    <section>
      <h2>Jogos Indie</h2>
      <div className={style.actionGames}>
        {games.length > 0 && games.filter((game) => game.genres?.some((genre) => genre.id === 32)).map((game) => (
          <VerticalCardComponent
            key={game.id}
            href={`/pages/game/${game.id}`}
            img={game.cover.url}
            title={game.name}
            tags={game.genres?.map((genre) => genre.name) || []}
            price={14.99}
            evaluation={game.rating || 0}
            isFavorite={false}
            isOnCart={false} />
        ))
        }
      </div>
    </section>
    <section>
      <h2>todos os jogos</h2>
      {
        games.length > 0 && games.map((game) => (
          <HorizontalCardComponent
            key={game.id}
            href={`/pages/game/${game.id}`}
            img={game.cover.url}
            title={game.name}
            tags={game.genres?.map((genre) => genre.name) || []}
            price={14.99}
            evaluation={game.rating || 0}
            isFavorite={false}
            isOnCart={false} />
        ))
      }
    </section>
  </>
}
