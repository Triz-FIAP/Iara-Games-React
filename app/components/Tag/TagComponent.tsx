
import "./styles.css"

export function TagComponent({ name }: { name: string }) {
    return <>
        <p className="tag">{name}</p>
    </>
}