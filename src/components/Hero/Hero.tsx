import './Hero.css'

interface HeroProps {
    children: React.ReactNode
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <h1 className="hero-title">
                Hae <span className="hero-accent">Domaintietoja</span>
            </h1>
            <p className="hero-subtitle">
                Saat välittömästi WhoIs datan, rekisteröinnin tilan, ja minkä tähänsä TLDn voimassaolopäivät.
            </p>
            {children}
        </section>
    )
}