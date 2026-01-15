<script>

  import { page } from '$app/stores';
  import Search from './Search.svelte';

  export let navbarItems = [];
  export let activePath = '';
  export let showSearch = false;
  export let searchPlaceholder = "Search...";
  
  let isMenuOpen = false;
  let isHidden = false;
  let lastScrollY = 0;
  let scrollY = 0;

  // Reactive current path from SvelteKit store
  $: currentPath = $page.url.pathname;

  // Check if a nav item is active (exact match for home, startsWith for others)
  function isActive(itemUrl, path) {
    if (itemUrl === '/') {
      return path === '/';
    }
    return path === itemUrl || path.startsWith(itemUrl + '/');
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleScroll() {
    const currentY = window.scrollY || 0;
    scrollY = currentY;
    const delta = currentY - lastScrollY;
    // Hide on scroll down, show on scroll up
    if (Math.abs(delta) > 6) {
      isHidden = delta > 0 && currentY > 24;
      lastScrollY = currentY;
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
</script>

<nav class="bg-[var(--color-background)] {currentPath === '/' && !isMenuOpen && scrollY < 10 ? 'md:!bg-transparent' : ''} text-[var(--color-foreground)] fixed w-full top-0 z-50 transition-transform duration-300 will-change-transform {isHidden ? '-translate-y-full' : 'translate-y-0'}" style="view-transition-name: navbar;">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center">
          <div class="text-[var(--color-primary)]" style="width: 80px; height: 42px;">
            <svg viewBox="0 0 80 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Slanted L -->
              <path d="M20 6 L14 32 L30 32" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- Slanted P -->
              <path d="M44 32 L38 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
              <path d="M38 6 L48 6 Q58 8, 56 16 Q54 24, 44 24 L40 20"
                    stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- Speed lines for dynamic effect -->
              <line x1="5" y1="12" x2="10" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
              <line x1="3" y1="18" x2="9" y2="18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
            </svg>
          </div>
        </a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-4">
        <a
          href="/"
          class="py-2 px-3 font-medium text-sm transition-colors duration-200 {isActive('/', currentPath) ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'}"
        >
          Home
        </a>

        <a
          href="/about"
          class="py-2 px-3 font-medium text-sm transition-colors duration-200 {isActive('/about', currentPath) ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'}"
        >
          About
        </a>

        <a
          href="/resume"
          class="py-2 px-3 font-medium text-sm transition-colors duration-200 {isActive('/resume', currentPath) ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'}"
        >
          Resume
        </a>

        {#each navbarItems as item}
          {#if item.name !== 'legal' && item.name !== 'docs'}
            <a
              href={item.url}
              class="py-2 px-3 font-medium text-sm transition-colors duration-200 {isActive(item.url, currentPath) ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'}"
            >
              {item.title}
            </a>
          {/if}
        {/each}

        <!-- Search component -->
        {#if showSearch}
          <div class="ml-2 w-56">
            <Search placeholder={searchPlaceholder} />
          </div>
        {/if}
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button on:click={toggleMenu} class="text-[var(--color-muted)] hover:text-[var(--color-primary)] focus:outline-none">
          {#if isMenuOpen}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-[var(--color-background)]">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Search in mobile menu -->
        {#if showSearch}
          <div class="px-3 py-2">
            <Search placeholder={searchPlaceholder} />
          </div>
        {/if}
        <a
          href="/"
          class="block px-3 py-2 rounded-md text-base font-medium {isActive('/', currentPath) ? 'bg-surface text-white' : 'text-slate-300 hover:bg-surface hover:text-white'}"
        >
          Home
        </a>

        <a
          href="/about"
          class="block px-3 py-2 rounded-md text-base font-medium {isActive('/about', currentPath) ? 'bg-surface text-white' : 'text-slate-300 hover:bg-surface hover:text-white'}"
        >
          About
        </a>

        <a
          href="/resume"
          class="block px-3 py-2 rounded-md text-base font-medium {isActive('/resume', currentPath) ? 'bg-surface text-white' : 'text-slate-300 hover:bg-surface hover:text-white'}"
        >
          Resume
        </a>

        {#each navbarItems as item}
          {#if item.name !== 'legal' && item.name !== 'docs'}
            <a
              href={item.url}
              class="block px-3 py-2 rounded-md text-base font-medium {isActive(item.url, currentPath) ? 'bg-surface text-white' : 'text-slate-300 hover:bg-surface hover:text-white'}"
            >
              {item.title}
            </a>
          {/if}
        {/each}
        
        <a href="/docs" class="block px-3 py-2 rounded-md text-base font-medium bg-[var(--color-primary)] hover:brightness-110 text-[var(--color-on-primary)] mt-3">
          Documentation
        </a>
      </div>
    </div>
  {/if}
</nav>

