#!/bin/bash

# Solicita el nombre del módulo
read -p "Ingresa el nombre del módulo (por ejemplo: movies): " moduleName

# Capitaliza la primera letra
Capitalized="$(tr '[:lower:]' '[:upper:]' <<< ${moduleName:0:1})${moduleName:1}"

# Crea carpeta principal y subcarpetas
mkdir -p "$moduleName"/{controller,model,view}
cd "$moduleName" || exit

# Contenido del Controller
controllerContent="import ${Capitalized}Model from '../model/${Capitalized}Model.js'
import ${Capitalized}View from '../view/${Capitalized}View.js'

export default class ${Capitalized}Controller {
  constructor(
    private readonly model: ${Capitalized}Model,
    private readonly view: ${Capitalized}View
  ) {}

  readonly init = () => {
    console.log('${Capitalized}Controller.init()')
    this.model.init()
    this.view.init()
    this.view.render()
  }
}
"

# Contenido del Model
modelContent="export default class ${Capitalized}Model {
  readonly init = () => {
    console.log('${Capitalized}Model.init()')
  }
}
"

# Contenido del View
viewContent="export default class ${Capitalized}View {
  private readonly ${moduleName}HTML: HTMLElement

  constructor() {
    this.${moduleName}HTML = document.createElement('${moduleName}')
    this.${moduleName}HTML.classList.add('${moduleName}')
  }

  readonly init = () => {
    console.log('${Capitalized}View.init()')
  }

  readonly get${Capitalized}HTML = (): HTMLElement => {
    return this.${moduleName}HTML
  }

  readonly render = () => {
    this.${moduleName}HTML.innerHTML = \`
      <h1>${Capitalized} View</h1>
      <p>Este es el contenido de la vista de ${Capitalized}.</p>
    \`
  }
}
"

# Contenido del archivo principal (fachada)
mainContent="import ${Capitalized}Controller from './controller/${Capitalized}Controller.js'
import ${Capitalized}Model from './model/${Capitalized}Model.js'
import ${Capitalized}View from './view/${Capitalized}View.js'

export default class ${Capitalized} {
  private readonly model: ${Capitalized}Model
  private readonly view: ${Capitalized}View
  private readonly controller: ${Capitalized}Controller

  constructor() {
    this.model = new ${Capitalized}Model()
    this.view = new ${Capitalized}View()
    this.controller = new ${Capitalized}Controller(this.model, this.view)
  }

  readonly init = () => {
    this.controller.init()
  }

  readonly get${Capitalized}HTML = (): HTMLElement => {
    return this.view.get${Capitalized}HTML()
  }
}
"

# Crear y llenar los archivos
echo "$controllerContent" > "controller/${Capitalized}Controller.ts"
echo "$modelContent" > "model/${Capitalized}Model.ts"
echo "$viewContent" > "view/${Capitalized}View.ts"
echo "$mainContent" > "${Capitalized}.ts"

echo "✅ Estructura MVC para '$Capitalized' creada con éxito."
