
export function getCarouselImages() {
  const imagesContext = require.context(
      '../public/images/carousel', // Ensure this path is correct
      false,
      /\.(png|jpe?g|svg)$/
  );
  const images = imagesContext.keys().map((imagePath, index) => {
      const fileName = imagePath.replace(/^.*[\\/]/, '').replace(/\.\w+$/, ''); // Extract file name without extension
      return {
          src: 'images/carousel/'+fileName+".svg", // Get the actual path of the image
          title: fileName.replace(/[-_]/g, ' '), // Convert hyphens and underscores to spaces
      };
  });
  return images;
}