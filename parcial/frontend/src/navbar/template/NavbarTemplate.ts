export default class navbarTemplate {
  readonly renderNavbar = async (): Promise<string> => {
    return `
        <nav class="navbar">
            <div class="d-flex align-items-center justify-content-between container">
                <div class="me-5">
                    <img src="./img/logo.jpg" alt="Logo BuenaVida" onclick="location.reload()" style="cursor: pointer;">
                </div>

                <!-- Searchbar -->
                <div class="flex-grow-1">
                    <div class="input-group searchbar">
                        <input id="searchInput" type="text" class="form-control border-0 bg-transparent" placeholder="¿Qué producto estás buscando…?">

                        <span id="searchBtn" class="input-group-text bg-white border-0 bg-transparent">
                            <i class="bi-search"></i>
                        </span>
                    </div>
                </div>
                
                <!-- Buttons --> 
                <div class="navbar-buttons d-flex align-items-center">
                    <div class="text-center">
                        <i class="bi bi-heart fs-5"></i><br>
                        <span>Mis Favoritos</span>
                    </div>
                    <div id="login" class="text-center">
                        <i class="bi bi-person-circle fs-5"></i><br>
                        <span>Mi Cuenta</span>
                    </div>
                    <div class="dropdown-c">
                        <div class="text-center" id="cart-dropdown-btn">
                            <i class="bi bi-basket fs-5"></i><br>
                            <span>Mi Carrito</span>
                        </div>
                        <div class="dropdown-cart-menu cart-modal hidden" id="dropdown-cart-menu">
                            <div id="cart-dd-content">
                                
                            </div>
                            
                            <div class="m-0 p-0">
                                <div class="d-grid gap-2 mt-3">
                                    <button class="btn btn-green" id="go-to-cart-btn">Ir al carrito</button>
                                    <button class="btn btn-green" id="do-order">Realizar pedido</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `
    }
}

