export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "blockContent"
        },
        {
            name: "link",
            type: "string"
        },
        {
            name: "repo",
            type: "string"
        },
        {
            name: 'stack',
            title: 'Stack',
            type: 'array',
            of: [{type: 'string'}],
            
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }
    ]
}