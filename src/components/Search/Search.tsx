import './Search.css'

interface SearchProps {
    value: string;
    onChange: (val: string) => void;
    onSearch: () => void;
    loading: boolean;
}

export const Search: React.FC<SearchProps> = ({ value, onChange, onSearch, loading }) => {
    return (
        <div className="search-wrapper">
            <input
                type="text"
                className="search-input"
                placeholder="eemille.fi"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            />
            <button
                className="search-button"
                onClick={onSearch}
                disabled={loading}
            >
                {loading ? "Haetaan..." : "Hae"}
            </button>
        </div>
    )
}