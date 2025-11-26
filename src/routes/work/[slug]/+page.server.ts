import { getWorkItem } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const item = await getWorkItem(params.slug);

	if (!item) {
		throw error(404, 'Work item not found');
	}

	return {
		metadata: item.metadata,
		component: item.component
	};
};
