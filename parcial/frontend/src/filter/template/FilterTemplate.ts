export default class FilterTemplate {
    readonly filterTemplate = async (): Promise<string> => {
        return `
            <aside class="fixed-filter">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Precio</h5>
                        <div class="mb-4">
                            <input type="range" class="form-range" min="1" max="100" step="1" id="priceRange" value="100">
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label">DESDE</label>
                                <input type="number" class="form-control" value="1" min="1" id="priceFrom">
                            </div>
                            <div class="col-6">
                                <label class="form-label">HASTA</label>
                                <input type="number" class="form-control" value="100" min="1" id="priceTo">
                            </div>
                        </div>
                        <button class="btn w-100 mt-3" id="filterButton">Filtrar</button>
                    </div>
                </div>
            </aside>
        `;
    }
}