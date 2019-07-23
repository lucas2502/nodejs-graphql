const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'player',
        description: 
            "This is my schema witch will informall players informations:",

        fields: () => ({
            player: {
                type: GraphQLString,
                args: {
                    nickname: {
                        type: GraphQLString
                    },
                },
                resolve: (root, args) => {
                    return 'Information about ${args.nickname}'
                }, 
            },
        }),
    }),
})