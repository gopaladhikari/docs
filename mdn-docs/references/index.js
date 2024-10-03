const fs = require("fs");
const path = require("path");

const cssFolder = path.join(__dirname, "html");

function createGitkeepInEmptyFolders(dirPath) {
  // Read the contents of the directory
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dirPath}:`, err);
      return;
    }

    // Check if the directory is empty
    if (files.length === 0) {
      const gitkeepPath = path.join(dirPath, ".gitkeep");
      // Create a .gitkeep file in the empty directory
      fs.writeFile(gitkeepPath, "", (err) => {
        if (err) {
          console.error(`Error creating .gitkeep in ${dirPath}:`, err);
        } else {
          console.log(`Created .gitkeep in empty folder: ${dirPath}`);
        }
      });
    } else {
      // If there are files/subdirectories, traverse recursively
      files.forEach((file) => {
        const fullPath = path.join(dirPath, file);

        // Check if it's a directory
        fs.stat(fullPath, (err, stats) => {
          if (err) {
            console.error(`Error checking file ${fullPath}:`, err);
            return;
          }

          if (stats.isDirectory()) {
            createGitkeepInEmptyFolders(fullPath); // Recursively check subfolders
          }
        });
      });
    }
  });
}

// Start the process from the css folder
createGitkeepInEmptyFolders(cssFolder);
