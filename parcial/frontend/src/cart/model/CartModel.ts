
// import NullDiscount from "../../products/types/discount/NullDiscount.js";
import NullDiscount from "../../products/types/discount/NullDiscount.js";
import NullCategory from "../../products/types/product/category/NullCategory.js";
import NullImage from "../../products/types/product/image/NullImage.js";
import Subject from "../../shared/types/Subject.js"
import CartInterface from "../types/cart/CartInterface.js";
import NullCart from "../types/cart/NullCart.js";
import CartView from "../view/CartView.js"

export default class CartModel extends Subject<CartView> {
    private cart: CartInterface;
    constructor() {
        super()
        this.cart = NullCart

    }
    readonly init = async () => {
        console.log("CartModel initialized")
        this.cart = await this.loadData();
        this.notifyALL()

    }
    readonly getCart = () => {
        return this.cart
    }
    readonly loadData = async (): Promise<CartInterface> => {
        let cart: CartInterface = {
            id: 1,
            products: [
                {
                    product: {
                        id: "1",
                        name: "Aceite esencial de Clavo",
                        description: "El aceite esencial de clavo es conocido por sus increíbles. \n\n Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad.",
                        price: 7.99,
                        category: NullCategory,
                        discount: NullDiscount,
                        stock: 100,
                        image: NullImage
                    },
                    quantity: 1
                },
                {
                    product: {
                        id: "2",
                        name: "Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos",
                        description: `Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.\n\n
                            Estos parches con oro de 24kt son la opción perfecta para rejuvenecer la mirada en pocos minutos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, contienen dos activos únicos para combatir los signos de envejecimiento: el complejo de polipéptidos SYN-COLL® y oro de 24kt. Gracias a ellos, estimulan la síntesis de colágeno en las células de la piel y ayudan a suavizar las arrugas, mejorando la `,
                        price: 15.50,
                        category: NullCategory,
                        discount: NullDiscount,
                        stock: 100,
                        image: NullImage
                    },

                    quantity: 2
                },
                {
                    product: {
                        id: "3",
                        name: "Aceite de Rosa Mosqueta",
                        description: "El aceite de rosa mosqueta es un aceite vegetal que se extrae de las semillas de la rosa mosqueta, una planta originaria de América del Sur. Este aceite es conocido por sus propiedades hidratantes y regeneradoras, lo que lo convierte en un ingrediente popular en productos cosméticos y de cuidado de la piel.",
                        price: 12.99,
                        category: NullCategory,
                        discount: NullDiscount,
                        stock: 100,
                        image: NullImage
                    },
                    quantity: 1
                }
            ]
        };
        return cart;
    };
}