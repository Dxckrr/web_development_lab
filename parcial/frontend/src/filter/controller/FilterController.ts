import FilterModel from '../model/FilterModel.js'
import FilterView from '../view/FilterView.js'

export default class FilterController {
  constructor(
    private readonly model: FilterModel,
    private readonly view: FilterView
  ) {}

  readonly init = () => {
    console.log('FilterController.init()')
    this.model.init()
    this.view.init()
    this.view.render()
  }
}
