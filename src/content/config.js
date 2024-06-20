import {definedCollection, z} from 'astro:content'

const postCollection = definedCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        title: z.string(),
        image: z.string()
    }),
})

export const collections = {
    posts: postCollection
}