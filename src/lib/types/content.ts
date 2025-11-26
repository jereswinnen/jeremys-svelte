import type { Component } from 'svelte';

// Base metadata shared by all content types
export interface BaseMetadata {
	title: string;
	slug: string;
	date: string;
	draft?: boolean;
}

// Blog post types - extensible for future post types
export type BlogPostType = 'article' | 'note';

// Base blog post metadata
export interface BaseBlogMetadata extends BaseMetadata {
	type: BlogPostType;
	description?: string;
	tags?: string[];
}

// Article-specific metadata
export interface ArticleMetadata extends BaseBlogMetadata {
	type: 'article';
	description: string;
	coverImage?: string;
}

// Note-specific metadata (short posts with optional link)
export interface NoteMetadata extends BaseBlogMetadata {
	type: 'note';
	link?: string;
}

// Union type for all blog post metadata
export type BlogMetadata = ArticleMetadata | NoteMetadata;

// Work/case study metadata
export interface WorkMetadata extends BaseMetadata {
	description: string;
	client?: string;
	role?: string;
	year?: string;
	coverImage?: string;
	featured?: boolean;
}

// Page metadata (about, etc.)
export interface PageMetadata {
	title: string;
	description?: string;
}

// Content item with component
export interface ContentItem<T extends BaseMetadata | PageMetadata> {
	metadata: T;
	component: Component;
}

// Resolved content (with computed slug from filename)
export interface ResolvedContent<T> {
	metadata: T;
	slug: string;
}
