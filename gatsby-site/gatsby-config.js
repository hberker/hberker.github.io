module.exports = 
{
    plugins: 
    [
      {
        resolve: `gatsby-plugin-typography`,
        options: 
        {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: `Underline`,
        options: 
        {
          pathToConfigModule: `src/utils/underline.js`,
        },
      },
    ],
}
