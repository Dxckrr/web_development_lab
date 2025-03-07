export default abstract class AbstractMovieResume {
    protected title: string
    protected extract: string;
    protected characters: string[]
    constructor(movieResumeInterface: MovieResumeInterface) {
        this.title = movieResumeInterface.title;
        this.extract = movieResumeInterface.extract;
        this.characters = movieResumeInterface.characters;
    }
    public abstract isNull(): boolean;
}
export interface MovieResumeInterface {
    title: string;
    extract: string;
    characters: string[];
}