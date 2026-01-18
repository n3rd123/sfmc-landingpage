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

   // Überarbeitete FAQ-Daten
    const faqData = [    
        { 
            q: "Wie schnell können wir mit der operativen Unterstützung starten?", 
            a: "Nach einem kurzen Erstgespräch zur Klärung der Zugriffsrechte können wir meist innerhalb von 48 Stunden mit den ersten Tasks in Ihrer Marketing Cloud starten. Die Kommunikation erfolgt unkompliziert via Slack oder Teams." 
        },
        { 
            q: "Können auch bestehende, fehlerhafte Journeys repariert werden?", 
            a: "Ja. Ich führe einen kurzen Check der Datenquellen und Filterkriterien durch, identifiziere die Fehlerquelle und stabilisiere Ihre Journeys, ohne den laufenden Betrieb zu unterbrechen." 
        },
        { 
            q: "Bieten Sie auch Unterstützung bei knappen Budgets an?", 
            a: "Ja. Durch die Zusammenarbeit mit einem spezialisierten, deutschsprachigen Nearshore-Team kann ich hochwertige SFMC-Expertise zu Konditionen anbieten, die auch für kleinere Budgets oder Pilotprojekte skalierbar sind." 
        }
    ];

    // Svelte 5 Reaktivität
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
        <p class="intro">Schreiben Sie mir kurz, wo es aktuell hakt.</p>

        <form action="https://form.taxi/f/DEIN_ENDPOINT" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" required />
            </div>

            <div class="form-group">
                <label for="email">E-Mail</label>
                <input id="email" type="email" name="email" required />
            </div>

            <div class="form-group">
                <label for="message">Nachricht</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit">Anfrage senden</button>
        </form>
    </section>
</main>

<style>
    :global(body) {
        background-color: #050505;
        color: #eeeeee;
        margin: 0;
        font-family: 'Inter', sans-serif;
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
        color: #ffffff;
    }

    h2 {
        font-size: 1.8rem;
        border-left: 4px solid #00a1e0; 
        padding-left: 1.25rem;
        margin-bottom: 2rem;
        color: #ffffff;
    }

    h3 {
        color: #00a1e0; 
        margin-bottom: 1rem;
    }

    p { color: #aaaaaa; line-height: 1.6; }

    .subtitle {
        font-size: 1.25rem;
        border-bottom: 1px solid #222;
        padding-bottom: 2.5rem;
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

    /* FAQ Sektion - Salesforce Blau */
    .faq-container { border-top: 1px solid #222; }
    .faq-item { border-bottom: 1px solid #222; }

    .faq-question {
        width: 100%;
        background: none;
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
        transition: color 0.2s;
    }

    .faq-question:hover, .faq-question:focus { 
        color: #00a1e0; 
    }

    .faq-answer { padding-bottom: 1.5rem; color: #aaaaaa; }
    .icon { color: #00a1e0; font-size: 1.5rem; }

    /* Listen & Formular */
    ul { list-style: none; padding: 0; }
    .check-list li::before { content: "✓"; color: #ff6600; margin-right: 14px; font-weight: bold; }
    .bullet-list li::before { content: "•"; color: #00a1e0; margin-right: 14px; font-weight: bold; font-size: 1.5rem; }
    .check-list li, .bullet-list li { display: flex; margin-bottom: 1.2rem; }

    .form-group { display: flex; flex-direction: column; margin-bottom: 1.2rem; }
    input, textarea {
        background: #111; border: 1px solid #333; color: #fff;
        padding: 1rem; margin-top: 0.5rem;
    }
    button[type="submit"] {
        background: #ff6600; color: #fff; border: none; padding: 1.2rem 2.5rem;
        font-weight: 700; cursor: pointer; margin-top: 1rem;
    }
</style>