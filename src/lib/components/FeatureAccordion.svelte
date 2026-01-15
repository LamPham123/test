<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let {
		items = [],
		class: className = ''
	} = $props();

	let openIndex = $state(null);

	function toggleItem(index) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="space-y-3 {className}">
	{#each items as item, index}
		<div class="w-full accordion-item">
			<div
				class="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] {openIndex === index
					? 'border-b-0 rounded-b-none'
					: ''}"
			>
				<button
					onclick={() => toggleItem(index)}
					class="w-full text-left p-6 hover:bg-[var(--color-surface)] transition-colors duration-150"
				>
					<div class="flex justify-between items-start gap-4">
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-[var(--color-foreground)] mb-2">
								{item.title}
							</h3>
							{#if item.description}
								<p class="text-[var(--color-muted)] leading-relaxed">
									{item.description}
								</p>
							{/if}
						</div>
						<svg
							class="w-5 h-5 text-[var(--color-muted)] flex-shrink-0 mt-1 transition-transform duration-200 {openIndex ===
							index
								? 'rotate-180'
								: ''}"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</button>
			</div>

			{#if openIndex === index}
				<div
					transition:slide={{ duration: 200, easing: quintOut }}
					class="overflow-hidden rounded-b-lg border border-t-0 border-[var(--color-border)] bg-[var(--color-surface)]"
				>
					<div class="px-6 py-6 pb-8">
						<div class="prose prose-invert max-w-none" style="padding-right: 0;">
							{@html item.content}
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.accordion-item {
		animation: fadeInUp 0.3s ease-out;
		animation-fill-mode: both;
	}

	.accordion-item:nth-child(1) {
		animation-delay: 0s;
	}
	.accordion-item:nth-child(2) {
		animation-delay: 0.1s;
	}
	.accordion-item:nth-child(3) {
		animation-delay: 0.2s;
	}
	.accordion-item:nth-child(4) {
		animation-delay: 0.3s;
	}
	.accordion-item:nth-child(5) {
		animation-delay: 0.4s;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(.prose) {
		color: var(--color-foreground);
		line-height: 1.75;
	}

	:global(.prose p) {
		margin-bottom: 1rem;
		color: var(--color-muted);
	}

	:global(.prose strong) {
		color: var(--color-foreground);
		font-weight: 600;
	}

	:global(.prose a) {
		color: var(--color-primary);
		text-decoration: underline;
	}

	:global(.prose a:hover) {
		color: var(--color-secondary);
	}

	:global(.prose ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
		color: var(--color-muted);
	}

	:global(.prose code) {
		background-color: var(--color-background);
		padding: 0.2em 0.4em;
		border-radius: 0.25rem;
		font-size: 0.875em;
		color: var(--color-foreground);
	}
</style>
