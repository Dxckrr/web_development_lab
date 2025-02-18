import AbstractDirector, { DirectorInterface } from "./AbstractDirector";

export default class Movie extends AbstractDirector {
    constructor(movieInterface: DirectorInterface) {
        super(movieInterface);
    }
}