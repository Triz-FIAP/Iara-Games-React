import star from '@/public/star.svg'
import Image from "next/image"
import { TagComponent } from "../Tag/TagComponent"
import { propsCard } from '../VerticalCard/VerticalCardComponent'
import "./styles.css"
import Link from 'next/link'

export function HorizontalCardComponent({ ...props }: propsCard) {
    return <Link href={props.href} className="horizontal-card">
        <Image width={250} src={props.img} alt={`Capa do jogo ${props.title}`} />

        <div className="horizontal-informations">
            <h3>{props.title}</h3>
            <div className="horizontal-tags">
                {props.tags.map((tag, index) => {
                    return <TagComponent key={index} name={tag} />
                })}
            </div>
            <p className="horizontal-price">${props.price}</p>
            <p><Image src={star} alt="Estrela" />{props.evaluation}</p>
        </div>

    </Link>
}