import useWindowSize from "../customHooks/useWindowSize";

export default function Header({ title }: { title: string }) {
    const { width } = useWindowSize();

    const gradientStyle = width < 600 ? "linear-gradient(90deg,rgb(80, 31, 31),rgb(73, 37, 49))" : "linear-gradient(135deg, #0d1124, #142224)";

    return (
        <header className="header-container text-center d-flex align-items-center justify-content-center" style={{ background: gradientStyle }}>
            <h2 className="header-title">{title}</h2>
        </header>
    );
}
