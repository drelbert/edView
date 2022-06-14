// simple file to fetch data from the file system
// purpose: illustrate pre-rendering
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const supportDirectory = path.join(process.cwd(), "support");

export function getSortedSupportData() {
  // get file names
  const fileNames = fs.readdirSync(supportDirectory);

  const allSupportData = fileNames.map((fileName) => {
    // remove .md from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // read md file as string
    const fullPath = path.join(supportDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // sort by date
  return allSupportData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
