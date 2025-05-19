import SearchbarController from "./controller/SearchbarController.js";
import SearchbarModel from "./model/SearchbarModel.js";
import SearchbarView from "./view/SearchbarView.js";

export default class Searchbar {
    private readonly model: SearchbarModel
    private readonly view: SearchbarView
    private readonly controller: SearchbarController

    constructor(element: string, searchMovie:(search: string) => Promise<void>) {
        this.model = new SearchbarModel()
        this.view = new SearchbarView(element, searchMovie)
        this.controller = new SearchbarController(this.model, this.view)
    }

    readonly init = () => {
        this.controller.init()
    }

    readonly getSearchbatHTML = () => {
        return this.view.getSearchbarHTML()
    }

}