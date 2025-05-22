import Observer from "../../shared/types/Observer.js";
import FilterModel from "../model/FilterModel.js"; // Make sure this path is correct
import FilterTemplate from "../template/FilterTemplate.js";

export default class FilterView extends Observer<FilterModel> {
  private readonly filterHTML: HTMLElement;
  private priceRangeInput: HTMLInputElement | null = null;
  private priceFromInput: HTMLInputElement | null = null;
  private priceToInput: HTMLInputElement | null = null;
  private filterButton: HTMLButtonElement | null = null;

  constructor(element: string, filterModel: FilterModel, readonly filterVitrinas: (min: number, max: number) => void) {
    super(filterModel); // Pass the model to the super Observer class
    const filter = document.createElement(`${element}`) as HTMLElement;
    this.filterHTML = filter;
  }

  readonly init = async () => { // Make init async to await render
    console.log('FilterView.init()');
    await this.render(); // Render the filter UI
    this.setupEventListeners();
    this.applyModelValuesToInputs(); // Apply model values to inputs
  }

  readonly update = (): void => {
    console.log("Filter View updated by model");
    this.render().then(() => {
      this.setupEventListeners();
      this.applyModelValuesToInputs();
    });
  }

  readonly getFilterHTML = (): HTMLElement => {
    return this.filterHTML;
  }

  readonly render = async () => {
    const templates = new FilterTemplate();
    this.filterHTML.innerHTML = await templates.filterTemplate();
  }

  private setupEventListeners = () => {
    this.priceRangeInput = this.filterHTML.querySelector<HTMLInputElement>('#priceRange');
    this.priceFromInput = this.filterHTML.querySelector<HTMLInputElement>('#priceFrom');
    this.priceToInput = this.filterHTML.querySelector<HTMLInputElement>('#priceTo');
    this.filterButton = this.filterHTML.querySelector<HTMLButtonElement>('#filterButton');

    // Event listener for the price range slider
    if (this.priceRangeInput && this.priceToInput) {
      this.priceRangeInput.addEventListener('input', () => {
        // The slider controls only the 'HASTA' input
        this.priceToInput!.value = this.priceRangeInput!.value;
      });

      // Event listener for manual input in 'HASTA' field to sync with slider
      this.priceToInput.addEventListener('input', () => {
        let val = parseInt(this.priceToInput!.value, 10);
        const min = parseInt(this.priceRangeInput!.min, 10);
        const max = parseInt(this.priceRangeInput!.max, 10);

        if (isNaN(val) || val < min) val = min;
        if (val > max) val = max;

        this.priceRangeInput!.value = val.toString();
      });
    }

    // Event listener for the "Filtrar" button click
    if (this.filterButton) {
      this.filterButton.addEventListener('click', this.handleFilterClick);
    }
  }

  private handleFilterClick = () => {
    this.dispatchFilterValues();
  }

  private dispatchFilterValues = () => {
    const priceFrom = this.priceFromInput ? parseFloat(this.priceFromInput.value) : null;
    const priceTo = this.priceToInput ? parseFloat(this.priceToInput.value) : null;

    // Validación básica
    if (priceFrom === null || isNaN(priceFrom) || priceTo === null || isNaN(priceTo)) {
      console.warn("Invalid price filter values. Please enter numbers.");
      return;
    }

    if (priceFrom > priceTo) {
      console.warn("'DESDE' price cannot be greater than 'HASTA' price.");
      return;
    }

    // Actualiza el modelo con los nuevos valores
    (this.subject as FilterModel).setFilterData({
      price: {
        from: priceFrom,
        to: priceTo
      }
    });

    console.log("FilterView: Dispatching filter data:", {
      price: { from: priceFrom, to: priceTo }
    });


    this.filterVitrinas(priceFrom, priceTo);


    // Notifica a los observadores
    this.subject.notifyALL();
  }

  private applyModelValuesToInputs = () => {
    const currentFilter = (this.subject as FilterModel).getFilterData(); // Get current filter from the model
    if (currentFilter && currentFilter.price) {
      if (this.priceFromInput) {
        this.priceFromInput.value = currentFilter.price.from.toString();
      }
      if (this.priceToInput) {
        this.priceToInput.value = currentFilter.price.to.toString();
        if (this.priceRangeInput) {
          this.priceRangeInput.value = currentFilter.price.to.toString();
        }
      }
    }
  }




}