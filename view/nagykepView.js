class nagykepView{
    #eleresiut
    constructor(szuloElem, eleresiut){
        this.#eleresiut = eleresiut
        this.szuloElem = szuloElem
        this.htmlLetrehoz()
        
    }

    htmlLetrehoz(){
        let txt=""
        txt += `<div><img id="" src="${this.#eleresiut}" alt="${this.#eleresiut}"></div><button>bal</button><button>jobb</button>`
        this.szuloElem.html(txt)
    }

    esemenyLetrehozas(esemenynev){
        const esemenyem = new CostumEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }
    nagyKepElemBeallit(){
        this.nagyIMGElem.attr()
    }
}

export default nagykepView