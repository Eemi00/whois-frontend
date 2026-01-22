import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Layout } from './components/Layout/Layout';
import { Hero } from './components/Hero/Hero';
import { Search } from './components/Search/Search';
import { Result } from './components/Result/Result';

interface WhoisData {
    status?: string;
    error?: string;
    created?: string;
    expires?: string;
    updated?: string;
    [key: string]: string | string[] | undefined;
}

function App() {

    const [domain, setDomain] = useState('')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<WhoisData | null>(null);

    const handleSearch = async () => {
        if (!domain) return;
        setLoading(true)
        try {
            const response = await fetch(`https://whois-api.eemille.fi/search?domain=${domain}`)
            const data = await response.json()
            setResult(data)
        } catch (err) {
            console.error("Search failed:", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <Layout>
                <Hero>
                    <Search
                        value={domain}
                        onChange={setDomain}
                        onSearch={handleSearch}
                        loading={loading}
                    />
                </Hero>

                {result && <Result data={result} domain={domain} />}
            </Layout>
        </>
    );
}

export default App;