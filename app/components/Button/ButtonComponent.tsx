import Link from "next/link";
import "./styles.css"
import Image, { StaticImageData } from "next/image";

type ButtonProps = | {
    type: "primary"
    text: string
    href: string
    icon?: StaticImageData;
} | {
    type: "secondary"
    text: string
    href: string
    icon?: StaticImageData;

} | {
    type: "link"
    text: string
    href: string
    icon?: StaticImageData;
} | {
    type: "iconButton"
    icon: StaticImageData
    iconWhenClicked: StaticImageData
};


export function ButtonComponent({ ...ButtonProps }: ButtonProps) {

    return (
        ButtonProps.type !== "iconButton" ? (
            <Link href={ButtonProps.href} className={`${ButtonProps.type} button`}>
                {ButtonProps.icon && <Image src={ButtonProps.icon} alt="Icone do botão" />}
                {ButtonProps.text}
            </Link>
        ) : (
            <button className="iconButton button" type="button">
                <Image
                    src={ButtonProps.icon}
                    alt="Ícone do botão"
                />
            </button>
        ))
}