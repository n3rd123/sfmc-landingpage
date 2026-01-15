<script>
	// Pfad zu deinem Bild im /public Ordner
	let heroImage = "/hero.jpg";
	
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

	section {
		margin-bottom: 6rem;
	}

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
	}

	h3 {
		font-size: 1.4rem;
		margin-bottom: 1rem;
		color: #00a1e0; 
		font-weight: 600;
	}

	p {
		color: #aaaaaa;
		line-height: 1.6;
		font-size: 1.1rem;
	}

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
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.card:hover {
		border-color: #00a1e0;
		transform: translateY(-4px);
		background: #111;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	.check-list li, .bullet-list li {
		margin-bottom: 1.2rem;
		color: #cccccc;
		display: flex;
		align-items: flex-start;
		line-height: 1.4;
	}

	.check-list li::before {
		content: "✓";
		color: #ff6600;
		margin-right: 14px;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.bullet-list li::before {
		content: "•";
		color: #00a1e0;
		margin-right: 14px;
		font-weight: bold;
		font-size: 1.5rem;
		line-height: 1;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1.2rem;
	}

	label {
		font-size: 0.75rem;
		color: #666666;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: 600;
	}

	input, textarea {
		background: #111111;
		border: 1px solid #333333;
		color: #ffffff;
		padding: 1rem;
		border-radius: 4px;
		font-size: 1rem;
		transition: all 0.2s;
	}

	input:focus, textarea:focus {
		outline: none;
		border-color: #00a1e0;
		background: #151515;
	}

	textarea {
		min-height: 160px;
		resize: vertical;
	}

	.consent {
		font-size: 0.9rem;
		color: #888888;
		display: flex;
		gap: 0.8rem;
		align-items: flex-start;
		cursor: pointer;
		margin: 1.5rem 0 2rem 0;
	}

	.consent input {
		margin-top: 0.2rem;
	}

	button {
		background: #ff6600;
		color: #ffffff;
		border: none;
		padding: 1.2rem 2.5rem;
		font-weight: 700;
		cursor: pointer;
		border-radius: 4px;
		font-size: 1.1rem;
		transition: all 0.2s;
		box-shadow: 0 4px 14px rgba(255, 102, 0, 0.2);
	}

	button:hover {
		background: #e65c00;
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(255, 102, 0, 0.3);
	}

	button:active {
		transform: translateY(0);
	}

	@media (max-width: 600px) {
		main {
			padding: 2rem 1rem;
		}
		section {
			margin-bottom: 4rem;
		}
	}
</style>