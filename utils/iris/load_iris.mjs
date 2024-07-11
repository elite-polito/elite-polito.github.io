import fs from 'fs/promises';

import { allMembers } from '../../src/data/IRISAuthors.mjs';

const baseURL = "https://www.swas.polito.it/dotnet/WMHandler/IrisEsportaJson.ashx?m=";
const base_install_directory = "./utils/iris"; // to update according to the caller's path
const default_output_directory = base_install_directory + "/cached_js";
const final_output_directory = "./static/iris"; // to update according to the caller's path

for (const author of allMembers) {

    if (author.active) {
        console.log(`Downloading ${author.first} ${author.last}'s publications...`);
        const response = await fetch(baseURL + author.id);
        const json = await response.json();

        await fs.writeFile(`${default_output_directory}/${author.id}.json`, JSON.stringify(json));

        console.log(`${author.first} ${author.last} has ${json['NumRec']} papers`);
    }
    else {
        console.log(`Skipping ${author.first} ${author.last}'s publications.`);
    }
}

// move all the downloaded files to the 'static' folder of docusaurus
fs.cp(`${default_output_directory}`, `${final_output_directory}`, {recursive: true});