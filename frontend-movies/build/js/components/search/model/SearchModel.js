import Subject from '../../../shared/types/Subject.js';
export default class SearchModel extends Subject {
    constructor() {
        super();
    }
    init = async () => {
        this.moviesData = await this.moviesData();
        this.notifyALL();
    };
    searchMovies = () => {
        return;
    };
}
