export const formatDate = (date) => {
    const initialDate = new Date(date);
    return initialDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export const checkObj = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;