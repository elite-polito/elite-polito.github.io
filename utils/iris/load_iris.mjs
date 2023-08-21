import fs from 'fs' ;

import { allMembers } from '../../src/data/IRISAuthors.mjs';

const baseURL = "https://www.swas.polito.it/dotnet/WMHandler/IrisEsportaJson.ashx?m="
const base_install_directory = "./utils/iris"
const default_output_directory = base_install_directory + "/cached_js"

for(const author of allMembers) {
    console.log(author);

    const response = await fetch(baseURL+author.id);
    const json = await response.json() ;

    fs.writeFile(`${default_output_directory}/${author.id}.json`, JSON.stringify(json), (err)=>{
        if(err) console.error(err);
    });
}
