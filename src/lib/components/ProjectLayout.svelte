<script>
	import FeatureAccordion from './FeatureAccordion.svelte';
	import { marked } from 'marked';

	// Configure marked to allow HTML
	marked.setOptions({
		gfm: true,
		breaks: true,
		sanitize: false
	});

	let {
		title = '',
		organization = '',
		award = '',
		thumbnail = '',
		technologies = '',
		content = '',
		learnings = [],
		pdfEmbed = '',
		pdfPaper = '',
		pdfPoster = '',
		backLink = '/',
		backLinkText = 'Back'
	} = $props();

	// Convert learnings to accordion items with description
	function getAccordionItems(learnings) {
		if (!learnings) return [];
		return learnings.map((learning) => ({
			title: learning.title,
			description: '', // You can add short descriptions if needed
			content: marked(learning.content || '')
		}));
	}
</script>

<div class="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
	<div class="container mx-auto px-6 pt-24 pb-12 max-w-6xl">
		<!-- Back Link -->
		<a
			href={backLink}
			class="inline-flex items-center text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] mb-8 transition-colors"
		>
			<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			{backLinkText}
		</a>

		<!-- Project Title -->
		<div class="mb-8">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

			{#if organization || award}
				<p class="text-lg text-[var(--color-muted)] mb-4">
					{#if award}
						 <strong>{award}</strong>
					{/if}
					{#if organization && award}
						<br />
					{/if}
					{#if organization}
						{organization}
					{/if}
				</p>
			{/if}

			{#if technologies}
				<div class="inline-block bg-[var(--color-card)] border border-[var(--color-border)] px-4 py-2 rounded-full text-sm text-[var(--color-muted)]">
					{technologies}
				</div>
			{/if}
		</div>

		<!-- Project Image -->
		{#if thumbnail}
			<div class="mb-12">
				<div class="rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)]" style="max-width: 800px; margin: 0 auto;">
					<img src={thumbnail} alt={title} class="w-full h-auto object-cover" style="max-height: 500px; object-fit: cover;" />
				</div>
			</div>
		{/if}

		<!-- Project Content -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-8 text-[var(--color-primary)]">Overview</h2>
			<div class="prose prose-lg max-w-none">
				{@html content}
			</div>
		</section>

		<!-- What I Learned Section -->
		{#if learnings && learnings.length > 0}
			<section class="mb-12">
				<h2 class="text-3xl font-bold mb-8 text-[var(--color-primary)]">What I Learned</h2>
				<FeatureAccordion items={getAccordionItems(learnings)} />
			</section>
		{/if}

		<!-- Research Paper Section (Single PDF) -->
		{#if pdfEmbed}
			<section class="mb-16">
				<h2 class="text-3xl font-bold mb-8 text-[var(--color-primary)]">Research Poster</h2>
				<div style="width: 100%; margin: 0 auto;">
					<iframe
						src={pdfEmbed}
						width="100%"
						height="1000"
						title="Research Paper PDF"
						style="border: 1px solid var(--color-border); border-radius: 8px; display: block;"
					>
					</iframe>
					<p style="margin-top: 1rem; text-align: center;">
						<a href={pdfEmbed} download style="color: var(--color-primary);">Download the PDF</a>
					</p>
				</div>
			</section>
		{/if}

		<!-- Research Paper & Poster Section (Two Columns) -->
		{#if pdfPaper || pdfPoster}
			<section class="mb-16">
				<h2 class="text-3xl font-bold mb-8 text-[var(--color-primary)]">Research Paper & Poster</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					{#if pdfPaper}
						<div>
							<iframe
								src={pdfPaper}
								width="100%"
								height="800"
								title="Research Paper PDF"
								style="border: 1px solid var(--color-border); border-radius: 8px; display: block;"
							>
							</iframe>
							<p style="margin-top: 1rem; text-align: center;">
								<a href={pdfPaper} download style="color: var(--color-primary);">Download Paper</a>
							</p>
						</div>
					{/if}
					{#if pdfPoster}
						<div>
							<iframe
								src={pdfPoster}
								width="100%"
								height="800"
								title="Research Poster PDF"
								style="border: 1px solid var(--color-border); border-radius: 8px; display: block;"
							>
							</iframe>
							<p style="margin-top: 1rem; text-align: center;">
								<a href={pdfPoster} download style="color: var(--color-primary);">Download Poster</a>
							</p>
						</div>
					{/if}
				</div>
			</section>
		{/if}
	</div>
</div>

<style>
	:global(.prose) {
		color: var(--color-foreground);
	}

	:global(.prose h2) {
		color: var(--color-foreground);
		font-size: 1.875rem;
		font-weight: 700;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	:global(.prose h3) {
		color: var(--color-foreground);
		font-size: 1.5rem;
		font-weight: 600;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose p) {
		color: var(--color-muted);
		line-height: 1.75;
		margin-bottom: 1.25rem;
		font-size: 1.125rem;
	}

	:global(.prose ul, .prose ol) {
		color: var(--color-muted);
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose img) {
		border-radius: 0.5rem;
		margin: 2rem 0;
		display: block;
		max-width: 100%;
		height: auto;
	}

	:global(.prose a) {
		color: var(--color-primary);
		text-decoration: underline;
	}

	:global(.prose a:hover) {
		color: var(--color-secondary);
	}

	:global(.prose code) {
		background: var(--color-card);
		padding: 0.2em 0.4em;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}

	:global(.prose pre) {
		background: var(--color-card);
		border: 1px solid var(--color-border);
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
	}
</style>
