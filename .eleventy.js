
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  
  const Image = require("@11ty/eleventy-img");

    module.exports = function(eleventyConfig) {
      eleventyConfig.addShortcode("image", async function(src, alt, sizes = "100vw") {
        let metadata = await Image(src, {
          widths: [300, 600, 1000],
          formats: ["png"],
          outputDir: "./_site/img/",
          urlPath: "/img/"
        });

        let imageAttributes = {
          alt,
          sizes,
          loading: "lazy",
          decoding: "async"
        };

        return Image.generateHTML(metadata, imageAttributes);
      });
    };
  };