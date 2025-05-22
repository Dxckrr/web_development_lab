import FilterController from './controller/FilterController.js'
import FilterModel from './model/FilterModel.js'
import FilterView from './view/FilterView.js'

export default class Filter {
  private readonly model: FilterModel
  private readonly view: FilterView
  private readonly controller: FilterController

  constructor(element: string, filterVitrinas: (min: number, max: number) => void) {
    this.model = new FilterModel()
    this.view = new FilterView(element, this.model, filterVitrinas)
    this.controller = new FilterController(this.model, this.view)
  }

  readonly init = () => {
    this.controller.init()
  }

  readonly getFilterHTML = (): HTMLElement => {
    return this.view.getFilterHTML()
  }
}
