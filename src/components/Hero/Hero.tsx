import './Hero.css'

interface HeroProps {
    children: React.ReactNode
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <h1 className="hero-title">
                Search <span className="hero-accent">Domains</span>
            </h1>
            <p className="hero-subtitle">
                Get instant WHOIS data, registration status, and expiration dates for any TLD.
            </p>
            {children}
        </section>
    )
}