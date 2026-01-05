<script>
	import { Hero, BlogGrid } from '$lib';

	const { data } = $props();

	// Featured projects
	const projects = [
		{
			metadata: {
				title: 'Dr Wifi',
				description: '2nd Place at Dubhacks 2025 (T-Mobile) - AI-powered network diagnostic assistant',
				date: '2025-10-01',
				author: 'Lam Pham',
				thumbnail: '/images/drwifi.png' // Add your project screenshot
			},
			url: '/projects/dr-wifi'
		},
		{
			metadata: {
				title: 'CalPal.ai',
				description: 'AI calendar assistant with agentic workflow for natural language scheduling',
				date: '2025-10-01',
				author: 'Lam Pham',
				// thumbnail: '/images/calpalai.png'
			},
			url: '/projects/calpal'
		},
		{
			metadata: {
				title: 'Data Sonification Toolkit',
				description: 'Accessible data visualization through sound - Research project at UW Interactive Data Lab',
				date: '2025-01-01',
				author: 'Lam Pham',
				thumbnail: '/images/erie.png'
			},
			url: '/projects/data-sonification'
		},
		{
			metadata: {
				title: 'VEYM Members Portal',
				description: 'Full-stack member management system serving 5,000+ users',
				date: '2024-03-01',
				author: 'Lam Pham',
				thumbnail: '/images/tntt.png'
			},
			url: '/projects/veym-portal'
		}
	];
</script>

<svelte:head>
	<title>Lam Pham - Portfolio</title>
	<meta
		name="description"
		content="I'm a computer science student at the University of Washington Seattle. I'm interested in full-stack development and AI/ML."
	/>
</svelte:head>

<div
	class="min-h-screen bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)"
>
	<Hero
	titleLine1="Hi, I'm"
	titleLine2="Lam Pham"
	description="Building products that solve problems and make life easier
	<br />Prev @ Amazon"
	primaryButtonText="View My Projects"
	primaryButtonLink="#projects"
	secondaryButtonText="View My Resume"
	secondaryButtonLink="/resume" />

	<section id="projects" class="projects-section">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">Featured Projects</h2>
				<div class="section-divider"></div>
			</div>
			<BlogGrid posts={projects} emptyMessage="No projects yet. Check back soon!" />
		</div>
	</section>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.projects-section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 80px 48px;
	}

	.container {
		width: 100%;
	}

	.section-header {
		text-align: center;
		margin-bottom: 48px;
	}

	.section-title {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 16px;
	}

	.section-divider {
		width: 80px;
		height: 4px;
		background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
		margin: 0 auto;
		border-radius: 2px;
	}

	@media (max-width: 768px) {
		.projects-section {
			padding: 48px 24px;
		}

		.section-header {
			margin-bottom: 32px;
		}
	}
</style>
