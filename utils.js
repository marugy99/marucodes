import urlBuilder from "@sanity/image-url";

export const formatDate = (date) => {
    const initialDate = new Date(date);
    return initialDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export const isObjEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

export const urlFor = source => urlBuilder({projectId: 'ewz4ezcb', dataset: 'production'}).image(source);