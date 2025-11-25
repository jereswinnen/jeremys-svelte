<script lang="ts">
	import type { ResolvedContent, BlogMetadata, NoteMetadata } from '$lib/types/content';

	interface Props {
		posts: ResolvedContent<BlogMetadata>[];
		emptyMessage?: string;
	}

	let { posts, emptyMessage = 'No posts yet.' }: Props = $props();
</script>

{#if posts.length > 0}
	<ul>
		{#each posts as post}
			{@const isNote = post.metadata.type === 'note'}
			<li>
				<a href="/blog/{post.slug}">
					{#if post.metadata.title}
						<h2>{post.metadata.title}</h2>
					{/if}
					{#if post.metadata.type === 'article' && post.metadata.description}
						<p>{post.metadata.description}</p>
					{/if}
					<div>
						<span>{post.metadata.type}</span>
						<time datetime={post.metadata.date}>{post.metadata.date}</time>
						{#if isNote && (post.metadata as NoteMetadata).link}
							<span>Link</span>
						{/if}
					</div>
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>{emptyMessage}</p>
{/if}
