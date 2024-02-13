import fs from "fs";

export type PComponent = {
  name: string;
  path: string;
  slug: string;
};

export const getAllPComponents = async (): Promise<PComponent[]> => {
  const allPComponents = [];
  try {
    const filesAndDirs = fs.readdirSync("./src/pcomponents");
    const directories = filesAndDirs.filter((file) =>
      fs.statSync(`./src/pcomponents/${file}`).isDirectory()
    );
    // currently only basic af infos. later infos about/from mdx file, actual component file or something etc
    for (const dir of directories) {
      allPComponents.push({
        name: dir,
        path: `/${dir}`,
        slug: dir.toLocaleLowerCase(),
      });
    }
    console.log(allPComponents);

    return allPComponents;
  } catch (err) {
    throw new Error(`Error reading directory: ${err}`);
  }
};
