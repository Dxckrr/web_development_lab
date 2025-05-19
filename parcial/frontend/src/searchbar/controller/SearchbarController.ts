import SearchbarModel from "../model/SearchbarModel";
import SearchbarView from "../view/SearchbarView";

export default class SearchbarController {
    constructor(
        private readonly model: SearchbarModel,
        private readonly view: SearchbarView
    ) {}

    readonly init = () => {
        console.log('SearchbarController initialized')
        this.model.init()
        this.view.init()
    }
}