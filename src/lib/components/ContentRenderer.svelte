<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	interface Props {
		component: Component;
		header?: Snippet;
		footer?: Snippet;
	}

	let { component: Content, header, footer }: Props = $props();
</script>

<article>
	{#if header}
		<header>
			{@render header()}
		</header>
	{/if}
	<Content />
	{#if footer}
		<footer>
			{@render footer()}
		</footer>
	{/if}
</article>
