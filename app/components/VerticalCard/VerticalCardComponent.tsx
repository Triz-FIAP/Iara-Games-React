import cartIcon from '@/public/icons/cart-icon.svg'
import saveIcon from '@/public/icons/save-icon.svg'
import star from '@/public/star.svg'
import Image from "next/image"
import { ButtonComponent } from "../Button/ButtonComponent"
import { TagComponent } from "../Tag/TagComponent"
import "./styles.css"

export interface propsCard {
    img: string,
    title: string,
    tags: string[],
    price: number,
    evaluation: number,
    isFavorite: boolean,
    isOnCart: boolean,
    href: string
}

export function VerticalCardComponent({ ...props }: propsCard) {
    return <div className="Card">
        <Image width={250} src={props.img} alt={`Capa do jogo ${props.title}`} />
        <h3>{props.title}</h3>
        <div className="tags">
            {props.tags.map((tag, index) => {
                return <TagComponent key={index} name={tag} />
            })}
        </div>
        <div className='informations'>
            <p className="price">${props.price}</p>
            <p><Image src={star} alt="Estrela" />{props.evaluation}</p>
        </div>
        <ButtonComponent
            href="/"
            type="primary"
            text="Acessar"
        />
        <div className='iconsButton'>
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
}