import AbstractMovieResume from "./MovieResumeAbstract"
export default class NullMovieResume extends AbstractMovieResume {
    constructor() {
        super({
            title: 'Not found',
            extract: 'null',
            characters: []
        })
    }

    public isNull = (): boolean => true
}
