const fs = require('fs');
const YAML = require('yaml');

const file = fs.readFileSync('./yaml/1965.yaml', 'utf8');

const parsedFile = YAML.parse(file);
const keys = Object.keys(parsedFile);

const mappedShows = keys.map(key => {
    const thisShow = parsedFile[key];

    return {
        date: key,
        venue: thisShow[':venue'],
        city: thisShow[':city'],
        state: thisShow[':state']
    };
});

console.log(mappedShows);
