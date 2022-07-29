class Store{
    constructor() {
        this.itemList = [];
    }

    addItem(){
        const li = document.createElement('li');
        this.itemList.push("Give me task");
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
        for (let x = 0; x < store.itemList.length; x++) {
            this.innerHTML = text += store.itemList[x]  + "<br>";
        }


//     show(){
//         //const store = new Store();
//         //let text = store.
// const it = document.createElement("<li>");
// it.innerText = text;
// }

    }
}


customElements.define('display-list', DisplayList);