import AbstractMovieResume, { MovieResumeInterface } from "./MovieResumeAbstract";

export default class MovieResume extends AbstractMovieResume {
    constructor(movieResumeInterface: MovieResumeInterface) {
        super(movieResumeInterface)
    }
    public isNull = (): boolean => false;
}