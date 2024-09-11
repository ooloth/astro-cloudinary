import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

import { cldAssetsLoader } from '../../../astro-cloudinary/loaders';

export const collections = {
	assetsSamplesBasic: defineCollection({
		loader: cldAssetsLoader({
			limit: 4,
			folder: 'samples/food',
		})
	}),
	assetsSamplesDefault: defineCollection({
		loader: cldAssetsLoader()
	}),
	assetsSamplesLimit: defineCollection({
		loader: cldAssetsLoader({
			limit: 1200,
			folder: 'collection'
		})
	}),
	assetsSamplesEcommerce: defineCollection({
		loader: cldAssetsLoader({
			limit: 4,
			folder: 'ecommerce/sneakers',
			context: true,
			tags: true,
			moderation: true,
			metadata: true,
		})
	}),
	docs: defineCollection({ schema: docsSchema() }),
};