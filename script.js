class Store{
    constructor() {
        this.itemList = [];
        const item = item;
    }

    addItem(){
        const li = document.createElement('li');
        this.itemList.push("Test value");
        const delButton = document.createElement('button');
        delButton.innerHTML = "Delete";
    }

    deleteItem(){
        this.itemList.pop();
    }
}

class DisplayList extends HTMLElement {
    constructor() {
        super();
        let store = new Store();
        let text = "";
        store.addItem();
        const input = document.createElement('input');
        //input.type = this.tex
        for (let x = 0; x < store.itemList.length; x++) {
            this.innerHTML = text += store.itemList[x]  + "<br>";
        }

    }
}


customElements.define('display-list', DisplayList);