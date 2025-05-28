const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const sizes = [16, 32, 48, 128];
const sourceIcon = path.join(__dirname, "../public/icon.png");

console.log("Starting icon generation...");
console.log("Source icon path:", sourceIcon);

async function generateIcons() {
  try {
    // Check if source icon exists
    if (!fs.existsSync(sourceIcon)) {
      console.error("Source icon not found:", sourceIcon);
      process.exit(1);
    }
    console.log("Source icon found!");

    // Generate icons for each size
    for (const size of sizes) {
      console.log(`Processing ${size}x${size} icon...`);
      const outputPath = path.join(__dirname, `../public/icon${size}.png`);

      try {
        await sharp(sourceIcon)
          .resize(size, size, {
            kernel: sharp.kernel.lanczos3,
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
          })
          .toFile(outputPath);
        console.log(
          `Successfully generated ${size}x${size} icon: ${outputPath}`
        );
      } catch (resizeError) {
        console.error(`Error generating ${size}x${size} icon:`, resizeError);
        throw resizeError;
      }
    }
    console.log("Icon generation complete!");
  } catch (error) {
    console.error("Error in generateIcons:", error);
    process.exit(1);
  }
}

// Call the function and properly handle the promise
generateIcons().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});
