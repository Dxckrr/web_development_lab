import Subject from "../../shared/types/Subject.js"
import FilterView from "../view/FilterView.js"

export default class FilterModel extends Subject<FilterView> {
  constructor() {
    super()

  }
  readonly init = () => {
    console.log('FilterModel.init()')
  }


  private filterData: { price: { from: number; to: number } } = {
    price: { from: 0, to: 100 }
  };

  getFilterData() {
    return this.filterData;
  }

  setFilterData(data: { price: { from: number; to: number } }) {
    this.filterData = data;
  }

}
