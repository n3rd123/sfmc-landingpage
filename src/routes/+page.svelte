<script>
    // Leistungen
    const services = [
        { 
            title: "Synchronisation", 
            desc: "Ich sorge für eine stabile Verbindung zwischen Sales Cloud und Marketing Cloud. So arbeiten Sie mit klaren Datenmodellen statt mit unübersichtlichem Flickwerk." 
        },
        { 
            title: "Segmentierung", 
            desc: "Ich erstelle Data Extensions und SQL Logiken, mit denen Sie sofort Kampagnen starten können. Das funktioniert auch dann zuverlässig, wenn es zeitlich mal eng wird." 
        },
        { 
            title: "Journeys", 
            desc: "Ich baue und stabilisiere Journeys, die im echten Betrieb bestehen. Damit Ihre Automationen nicht nur in der Theorie, sondern auch in der Praxis fehlerfrei laufen." 
        }
    ];

    // FAQ-Daten
    const faqData = [    
        { 
            q: "Wie läuft die operative Zusammenarbeit ab?", 
            a: "Wir arbeiten voll integriert in Ihren Prozessen. Die Kommunikation erfolgt direkt über Slack oder Teams, sodass wir Engpässe sofort auflösen können." 
        },
        { 
            q: "Unser SFMC liegt länger rum und wir wollen sie wieder live schicken?", 
            a: "Ich analysiere den aktuellen Status Quo Ihrer Instanz und reaktiviere die Synchronisation sowie die wichtigsten Journeys, damit Ihr System schnell wieder produktiv geht." 
        },
        { 
            q: "Unser Budget ist knapp, aber wir würden gerne die Marketing Cloud implementieren?", 
            a: "Kein Problem. Ich arbeite mit einem spezialisierten, deutschsprachigen Nearshore-Team zusammen. So erhalten Sie Experten-Qualität zu Konditionen, die auch bei knappem Budget funktionieren." 
        }
    ];

    // Svelte 5 State
    let openIndex = $state(-1);

    function toggle(index) {
        openIndex = openIndex === index ? -1 : index;
    }
</script>

<main>
    <section class="hero">
        <h1>Wenn Ihre Salesforce Marketing Cloud schnell Ergebnisse liefern muss.</h1>
        <p class="subtitle">
            Ich unterstütze Sie operativ bei der Synchronisation, der Segmentierung und Ihren Journeys. 
            Dabei arbeite ich fokussiert, pragmatisch und ohne unnötige Umwege.
        </p>
    </section>

    <section class="services">
        <h2>Wobei ich helfe</h2>
        <div class="cards">
            {#each services as service}
                <div class="card">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                </div>
            {/each}
        </div>
    </section>

    <section class="process">
        <h2>So arbeite ich</h2>
        <ul class="check-list">
            <li>Wir klären das konkrete Problem ohne kompliziertes Overengineering.</li>
            <li>Ich setze direkt in Ihrem System um statt nur Folien zu präsentieren.</li>
            <li>Sie erhalten saubere Lösungen, die jeder im Team nachvollziehen kann.</li>
            <li>Stabilität steht für mich immer vor kurzfristigen Workarounds.</li>
        </ul>
    </section>

    <section class="salesforce">
        <div class="content-box">
            <h2>Salesforce als Gesamtsystem</h2>
            <p>
                Viele Probleme in der Marketing Cloud haben ihre Ursache eigentlich im CRM. 
                Deshalb betrachte ich die SFMC immer auf Basis einer sauberen Sales Cloud.
            </p>
            <ul class="bullet-list">
                <li>Die Sales Cloud dient als führende Datenquelle.</li>
                <li>Wir nutzen klare Strukturen für Leads und Contacts.</li>
                <li>Die Synchronisation zur Marketing Cloud läuft dauerhaft stabil.</li>
                <li>Prozesse in Marketing und Sales greifen nahtlos ineinander.</li>
            </ul>
        </div>
    </section>

    <section class="faq-section">
        <h2>Häufige Fragen</h2>
        <div class="faq-container">
            {#each faqData as item, i}
                <div class="faq-item">
                    <button type="button" onclick={() => toggle(i)} class="faq-question">
                        <span>{item.q}</span>
                        <span class="icon">{openIndex === i ? '−' : '+'}</span>
                    </button>
                    {#if openIndex === i}
                        <div class="faq-answer">
                            <p>{item.a}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </section>

    <section class="contact">
        <h2>Kontakt</h2>
        <p class="intro">Schreiben Sie mir kurz, wo es aktuell hakt. Ich melde mich zeitnah bei Ihnen zurück.</p>

        <form action="https://form.taxi/f/DEIN_ENDPOINT" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Ihr Name" required />
            </div>

            <div class="form-group">
                <label for="email">E-Mail</label>
                <input id="email" type="email" name="email" placeholder="ihre@mail.de" required />
            </div>

            <div class="form-group">
                <label for="message">Nachricht</label>
                <textarea id="message" name="message" placeholder="Wobei brauchen Sie kurzfristig Unterstützung?" required></textarea>
            </div>

            <label class="consent">
                <input type="checkbox" required />
                <span>Ich bin mit der Verarbeitung meiner Daten zur Kontaktaufnahme einverstanden.</span>
            </label>

            <button type="submit">Anfrage senden</button>
        </form>
    </section>
</main>

<style>
    :global(body) {
        background-color: #050505;
        color: #eeeeee;
        margin: 0;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    main {
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 1.5rem;
    }

    section { margin-bottom: 6rem; }

    h1 {
        font-size: clamp(2.2rem, 5vw, 3.2rem);
        line-height: 1.1;
        margin-bottom: 1.5rem;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -0.02em;
    }

    h2 {
        font-size: 1.8rem;
        border-left: 4px solid #00a1e0; 
        padding-left: 1.25rem;
        margin-bottom: 2rem;
        font-weight: 600;
        color: #ffffff;
        display: block;
    }

    h3 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        color: #00a1e0; 
        font-weight: 600;
    }

    p { color: #aaaaaa; line-height: 1.6; font-size: 1.1rem; }

    .subtitle {
        max-width: 750px;
        font-size: 1.25rem;
        border-bottom: 1px solid #222;
        padding-bottom: 2.5rem;
        color: #cccccc;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .card {
        background: #0d0d0d;
        border: 1px solid #222;
        padding: 2.2rem;
    }

    /* FAQ Styles - Blau ohne Orange-Hover */
    .faq-section { width: 100%; }
    .faq-container { border-top: 1px solid #222; }
    .faq-item { border-bottom: 1px solid #222; }

    .faq-question {
        width: 100%;
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 1.5rem 0;
        text-align: left;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        outline: none;
        transition: color 0.2s ease;
    }

    .faq-question:hover, 
    .faq-question:focus,
    .faq-question:active { 
        color: #00a1e0; 
        background: none; /* Verhindert graue Hintergründe in manchen Browsern */
    }

    .faq-answer { padding-bottom: 1.5rem; color: #aaaaaa; line-height: 1.6; }
    .icon { color: #00a1e0; font-size: 1.5rem; }

    /* Listen */
    ul { list-style: none; padding: 0; }
    .check-list li::before { content: "✓"; color: #ff6600; margin-right: 14px; font-weight: bold; }
    .bullet-list li::before { content: "•"; color: #00a1e0; margin-right: 14px; font-weight: bold; font-size: 1.5rem; line-height: 1; }
    .check-list li, .bullet-list li { display: flex; margin-bottom: 1.2rem; align-items: flex-start; }

    /* Formular */
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.2rem; }
    label { font-size: 0.75rem; color: #666; text-transform: uppercase; font-weight: 600; }
    input, textarea {
        background: #111; border: 1px solid #333; color: #fff;
        padding: 1rem; border-radius: 4px; font-size: 1rem; width: 100%; box-sizing: border-box;
    }
    input:focus, textarea:focus { border-color: #00a1e0; outline: none; }
    
    button[type="submit"] {
        background: #ff6600; color: #ffffff; border: none; padding: 1.2rem 2.5rem;
        font-weight: 700; cursor: pointer; border-radius: 4px; font-size: 1.1rem;
    }
    button[type="submit"]:hover { background: #e65c00; }

    .consent { display: flex; gap: 0.8rem; margin: 1.5rem 0 2rem 0; font-size: 0.9rem; color: #888; cursor: pointer; }

    @media (max-width: 600px) {
        main { padding: 2rem 1.5rem; }
        section { margin-bottom: 4rem; }
        h1 { font-size: 2rem; }
    }
</style>