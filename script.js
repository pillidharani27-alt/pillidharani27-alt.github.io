/* -------- Base -------- */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
    background: #0f172a; /* dark blue */
    color: #e5e7eb;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

/* -------- Top Navigation -------- */
.top-nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #1e293b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 6%;
}

.logo {
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 0.05em;
}

.logo span {
    color: #38bdf8;
}

.top-nav nav a {
    margin-left: 1.5rem;
    font-size: 0.95rem;
    opacity: 0.8;
    transition: opacity 0.2s, color 0.2s;
}

.top-nav nav a:hover {
    opacity: 1;
    color: #38bdf8;
}

/* -------- Sections -------- */
.section,
.hero {
    padding: 4rem 6%;
    max-width: 1100px;
    margin: 0 auto;
}

/* -------- Hero -------- */
.hero {
    min-height: 60vh;
    display: flex;
    align-items: center;
}

.hero-text .tag {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    color: #38bdf8;
    margin-bottom: 0.5rem;
}

.hero-text h1 {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
}

.hero-text h1 span {
    color: #facc15;
}

.hero-text .sub {
    max-width: 580px;
    opacity: 0.85;
    margin-bottom: 1.5rem;
}

/* Buttons */
.hero-buttons {
    display: flex;
    gap: 1rem;
}

.btn {
    display: inline-block;
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    font-size: 0.95rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, background 0.15s, color 0.15s;
}

.btn.primary {
    background: #38bdf8;
    color: #0f172a;
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.25);
}

.btn.outline {
    border-color: #64748b;
    background: transparent;
}

.btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.5);
}

/* -------- Generic section styles -------- */
.section h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #f9fafb;
}

.section p {
    max-width: 800px;
    opacity: 0.9;
}

/* Skills chips */
.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1rem;
}

.chip {
    padding: 0.35rem 0.8rem;
    border-radius: 999px;
    background: #1f2937;
    border: 1px solid #374151;
    font-size: 0.85rem;
}

/* Project cards */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.card {
    background: #111827;
    border-radius: 1rem;
    padding: 1.25rem 1.3rem;
    border: 1px solid #1f2937;
    box-shadow: 0 18px 35px rgba(15, 23, 42, 0.35);
}

.card h3 {
    margin-bottom: 0.5rem;
    color: #e5e7eb;
}

.card p {
    font-size: 0.92rem;
}

.card .tech {
    margin-top: 0.75rem;
    font-size: 0.8rem;
    color: #9ca3af;
}

.card-link {
    display: inline-block;
    margin-top: 0.9rem;
    font-size: 0.9rem;
    color: #38bdf8;
}

/* Contact */
.contact-list {
    margin-top: 0.75rem;
    list-style: none;
}

.contact-list li {
    margin-bottom: 0.3rem;
}

/* Footer */
footer {
    text-align: center;
    padding: 1.5rem 0;
    font-size: 0.8rem;
    opacity: 0.7;
    border-top: 1px solid #1f2937;
    margin-top: 2rem;
}

/* -------- Responsive -------- */
@media (max-width: 768px) {
    .top-nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .top-nav nav a {
        margin-left: 0;
        margin-right: 0.9rem;
        font-size: 0.9rem;
    }

    .hero {
        padding-top: 5rem;
    }

    .hero-text h1 {
        font-size: 2rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: flex-start;
    }
}
