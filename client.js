import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ewz4ezcb', // you can find this in sanity.json
  dataset: 'production', 
  useCdn: true // `false` if you want to ensure fresh data
})