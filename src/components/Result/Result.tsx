import React from 'react';
import './Result.css';

interface WhoisData {
    status?: string;
    error?: string;
    created?: string;
    expires?: string;
    updated?: string;
    [key: string]: string | string[] | undefined;
}

interface ResultProps {
    data: WhoisData;
    domain: string;
}

export const Result: React.FC<ResultProps> = ({ data, domain }) => {
    if (data.status === 'available') {
        return (
            <div className="result-container available-state">
                <div className="project">
                    <h3 className="hero-title" style={{ fontSize: '2rem' }}>
                        <span className="hero-accent">{domain}</span> on vapaana!
                    </h3>
                    <p className="text-muted">Tämä domain ei ole tällä hetkellä rekisteröity.</p>
                </div>
            </div>
        );
    }

    if (data.error) {
        return (
            <div className="result-container">
                <div className="pill" style={{ borderColor: 'rgba(255, 100, 100, 0.3)', color: '#ff6b6b' }}>
                    <i className="fa-solid fa-circle-exclamation"></i> {data.error}
                </div>
            </div>
        );
    }

    // Separate primary dates from other info
    const { status, created, expires, updated, ...details } = data;

    return (
        <div className="result-container">
            {/* Top Bar - Summary */}
            <div className="result-header">
                <h2 className="section-title">{domain}</h2>
                <div className={`status-pill ${status?.toLowerCase().includes('ok') ? 'active' : ''}`}>
                    {status || 'Rekisteröity'}
                </div>
            </div>

            {/* Meta Stats - Using your Hero Split style */}
            <div className="hero-split result-meta">
                <div className="meta-item">
                    <p className="meta-label">Rekisteröity</p>
                    <p className="meta-value">{created || 'N/A'}</p>
                </div>
                <div className="meta-item">
                    <p className="meta-label">Vanhenee</p>
                    <p className="meta-value" style={{ color: 'var(--accent-2)' }}>{expires || 'N/A'}</p>
                </div>
                <div className="meta-item">
                    <p className="meta-label">Viimeksi päivitetty</p>
                    <p className="meta-value">{updated || 'N/A'}</p>
                </div>
            </div>

            {/* Details Grid - Using your Project Card style */}
            <div className="result-details-grid">
                {Object.entries(details).map(([key, value]) => (
                    <div className="project detail-card" key={key}>
                        <div className="project-top">
                            <h3 className="meta-label">{key.replace(/([A-Z])/g, ' $1')}</h3>
                        </div>
                        <div className="project-body">
                            {Array.isArray(value) ? (
                                <div className="project-tags">
                                    {value.map((val, i) => (
                                        <span key={i}>{val}</span>
                                    ))}
                                </div>
                            ) : (
                                <p className="meta-value" style={{ fontSize: '0.95rem' }}>{String(value)}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};