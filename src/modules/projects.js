import { descriptions } from './descriptions.js';

class Project {
    constructor(
        name,
        link,
        
    ) {
        this.name = name;
        this.link = link;
    }
}

const discGolfCaddy = new Project(
    'Disc Golf Caddy App',
    '/discGolf',
    descriptions.discGolfCaddy
)

const projects = [discGolfCaddy];

export default projects;