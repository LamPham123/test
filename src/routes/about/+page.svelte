<script>
	import { PageHero } from '$lib';
</script>

<svelte:head>
	<title>About Me - Lam Pham</title>
	<meta name="description" content="Software Engineer | Computer Science Student at University of Washington" />
</svelte:head>

<div
	class="min-h-screen text-white bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)"
>
	<PageHero
		title="About Me"
		description="Software Engineer | Computer Science Student at University of Washington"
	/>

	<div class="container mx-auto px-4 pb-32 max-w-4xl">
		<!-- Profile Section -->
		<div class="flex flex-col md:flex-row gap-8 mb-16 items-center md:items-start">
			<div class="flex-shrink-0">
				<img src="/images/profile.png" alt="Lam Pham" class="w-48 h-48 rounded-full border-4 border-[var(--color-primary)] object-cover" />
			</div>
			<div class="flex-1">
				<h2 class="text-3xl font-bold mb-4">Hi, I'm Lam Pham</h2>
				<p class="text-lg text-[var(--color-muted)] mb-4">
					I'm a Computer Science student at the University of Washington Seattle. <br>I'm broadly interested in distributed systems, artificial intelligence, and full-stack development. but often times you can find me reading, eating, playing jazz piano and guitar and posting on BeReal!
				</p>
				<div class="flex gap-4 flex-wrap">
					<a href="mailto:lamtpham705@gmail.com" class="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] rounded-lg hover:brightness-110 transition">
						<span>Email Me</span>
					</a>
					<a href="https://linkedin.com/in/lamtpham705" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/10 transition">
						<span>LinkedIn</span>
					</a>
					<a href="tel:253-455-3286" class="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/10 transition">
						<span>253-455-3286</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Experience Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-8 text-[var(--color-primary)]">Experience</h2>

			<div class="space-y-8">
				<!-- AWS -->
				<div class="border-l-4 border-[var(--color-primary)] pl-6">
					<h3 class="text-2xl font-bold mb-2">Software Development Engineer Intern</h3>
					<p class="text-[var(--color-muted)] mb-2">Amazon Web Services (AWS) - CloudFront | Seattle, WA</p>
					<p class="text-sm text-[var(--color-muted)] mb-4">June 2025 – Sept. 2025</p>
					<ul class="list-disc list-inside space-y-2 text-[var(--color-muted)]">
						<li>Improved availability monitoring coverage by 45% across 300+ AWS edge locations</li>
						<li>Reduced operator incident resolution time by 60% through hierarchical alarms</li>
						<li>Leveraged AWS CDK to deploy 1,000+ monitoring dashboards</li>
					</ul>
				</div>

				<!-- UW IDL -->
				<div class="border-l-4 border-[var(--color-secondary)] pl-6">
					<h3 class="text-2xl font-bold mb-2">Undergraduate Research Intern</h3>
					<p class="text-[var(--color-muted)] mb-2">University of Washington, Interactive Data Lab (IDL) | Seattle, WA</p>
					<p class="text-sm text-[var(--color-muted)] mb-4">Jan. 2025 – June 2025</p>
					<ul class="list-disc list-inside space-y-2 text-[var(--color-muted)]">
						<li>Developed queuing system in TypeScript for open-source data sonification library</li>
						<li>Designed Svelte-based toolkit with D3.js visualizations</li>
						<li>Implemented comprehensive unit/integration tests and API documentation</li>
					</ul>
				</div>

				<!-- VEYM -->
				<div class="border-l-4 border-[var(--color-primary)] pl-6">
					<h3 class="text-2xl font-bold mb-2">Full-Stack Software Development Intern</h3>
					<p class="text-[var(--color-muted)] mb-2">Vietnamese Eucharistic Youth Movement | Seattle, WA</p>
					<p class="text-sm text-[var(--color-muted)] mb-4">March 2024 – Present</p>
					<ul class="list-disc list-inside space-y-2 text-[var(--color-muted)]">
						<li>Increased support efficiency by 40% for 5,000+ users</li>
						<li>Designed RESTful APIs and complex relational database schemas</li>
						<li>Collaborated in bi-weekly Agile sprints with cross-functional teams</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-8 text-[var(--color-primary)]">Technical Skills</h2>

			<div class="grid md:grid-cols-2 gap-6">
				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-xl font-bold mb-3 text-[var(--color-primary)]">Languages</h3>
					<p class="text-[var(--color-muted)]">Java, C, C++, C# .NET Core, Go, Python, SQL, JavaScript, TypeScript, Ruby, HTML/CSS</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-xl font-bold mb-3 text-[var(--color-primary)]">Frameworks</h3>
					<p class="text-[var(--color-muted)]">React, Next.js, Node.js, Svelte, Flask, Django, Streamlit, Rails, React Native</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-xl font-bold mb-3 text-[var(--color-primary)]">Libraries</h3>
					<p class="text-[var(--color-muted)]">NumPy, pandas, Matplotlib, PyTorch, TensorFlow, Keras, Redux</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-xl font-bold mb-3 text-[var(--color-primary)]">Tools & Platforms</h3>
					<p class="text-[var(--color-muted)]">Git, Postman, Docker, Kubernetes, AWS (CloudWatch, CDK), Azure DevOps, MongoDB</p>
				</div>
			</div>
		</section>

		<!-- Education Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-8 text-[var(--color-primary)]">Education</h2>

			<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
				<div class="flex justify-between items-start mb-4">
					<div>
						<h3 class="text-2xl font-bold">University of Washington - Seattle</h3>
						<p class="text-lg text-[var(--color-muted)]">Bachelor of Science, Computer Science</p>
					</div>
					<div class="text-right">
						<p class="text-lg font-bold text-[var(--color-primary)]">GPA: 3.74</p>
						<p class="text-sm text-[var(--color-muted)]">Expected: June 2027</p>
					</div>
				</div>
				<div>
					<p class="text-sm font-semibold mb-2">Relevant Coursework:</p>
					<p class="text-sm text-[var(--color-muted)]">
						Deep Learning, Algorithms, Database Management, Data Structures & Parallelism,
						Hardware/Software Interface, Distributed Systems, Artificial Intelligence,
						System Design, Computer Security
					</p>
				</div>
			</div>
		</section>
	</div>
</div>
