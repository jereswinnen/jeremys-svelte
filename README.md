# Personal Portfolio & Blog

A SvelteKit-based personal website with markdown-powered content for portfolio case studies and blog posts.

## Features

- **Portfolio/Work**: Showcase case studies written in markdown
- **Blog**: Support for multiple post types (articles and notes)
- **Markdown Pages**: About and other pages written in markdown
- **Tailwind CSS 4**: Modern styling with Tailwind
- **TypeScript**: Full type safety

## Project Structure

```
src/
├── content/              # Markdown content
│   ├── pages/           # Static pages (about, etc.)
│   ├── work/            # Case studies/portfolio items
│   └── blog/
│       ├── articles/    # Long-form blog posts
│       └── notes/       # Short notes/snippets
├── lib/
│   ├── content/         # Content loading utilities
│   └── types/           # TypeScript type definitions
└── routes/
    ├── about/           # About page
    ├── work/            # Portfolio listing & detail pages
    └── blog/            # Blog listing & post pages
        ├── articles/    # Articles filter
        ├── notes/       # Notes filter
        └── [slug]/      # Individual post pages
```

## Content Types

### Articles

Full blog posts with title, description, and content:

```md
---
title: My Article Title
type: article
description: A brief description
date: "2024-01-20"
tags:
  - tag1
  - tag2
---

Article content here...
```

### Notes

Short snippets with optional title and link:

```md
---
title: Optional Title
type: note
date: "2024-01-22"
link: https://example.com
---

Short note content...
```

### Work/Case Studies

Portfolio items with project details:

```md
---
title: Project Name
description: Brief project description
client: Client Name
role: Your Role
year: "2024"
date: "2024-01-15"
featured: true
---

Case study content...
```

### Pages

Static pages like About:

```md
---
title: About Me
description: Page description for SEO
---

Page content...
```

## Adding New Post Types

1. Add the type to `BlogPostType` in `src/lib/types/content.ts`
2. Create a new metadata interface extending `BaseBlogMetadata`
3. Add to the `BlogMetadata` union type
4. Create a new directory in `src/content/blog/`
5. Update the glob patterns in `src/lib/content/index.ts`

## Development

```sh
pnpm install
pnpm dev
```

## Building

```sh
pnpm build
pnpm preview
```
