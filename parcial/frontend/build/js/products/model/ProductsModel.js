import Subject from '../../shared/types/Subject.js';
import NullProduct from '../types/product/NullProduct.js';
export default class ProductModel extends Subject {
    productsData;
    filteredProducts;
    currentPage;
    gridSize;
    searchTerm;
    priceFilter;
    constructor() {
        super();
        this.productsData = [NullProduct];
        this.filteredProducts = [NullProduct];
        this.currentPage = 1;
        this.gridSize = 16;
        this.searchTerm = '';
        this.priceFilter = null;
    }
    init = async () => {
        console.log('MoviesModel initialized');
        this.productsData = await this.loadData();
        this.filteredProducts = this.productsData;
        this.notifyALL();
        console.log(this.searchTerm, this.priceFilter);
    };
    getMoviesData = () => {
        return this.filteredProducts.slice((this.currentPage - 1) * this.gridSize, this.currentPage * this.gridSize);
    };
    getProductsData = () => {
        return this.filteredProducts;
    };
    loadData = async () => {
        try {
            const response = await fetch('http://localhost:1802/products/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            console.log('Data cargada:', response);
            if (!response.ok) {
                throw new Error(`Error en el fetch: ${response.statusText}`);
            }
            const products = await response.json();
            console.log('Data cargada:', products);
            this.productsData = products;
            return this.productsData;
        }
        catch (error) {
            console.error('Error al filtrar vitrinas:', error);
            this.productsData = [];
            return this.productsData;
        }
    };
    filterProducts = async (minPrice, maxPrice) => {
        console.log('VitrinasModel.filter()');
        this.searchTerm = '';
        this.priceFilter = (minPrice === 0 && maxPrice === 0) ? null : { min: minPrice, max: maxPrice };
        if (minPrice === 0 && maxPrice === 0) {
            this.filteredProducts = await this.loadData();
        }
        else {
            try {
                const url = `http://localhost:1802/products/product/price?minPrice=${minPrice}&maxPrice=${maxPrice}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error en el fetch: ${response.statusText}`);
                }
                const filterProducts = await response.json();
                this.filteredProducts = filterProducts;
            }
            catch (error) {
                console.error('Error al filtrar vitrinas:', error);
                this.filteredProducts = [];
            }
        }
        this.notifyALL();
    };
    // Pages functions
    getTotalPages = () => {
        const size = this.filteredProducts.length;
        return Math.ceil(size / this.gridSize);
    };
    nextPage = () => {
        if (this.currentPage < this.getTotalPages()) {
            this.setPage(this.currentPage + 1);
        }
        else if (this.currentPage === this.getTotalPages()) {
            this.setPage(1);
        }
    };
    previousPage = () => {
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
        else if (this.currentPage === 1) {
            this.setPage(this.getTotalPages());
        }
    };
    setPage = (n) => {
        this.currentPage = n;
        this.notifyALL();
    };
    getCurrentPage = () => this.currentPage;
}
