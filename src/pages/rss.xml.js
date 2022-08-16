import {config} from '../../config.mjs'

export const get = () => rss({
    title: `${config.fullName}'s Blog`,
    description: `Welcome to my blog, where I write about ${config.expertise && config.expertise.join(", ")}`,
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en</language>`,
    
})