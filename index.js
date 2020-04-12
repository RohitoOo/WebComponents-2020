class AppDrawer extends HTMLElement {
    // constructor() {
    //     console.log("Constructed")
    // }

    // connectedCallback(){
    //     console.log("connectedCallback")
    // }

    // disconnectedCallback(){
    //     console.log("disconnectedCallback")
    // }

    attributeChangedCallback(attributeName, oldValue, newValue){
        console.log("Added Removed Updated Replaced", attributeName, oldValue, newValue )
    }
    
}
window.customElements.define('app-drawer', AppDrawer)
