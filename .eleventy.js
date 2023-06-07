const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/assets/sass/");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });


    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      
      dir: {
        input: "src",
        output: "public",
      },
    };
  };
  