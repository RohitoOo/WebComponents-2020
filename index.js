// class AppDrawer extends HTMLElement {
//     // constructor() {
//     //     console.log("Constructed")
//     // }

//     // connectedCallback(){
//     //     console.log("connectedCallback")
//     // }

//     // disconnectedCallback(){
//     //     console.log("disconnectedCallback")
//     // }

//     attributeChangedCallback(attributeName, oldValue, newValue){
//         console.log("Added Removed Updated Replaced", attributeName, oldValue, newValue )
//     }
    
// }
// window.customElements.define('app-drawer', AppDrawer)


const template  =  document.createElement('template')

template.innerHTML = `
    <style>
    h3{
        color: maroon;
    }
    </style>
    <div>
    <h3>I'm the Template - Inned Styling </h3>
    </div>
`

class userCard extends HTMLElement {
    constructor() {
        super()

            // SHADOW DOM 
            this.attachShadow({ mode : 'open'})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')


        // this.innerHTML = `
        // <h1>${this.getAttribute('name')}<h1> 
        
        // `
    }


    
}
window.customElements.define('user-card', userCard)
