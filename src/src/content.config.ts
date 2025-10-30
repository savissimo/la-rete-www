import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const vercellesiNelMondoDocuments = defineCollection({
    loader: file('./content/vercellesi-nel-mondo.json', { parser: (t) => JSON.parse(t).documents }),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string().optional(),
        files: z.array(z.object({
            label: z.string(),
            url: z.string(),
        })).optional(),
    }),
})

const vercellesiNelMondoPassaporto = defineCollection({
	loader: file('./content/vercellesi-nel-mondo.json', { parser: (t) => JSON.parse(t).passaporto }),
	schema: z.object({
		image: z.string(),
		name: z.string(),
		link: z.string(),
	}),
})

export const collections = {
    'vercellesi-nel-mondo_documents': vercellesiNelMondoDocuments,
    'vercellesi-nel-mondo_passaporto': vercellesiNelMondoPassaporto,
}
