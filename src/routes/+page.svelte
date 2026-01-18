<script>
    const services = [
        { title: "Synchronisation", desc: "Ich sorge für eine stabile Verbindung zwischen Sales Cloud und Marketing Cloud. So arbeiten Sie mit klaren Datenmodellen statt mit unübersichtlichem Flickwerk." },
        { title: "Segmentierung", desc: "Ich erstelle Data Extensions und SQL Logiken, mit denen Sie sofort Kampagnen starten können. Das funktioniert auch dann zuverlässig, wenn es zeitlich mal eng wird." },
        { title: "Journeys", desc: "Ich baue und stabilisiere Journeys, die im echten Betrieb bestehen. Damit Ihre Automationen nicht nur in der Theorie, sondern auch in der Praxis fehlerfrei laufen." }
    ];

    const faqData = [    
        { q: "Wie läuft die operative Zusammenarbeit ab?", a: "Wir arbeiten voll integriert in Ihren Prozessen. Die Kommunikation erfolgt direkt über Slack oder Teams, sodass wir Engpässe sofort auflösen können." },
        { q: "Unser SFMC liegt länger rum und wir wollen sie wieder live schicken?", a: "Ich analysiere den aktuellen Status Quo Ihrer Instanz und reaktiviere die Synchronisation sowie die wichtigsten Journeys, damit Ihr System schnell wieder produktiv geht." },
        { q: "Unser Budget ist knapp, aber wir würden gerne die Marketing Cloud implementieren?", a: "Kein Problem. Ich arbeite mit einem spezialisierten, deutschsprachigen Nearshore-Team zusammen. So erhalten Sie Experten-Qualität zu Konditionen, die auch bei knappem Budget funktionieren." }
    ];

    let openIndex = $state(-1);

    function toggle(index) {
        openIndex = openIndex === index ? -1 : index;
    }
</script>

<main>
    <section class="hero">
        <h1>Wenn Ihre Salesforce Marketing Cloud schnell Ergebnisse liefern muss.</h1>
        <p class="subtitle">Ich unterstütze Sie operativ bei der Synchronisation, der Segmentierung und Ihren Journeys.</p>
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

    <section class="faq-section">
        <h2>Häufige Fragen</h2>
        <div class="faq-container">
            {#each faqData as item, i}
                <div class="faq-item">
                    <button type="button" onclick={() => toggle(i)} class="faq-question">
                        <span class="q-text">{item.q}</span>
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

    main { max-width: 900px; margin: 0 auto; padding: 4rem 1.5rem; }
    section { margin-bottom: 6rem; width: 100%; position: relative; }

    h1 { font-size: clamp(2.2rem, 5vw, 3.2rem); color: #ffffff; margin-bottom: 1.5rem; }
    h2 { font-size: 1.8rem; border-left: 4px solid #00a1e0; padding-left: 1.25rem; color: #ffffff; margin-bottom: 2rem; }
    h3 { color: #00a1e0; margin-bottom: 1rem; }
    p { color: #aaaaaa; line-height: 1.6; }

    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
    .card { background: #0d0d0d; border: 1px solid #222; padding: 2.2rem; }

    /* FAQ Styles - EXPLIZIT KORRIGIERT */
    .faq-container { border-top: 1px solid #222; width: 100%; }
    .faq-item { border-bottom: 1px solid #222; width: 100%; }

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
        position: relative;
        z-index: 10; /* Sicherstellen, dass Klicks ankommen */
    }

    .faq-question:hover { color: #00a1e0; }
    .q-text { padding-right: 20px; pointer-events: none; } /* Verhindert Klick-Interferenzen */
    .icon { color: #00a1e0; font-size: 1.5rem; pointer-events: none; }
    .faq-answer { padding-bottom: 1.5rem; animation: fadeIn 0.3s ease; }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Formular */
    .form-group { margin-bottom: 1.2rem; display: flex; flex-direction: column; }
    input, textarea { background: #111; border: 1px solid #333; color: #fff; padding: 1rem; margin-top: 0.5rem; }
    button[type="submit"] { background: #ff6600; color: #fff; border: none; padding: 1.2rem 2.5rem; cursor: pointer; font-weight: bold; }
</style>