import Subject from '../../shared/types/Subject.js'
import NullProduct from '../types/product/NullProduct.js';
import Product from '../types/product/Product.js';
import ProductsView from '../view/ProductsView.js'

export default class ProductModel extends Subject<ProductsView> {
  private productsData: Product[];
  private filteredProducts: Product[];
  private currentPage: number;
  private readonly gridSize: number;
  private searchTerm: string;
  private priceFilter: { min: number; max: number } | null;

  constructor() {
    super()
    this.productsData = [NullProduct]
    this.filteredProducts = [NullProduct]
    this.currentPage = 1;
    this.gridSize = 16;
    this.searchTerm = '';
    this.priceFilter = null;
  }

  readonly init = async () => {
    console.log('MoviesModel initialized')
    this.productsData = await this.loadData()
    this.filteredProducts = this.productsData
    this.notifyALL()
    console.log(this.searchTerm, this.priceFilter)
  }

  readonly getMoviesData = () => {
    return this.filteredProducts.slice(
      (this.currentPage - 1) * this.gridSize,
      this.currentPage * this.gridSize
    );
  }

  readonly getProductsData = () => {
    return this.filteredProducts
  }

  readonly loadData = async (): Promise<Product[]> => {
    try {
      const response = await fetch('http://localhost:1802/products/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      console.log('Data cargada:', response)
      if (!response.ok) {
        throw new Error(`Error en el fetch: ${response.statusText}`);
      }
      const products = await response.json();
      console.log('Data cargada:', products);
      this.productsData = products;
      return this.productsData
    } catch (error) {
      console.error('Error al filtrar vitrinas:', error);
      this.productsData = [];
      return this.productsData;
    }
  }

  readonly filterProducts = async (minPrice: number, maxPrice: number): Promise<void> => {
    console.log('VitrinasModel.filter()')
    this.searchTerm = '';
    this.priceFilter = (minPrice === 0 && maxPrice === 0) ? null : { min: minPrice, max: maxPrice };

    if (minPrice === 0 && maxPrice === 0) {
      this.filteredProducts = await this.loadData();
    } else {
      try {
        const url = `http://localhost:1802/products/product/price?minPrice=${minPrice}&maxPrice=${maxPrice}`;
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error en el fetch: ${response.statusText}`);
        }
        const filterProducts = await response.json();
        this.filteredProducts = filterProducts;
      } catch (error) {
        console.error('Error al filtrar vitrinas:', error);
        this.filteredProducts = [];
      }
    }

    this.notifyALL();
  }

  // Pages functions
  readonly getTotalPages = (): number => {
    const size = this.filteredProducts.length;
    return Math.ceil(size / this.gridSize);
  }

  readonly nextPage = () => {
    if (this.currentPage < this.getTotalPages()) {
      this.setPage(this.currentPage + 1);
    }
    else if (this.currentPage === this.getTotalPages()) {
      this.setPage(1);
    }
  }

  readonly previousPage = () => {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
    else if (this.currentPage === 1) {
      this.setPage(this.getTotalPages());
    }
  }

  readonly setPage = (n: number) => {
    this.currentPage = n;
    this.notifyALL();
  }

  readonly getCurrentPage = (): number => this.currentPage;
}
