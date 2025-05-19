import SearchbarTemplate from "../template/SearchbarTemplate.js";

export default class SearchbarView {
    private readonly searchbarHTML: HTMLElement;
    
    constructor(element: string,  readonly searchMoviesFn: (search: string) => Promise<void>) {
        const searchbar =  document.createElement(`${element}`) as HTMLElement
        this.searchbarHTML = searchbar
    }
    
    readonly init = () => {
        console.log('SearchbarView initialized')
        this.searchbarHTML.addEventListener('submit', async (e) => {
            e.preventDefault()
            await this.searchMovies()
        })
        this.render()
    }
    
    readonly update = (): void => {
        console.log("Searchbar View updated")
        this.render()
    }
    
    readonly render = async () => {
        const template = new SearchbarTemplate();
        const searchData = ''
        this.searchbarHTML.innerHTML = await template.renderSearchbar(searchData);
    }

    readonly searchMovies = async () => {
        const input = this.searchbarHTML.querySelector('input') as HTMLInputElement
        const search = input.value
        
        await this.searchMoviesFn(search)
        input.value = ''
        
        this.render()
    }

    readonly getSearchbarHTML = (): HTMLElement => {
        return this.searchbarHTML
    }

}