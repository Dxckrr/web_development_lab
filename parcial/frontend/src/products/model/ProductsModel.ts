import Subject from '../../shared/types/Subject.js'
import NullDiscount from '../types/discount/NullDiscount.js';
import NullProduct from '../types/product/NullProduct.js';
import Product from '../types/product/Product.js';
import MoviesView from '../view/ProductsView.js'

export default class ProductModel extends Subject<MoviesView> {
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
    let products = [
      {
        id: "1",
        name: "Aceite esencial de Clavo",
        description: "El aceite esencial de clavo es conocido por sus increíbles. \n\n Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad.",
        price: 7.99,
        category: "sin categoría",
        discount: NullDiscount,
        brand: "No brand",
        units: "12ML",
      },
      {
        id: "2",
        name: "Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos",
        description: `Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.\n
        Estos parches con oro de 24kt son la opción perfecta para rejuvenecer la mirada en pocos minutos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, contienen dos activos únicos para combatir los signos de envejecimiento: el complejo de polipéptidos SYN-COLL® y oro de 24kt. Gracias a ellos, estimulan la síntesis de colágeno en las células de la piel y ayudan a suavizar las arrugas, mejorando la `,
        price: 15.50,
        category: "sin categoría",
        discount: NullDiscount,
        brand: "No brand",
        units: "60UDS.",
      },
      {
        id: "3",
        name: "Parches Iluminadores para el Contorno de Ojos",
        description: `Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven.\n
        Estos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.`,
        price: 15.50,
        category: "sin categoría",
        discount: NullDiscount,
        brand: "Natura Siberica",
        units: "60UDS.",
      },
      {
        id: "4",
        name: "test",
        description: `test.\n\n
        test`,
        price: 1.99,
        category: "sin categoría",
        discount: NullDiscount,
        brand: "No brand",
        units: "1UDS.",
      },
      {
        id: "5",
        name: "test",
        description: `test.\n\n
        test`,
        price: 1.99,
        category: "sin categoría",
        discount: NullDiscount,
        brand: "No brand",
        units: "1UDS.",
      },
      {
        id: "6",
        name: "test",
        description: `test.\n\n
        test`,
        price: 1.99,
        category: "sin categoría",
        discount: NullDiscount,
        brand: "No brand",
        units: "1UDS.",
      },
    ];

    return products
  }

  readonly filterProducts = async (minPrice: number, maxPrice: number): Promise<void> => {
    console.log('VitrinasModel.filter()')
    this.searchTerm = '';
    this.priceFilter = (minPrice === 0 && maxPrice === 0) ? null : { min: minPrice, max: maxPrice };

    if (minPrice === 0 && maxPrice === 0) {
      this.productsData = await this.loadData();
    } else {
      try {
        const url = `http://localhost:1802/products/product/price?minPrice=${minPrice}&maxPrice=${maxPrice}`;
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error en el fetch: ${response.statusText}`);
        }
        const { filterResults } = await response.json();
        console.log('Data filtrada:', filterResults);
        this.productsData = filterResults;
      } catch (error) {
        console.error('Error al filtrar vitrinas:', error);
        this.productsData = [];
      }
    }

    this.setPage(1);
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
