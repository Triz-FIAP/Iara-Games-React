import "./styles.css"
export default function RootLayout({ children }: LayoutProps<"/">) {
    return <section className="children">{children}</section>

}
