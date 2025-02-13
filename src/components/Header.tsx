export default function Header({ title }: { title: string }) {
    return (
        <header className="header-container text-center d-flex align-items-center justify-content-center">
            <h2 className="header-title">{title}</h2>
        </header>
    );
}
