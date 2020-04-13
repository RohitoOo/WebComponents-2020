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

const template = document.createElement("template");

template.innerHTML = `
    <style>
    .user-card {
		font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 55px;
		border-bottom: green 10px solid;
	}

	.user-card img {
		width: 100%;
	}

	.user-card button {
		cursor: pointer;
		background: green;
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}
    </style>
    <div class="user-card">
    <img></img>
    <div>
    

    <h3></h3>
    <div class='info'>
    <p><slot name='email'/></p>
    <p><slot name='phone'/></p>
    </div>
    <button id="toggleInfo"> Hide Info </button>

      <div>

    </div>
`;

class userCard extends HTMLElement {
  constructor() {
    super();


    this.showInfo = true

    // SHADOW DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("src");

    // this.innerHTML = `
    // <h1>${this.getAttribute('name')}<h1>

    // `
  }

toggleInfo() {
   this.showInfo = !this.showInfo

   const info = this.shadowRoot.querySelector('.info')
   const toggleBtn = this.shadowRoot.querySelector('#toggleInfo')


   if(this.showInfo){
     
  info.style.display = 'block'
  toggleBtn.innerText = 'Hide Info'

   }else {
    info.style.display = 'none'
    toggleBtn.innerText = 'Show Info'
  
   }
}

  connectedCallback(){
      this.shadowRoot.querySelector('#toggleInfo').addEventListener('click', () => 
         this.toggleInfo()
      )
  }

  disconnectedCallback(){
    this.shadowRoot.querySelector('#toggleInfo').removeEventListener()
  }
}
window.customElements.define("user-card", userCard);
