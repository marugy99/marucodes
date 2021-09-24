export const formatDate = (date) => {
    const initialDate = new Date(date);
    return initialDate.toLocaleString('en-US', {
        month: 'numeric', // We can also use 'long', '2-digit'
        day: 'numeric',
        year: 'numeric'
    })
}

export const checkObj = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;