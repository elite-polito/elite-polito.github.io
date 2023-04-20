const blogPluginExports = require("@docusaurus/plugin-content-blog");

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data from another page
     */
    contentLoaded: async function ({content, actions}) {
      // Get the 3 latest blog posts
      const recentPosts = [...content.blogPosts].splice(0, 3);

      actions.addRoute({
        // Add route for the home page
        path: "/",
        exact: true,

        // The component to use for the "Home" page route
        component: "@site/src/components/Homepage/index.js",

        // These are the props that will be passed to our "Home" page component
        modules: {
          recentPosts: recentPosts.map((post) => ({
            content: {
              __import: true,
              // The markdown file for the blog post will be loaded by webpack
              path: post.metadata.source,
              query: {
                truncated: true,
              },
            },
          })),
        },
      });

      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded({content, actions});
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};