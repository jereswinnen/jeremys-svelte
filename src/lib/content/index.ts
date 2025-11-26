import type {
	BlogMetadata,
	WorkMetadata,
	PageMetadata,
	ResolvedContent,
	BlogPostType
} from '$lib/types/content';

type GlobImport = Record<string, () => Promise<{ default: unknown; metadata: unknown }>>;

// Extract slug from file path
function getSlugFromPath(path: string): string {
	const filename = path.split('/').pop() ?? '';
	return filename.replace(/\.md$/, '');
}

// Generic content loader
async function loadContent<T>(
	glob: GlobImport,
	filterFn?: (metadata: T) => boolean
): Promise<ResolvedContent<T>[]> {
	const items = await Promise.all(
		Object.entries(glob).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = getSlugFromPath(path);
			return {
				metadata: metadata as T,
				slug
			};
		})
	);

	const filtered = filterFn ? items.filter((item) => filterFn(item.metadata)) : items;

	return filtered;
}

// Blog posts loader
export async function getBlogPosts(type?: BlogPostType): Promise<ResolvedContent<BlogMetadata>[]> {
	const articles = import.meta.glob<{ default: unknown; metadata: BlogMetadata }>(
		'/src/content/blog/articles/*.md'
	);
	const notes = import.meta.glob<{ default: unknown; metadata: BlogMetadata }>(
		'/src/content/blog/notes/*.md'
	);

	const allPosts = { ...articles, ...notes };

	const posts = await loadContent<BlogMetadata>(allPosts, (metadata) => {
		if (metadata.draft) return false;
		if (type && metadata.type !== type) return false;
		return true;
	});

	// Sort by date, newest first
	return posts.sort(
		(a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
	);
}

// Single blog post loader
export async function getBlogPost(
	slug: string
): Promise<{ metadata: BlogMetadata; component: unknown } | null> {
	const articles = import.meta.glob<{ default: unknown; metadata: BlogMetadata }>(
		'/src/content/blog/articles/*.md'
	);
	const notes = import.meta.glob<{ default: unknown; metadata: BlogMetadata }>(
		'/src/content/blog/notes/*.md'
	);

	const allPosts = { ...articles, ...notes };

	for (const [path, resolver] of Object.entries(allPosts)) {
		if (getSlugFromPath(path) === slug) {
			const post = await resolver();
			return {
				metadata: post.metadata,
				component: post.default
			};
		}
	}

	return null;
}

// Work/case studies loader
export async function getWorkItems(): Promise<ResolvedContent<WorkMetadata>[]> {
	const work = import.meta.glob<{ default: unknown; metadata: WorkMetadata }>(
		'/src/content/work/*.md'
	);

	const items = await loadContent<WorkMetadata>(work, (metadata) => !metadata.draft);

	// Sort by date, newest first
	return items.sort(
		(a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
	);
}

// Single work item loader
export async function getWorkItem(
	slug: string
): Promise<{ metadata: WorkMetadata; component: unknown } | null> {
	const work = import.meta.glob<{ default: unknown; metadata: WorkMetadata }>(
		'/src/content/work/*.md'
	);

	for (const [path, resolver] of Object.entries(work)) {
		if (getSlugFromPath(path) === slug) {
			const item = await resolver();
			return {
				metadata: item.metadata,
				component: item.default
			};
		}
	}

	return null;
}

// Page loader
export async function getPage(
	name: string
): Promise<{ metadata: PageMetadata; component: unknown } | null> {
	const pages = import.meta.glob<{ default: unknown; metadata: PageMetadata }>(
		'/src/content/pages/*.md'
	);

	for (const [path, resolver] of Object.entries(pages)) {
		if (getSlugFromPath(path) === name) {
			const page = await resolver();
			return {
				metadata: page.metadata,
				component: page.default
			};
		}
	}

	return null;
}
