const fs = require('node:fs/promises');
const path = require('node:path');
const baseDir = ".";

async function getPaths() {
    const files = await getFiles();
    const toRenameArr = [];
    files.forEach((dirent) => {
        if (dirent.isDirectory()) return;
        const parsed = path.parse(dirent.name);
        const parts = dirent.path.split(path.sep);
        if (parts.length > 0 && parts[0].endsWith("px") && !parsed.name.endsWith("px")) {
            const newName = parsed.name + "-" + parts[0] + parsed.ext;
            toRenameArr.push([path.join(dirent.path, dirent.name), path.join(...parts.slice(0, -1), newName)]);
        }
    });
    return toRenameArr;
}

async function renameAndReplace(paths) {
    await Promise.all(paths.map((path) => fs.rename(path[0], path[1])));
}

async function getFiles() {
    return (await fs.readdir(baseDir, {recursive: true, withFileTypes: true}));
}

async function main() {
    await renameAndReplace(await getPaths());
}

main();
