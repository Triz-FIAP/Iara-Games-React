"use client"

import logo from "@/public/logo-hero.svg"
import Image from "next/image"
import { ButtonComponent } from "./components/Button/ButtonComponent"
import { VerticalCardComponent } from "./components/VerticalCard/VerticalCardComponent"
import "./styles.css"

import heroiCover from "@/public/games/adventure/heroi.svg"
import momodoraCover from "@/public/games/adventure/momodora.svg"
import monicaCover from "@/public/games/adventure/monica.svg"

import mulletMadjackCover from "@/public/games/action/mullet-madjack.svg"
import dandaraCover from "@/public/games/action/dandara.svg"
import blazingChromeCover from "@/public/games/action/blazing-chrome.svg"
import { HorizontalCardComponent } from "./components/HorizontalCard/HorizontalCardComponent"


export default function Home() {
  return <>
    <section className="hero">
      <div className="text">
        <h1>Onde a lenda <br /> <span>encontra performance.</span></h1>
        <p>Somos a maior plataforma de compra
          e troca de games do Brasil</p>
        <div>
          <ButtonComponent href="/pages/login" type="primary" text="Entrar" />
          <ButtonComponent href="/pages/signIn" type="secondary" text="Cadastrar" />
        </div>
      </div>
      <Image src={logo} alt="Logo do Iara Games" className="logo" />
    </section>
    <section>
      <h2>Jogos de aventura</h2>
      <div className="adventure-games">
        <VerticalCardComponent
          href="/"
          img={heroiCover}
          title="A lenda do herói"
          tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
          price={14.99}
          evaluation={4.2}
          isFavorite={false}
          isOnCart={false} />
        <VerticalCardComponent
          href="/"
          img={monicaCover}
          title="Mônica: no castelo do dragão"
          tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
          price={14.99}
          evaluation={4.2}
          isFavorite={false}
          isOnCart={false} />
        <VerticalCardComponent
          href="/"
          img={momodoraCover}
          title="Momodora"
          tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
          price={14.99}
          evaluation={4.2}
          isFavorite={false}
          isOnCart={false} />
      </div>
    </section>
    <section>
      <h2>Jogos de ação</h2>
      <div className="action-games">
        <VerticalCardComponent
          href="/"
          img={mulletMadjackCover}
          title="Mullet Madjack"
          tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
          price={14.99}
          evaluation={4.2}
          isFavorite={false}
          isOnCart={false} />
        <VerticalCardComponent
          href="/"
          img={dandaraCover}
          title="Dandara"
          tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
          price={14.99}
          evaluation={4.2}
          isFavorite={false}
          isOnCart={false} />
        <VerticalCardComponent
          href="/"
          img={blazingChromeCover}
          title="Blazing Chrome"
          tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
          price={14.99}
          evaluation={4.2}
          isFavorite={false}
          isOnCart={false} />
      </div>
    </section>
    <section>
      <h2>todos os jogos</h2>
      <HorizontalCardComponent
        href="/"
        img={mulletMadjackCover}
        title="Mullet Madjack"
        tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
        price={14.99}
        evaluation={4.2}
        isFavorite={false}
        isOnCart={false}
      />
      <HorizontalCardComponent
        img={heroiCover}
        href="/"
        title="A lenda do herói"
        tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
        price={14.99}
        evaluation={4.2}
        isFavorite={false}
        isOnCart={false} />
      <HorizontalCardComponent
        href="/"
        img={monicaCover}
        title="Mônica: no castelo do dragão"
        tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
        price={14.99}
        evaluation={4.2}
        isFavorite={false}
        isOnCart={false} />
      <HorizontalCardComponent
        href="/"
        img={momodoraCover}
        title="Momodora"
        tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
        price={14.99}
        evaluation={4.2}
        isFavorite={false}
        isOnCart={false} />
      <HorizontalCardComponent
        href="/"
        img={dandaraCover}
        title="Dandara"
        tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
        price={14.99}
        evaluation={4.2}
        isFavorite={false}
        isOnCart={false} />
      <HorizontalCardComponent
        href="/"
        img={blazingChromeCover}
        title="Blazing Chrome"
        tags={["FPS", "PC", "Arcade", "Arcade", "Arcade", "Arcade"]}
        price={14.99}
        evaluation={4.2}
        isFavorite={false}
        isOnCart={false} />
    </section>
  </>
}
