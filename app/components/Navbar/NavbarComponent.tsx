import logo from "@/public/IG-Logo.svg"
import Image from "next/image"
import { ButtonComponent } from "../Button/ButtonComponent"
import "./styles.css"

export function NavbarComponent() {
    return <nav>
        <Image src={logo} alt="Iara Games Logo" />
        <ul>
            <li><ButtonComponent hasIcon={false} text="Início" type="link" href="/" /></li>
            <li><ButtonComponent hasIcon={false} text="Entrar" type="link" href="/pages/login" /></li>

        </ul>
    </nav>
}
