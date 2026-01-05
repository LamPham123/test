<script>
  // Hero component - Homepage hero section
  export let badgeText = '';
  export let profileImage = '/images/profile.png';
  export let titleLine1 = 'Welcome to Your Site!';
  export let titleLine2 = '(Statue Default)';
  export let description = 'Create amazing static sites easily with Statue using Markdown and Svelte. Fast, secure, and SEO-friendly sites ready in minutes.';
  export let primaryButtonText = 'Explore Content';
  export let primaryButtonLink = '#directories';
  export let secondaryButtonText = 'Documentation';
  export let secondaryButtonLink = '/docs';
</script>

<div class="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
  <div class="max-w-5xl mx-auto text-center relative">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl opacity-20"></div>

    <div class="relative z-10">
      <!-- Profile Image -->
      {#if profileImage}
        <div class="mb-8 flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[var(--color-primary)] object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      {/if}

      <!-- Badge (optional) -->
      {#if badgeText}
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-[color:oklch(0.78_0.14_152.17)/0.10] border border-[color:oklch(0.78_0.14_152.17)/0.20] mb-6">
          <span class="text-sm font-medium text-[var(--color-primary)]">{@html badgeText}</span>
        </div>
      {/if}

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span class="text-[var(--color-muted)] text-3xl md:text-4xl lg:text-5xl block mb-2">
          {titleLine1}
        </span>
        <span class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
          {titleLine2}
        </span>
      </h1>

      <p class="text-lg md:text-xl text-[var(--color-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
        {@html description}
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href={primaryButtonLink} class="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-on-primary)] font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <span class="relative z-10">{primaryButtonText}</span>
          <div class="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity brightness-110"></div>
        </a>
        <a href={secondaryButtonLink} class="group px-8 py-4 bg-[var(--color-card)]/50 backdrop-blur-sm text-[var(--color-foreground)] font-semibold rounded-xl border border-[var(--color-border)]/50 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)] transition-all duration-300 hover:shadow-lg">
          {secondaryButtonText}
          <span class="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </div>
</div>


