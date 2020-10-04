const resolvers = {
    Query: {
        imgproxyKeys: (parent, args) => {
            const keys = {'key': process.env.IMGPROXY_KEY, 'salt': process.env.IMGPROXY_SALT}
            return {
                keys: JSON.stringify(keys)
            }
        }
    }
}

module.exports = resolvers;