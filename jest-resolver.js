const nodePath = require("node:path");
const fs = require("node:fs");

const { globSync, readFileSync } = fs;

function getLocalProjects() {
  const rootDir = nodePath.resolve(__dirname);

  const packageJsonFiles = globSync("./{apps,libs}/**/package.json", {
    cwd: rootDir,
    exclude: (fsItem) => {
      return fsItem.includes("node_modules");
    },
  });

  const results = packageJsonFiles.map((packageJsonPath) => {
    const fullPath = nodePath.join(rootDir, packageJsonPath);
    const projectName = getProjectName(fullPath);
    return projectName;
  });

  return results;
}

function getProjectName(packageJsonPath) {
  const packageJsonContent = readFileSync(packageJsonPath, "utf8");
  const packageJson = JSON.parse(packageJsonContent);
  return packageJson.name;
}

const LOCAL_PROJECTS = new Set(getLocalProjects());

function getNewMainField(oldMainField) {
  const match = oldMainField.match(/^(.+)\.js(x?)$/);
  if (!match) {
    return oldMainField;
  }

  const [, prefix, ext] = match;
  const newMainField = `${prefix}.ts${ext}`;

  return newMainField;
}

module.exports = (path, options) => {
  const isLocalProject = LOCAL_PROJECTS.has(path);

  return options.defaultResolver(path, {
    ...options,
    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
    packageFilter: (pkg) => {
      if (!isLocalProject) {
        return pkg;
      }

      const newMainField = getNewMainField(pkg.main);

      return {
        ...pkg,
        main: newMainField,
      };
    },
  });
};
