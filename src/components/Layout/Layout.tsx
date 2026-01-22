import './Layout.css'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <main className="layout-main container">
                {children}
            </main>
        </div>
    )
}