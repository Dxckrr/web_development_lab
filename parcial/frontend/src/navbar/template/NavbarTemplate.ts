
export default class NavbarTemplate {
    readonly renderNavbar = (): string => {
        return `
        <nav class="navbar">
            <div class="d-flex align-items-center justify-content-between container">
                <div class="me-5">
                    <img src="./img/logo.jpg" alt="Logo BuenaVida">
                </div>

                <!-- Searchbar -->
                <div class="flex-grow-1">
                    <div class="input-group searchbar">
                        <input type="text" class="form-control border-0 bg-transparent" placeholder="¿Qué producto estás buscando…?">

                        <span class="input-group-text bg-white border-0 bg-transparent">
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
                    <div class="text-center">
                        <i class="bi bi-person-circle fs-5"></i><br>
                        <span>Mi Cuenta</span>
                    </div>
                    <div class="text-center">
                        <i class="bi bi-basket fs-5"></i><br>
                        <span>Mi Carrito</span>
                    </div>
                </div>
            </div>
        </nav>
        `
    }
}