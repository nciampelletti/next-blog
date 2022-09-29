module.exports = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    }

    return config
  },
  env: {
    DATABASE:
      "mongodb+srv://natashat:Tyson2022@cluster0.vkov4.mongodb.net/MyBlog?retryWrites=true&w=majority",
  },
}
