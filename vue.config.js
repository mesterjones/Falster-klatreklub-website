module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/your-repo-name/' // Replace 'your-repo-name' with your GitHub repository name
    : '/'
} 