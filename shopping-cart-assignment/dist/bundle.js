/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShoppingCartService{
    constructor(){
        this.shoppingUrl='http://localhost:3000/items';
        this.carouselUrl = 'http://localhost:3000/suggestionCarousel';
    }
    async getDataShoppingCart(){
        try{
            const res = await fetch(this.shoppingUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async getDataCarousel(){
        try{
            const res = await fetch(this.carouselUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async getDataShoppingCartById(id){
        try{
            const res = await fetch(`${this.shoppingUrl}?id=${id}`);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async addData(item){
        try{
            const id= Math.floor(Math.random() * 100);
            item.id=id;
            
            const response = await fetch(this.shoppingUrl,{
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item) // body data type must match "Content-Type" header
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }

    async editData(item){
        try{
            //const toUpdate= new Profile(id,name,city);
            const response=await fetch(`${this.shoppingUrl}/${item.id}`,{
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }
    /* async remove(id){
        try{
            const response=await fetch(`${this.url}/${id}`,{
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    } */
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShoppingCartService;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_dataLayer__ = __webpack_require__(0);

var  self
class OverlayComponent{
    constructor(parent,dataCounter,operation){
        this.parent=parent;
        this.dataCounter=dataCounter;
        this.operation=operation;
        this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_0__service_dataLayer__["a" /* default */]();
        this.render();
        self=this;
    }
    render(){
        this.getData().then((result)=>{
            let imageObj;
            let operationButton;
            let buttonText;
            if(this.operation=='add'){
                buttonText='ADD TO BAG';
                imageObj=result[this.dataCounter];
                
            }else{
                buttonText='EDIT';
                imageObj=result[0];
            }
            operationButton=`<button class="overlayButton">${buttonText}</button>`
            
            let markUp=`<div class="overlay">
            
            <div class="overlay-content">
            <span class="close">&times;</span>
            <div class="overlaySections">
                    <section class="overlayLeft">
                    <div class="overlayLeftContent"> 
                        <div class="overlayTitle">${imageObj.title}</div>
                        <div class="overlayPrice">
                            <div>$</div>${imageObj.price}
                        </div>
                        <div class="sizeandqty">
                            <div class="overlaySize">SIZE
                            <select id="size_${this.id}">
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                            </div>
                            <div class="overlayQty">QTY
                                <select id="quantity_${this.id}">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="overlayOperationButton">
                            ${operationButton}
                        </div>
                        
                        <div>
                            <a class="overlayAnchor">See product details</a>
                        </div>
                        </div>
                    </section>
                    <section class="overlayRight">
                        <div class= "overlayImage">
                            <img src="${imageObj.imgUrl}"></img>
                        </div>
                    </section>
                    </div>
                    </div>
                </div>`;
                $(this.parent)[0].innerHTML=markUp;
            if(this.operation == 'add'){
                $('.overlayButton').on('click',{"obj":imageObj},this.addProduct);
            }else{
                $('.overlayButton').on('click',{"obj":imageObj},this.editProduct);
            }
            $('.close').on('click',function(){
                $('.overlay')[0].style.display ="none";
            });
        });     
    }
addProduct(obj){
    obj.data.obj.size=$("#size_"+`${self.id}`).val();
    obj.data.obj.quantity=$("#quantity_"+`${self.id}`).val();
    self.shoppingCartService.addData(obj.data.obj).then((result)=>console.log(result));
}
editProduct(obj){
    obj.data.obj.size=$("#size_"+`${self.id}`).val();
    obj.data.obj.quantity=$("#quantity_"+`${self.id}`).val();
    self.shoppingCartService.editData(obj.data.obj,this.dataCounter);
}

    getData(){
        if(this.operation == 'add'){
            return this.shoppingCartService.getDataCarousel();
        }else{
            return this.shoppingCartService.getDataShoppingCartById(this.dataCounter);
        }
    }
    
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OverlayComponent;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_shoppingCartComponent__ = __webpack_require__(3);



class MainComponent{
    constructor(){
        this.shoppingCart = new __WEBPACK_IMPORTED_MODULE_0__components_shoppingCartComponent__["a" /* default */]('.container');
        
    }
    
}
new MainComponent();




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_dataLayer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CarouselComponent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BillingComponent__ = __webpack_require__(7);




class ShoppingCartComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new __WEBPACK_IMPORTED_MODULE_1__service_dataLayer__["a" /* default */]();
        this.billingAmount=0;
        this.render();
    }
    render() {
        this.shoppingCartService.getDataShoppingCart().then((result)=>{
    
            let markup =
                `<div class="wrapper">
                    <div class="main">
                        <section id="header">
                            <article id="heading">YOUR SHOPPING BAG</article>
                           
                            <article id="count">${result.length} ITEMS</article>
                        </section>
                        <section class="HeaderPC">
                            <h1>YOUR SHOPPING BAG</h1>
                        </section>
                        <ul class="HeaderDesktop">
                                <li class="items">${result.length} ITEMS</li>
                                <li class="size">size</li>
                                <li class="qty">qty</li>
                                <li class="price">price</li>
                        </ul>
                        <div id="itemsDiv">
                            <section class="quantity-header"></section>
                        </div>
                        <section id="paymentandhelp"></section>
                    </div>
                    <section id="carousel" class="suggestions"></section>
                    <div id="overlay"><div>
                </div>`;
            $(this.parent).html(markup);
            let doBilling=function(res){
                this.billingAmount += res.quantity * res.price; 
            }

            result.forEach(item => {

                new __WEBPACK_IMPORTED_MODULE_0__itemComponent__["a" /* default */]('#itemsDiv', item);
                doBilling.call(this,item);

            });
            new __WEBPACK_IMPORTED_MODULE_3__BillingComponent__["a" /* default */]('#paymentandhelp',this.billingAmount);
           
            new __WEBPACK_IMPORTED_MODULE_2__CarouselComponent__["a" /* default */]('#carousel');
        });  
    
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShoppingCartComponent;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OverlayComponent__ = __webpack_require__(1);


class ItemComponent{
    constructor(parent,item){
      this.parent=parent;
        this.imgUrl=item.imgUrl;
        this.title= item.title;
        this.style=item.style;
        this.color=item.color;
        this.quantity=item.quantity;
        this.size=item.size;
        this.price=item.price;
        this.id = item.id;

        this.render();
    }
    render(){
      const self={context: this};
      let markUp =`<section class="item-container">
        <section class="item">
          <article class="img">
            <img class="image" src="${this.imgUrl}">
          </article>
          <article class="description">
            <div class="heading">${this.title} <br/>COTTON TSHIRT</div>
            <div>
              <span>Style #:</span> <span>${this.style}</span>
            </div>
            <div>
              <span>Colour :</span> <span>${this.color}</span>
            </div>
            <div>
              <span>Size :</span>  <span>${this.size}</span>
            </div>
            <div class="qty"> 
              <span>QTY:</span>
              <input type="text" value=${this.quantity} disabled id="textbox"/>
            </div>
            <div class="amount">
              $ <span class="amt">${this.price}</span>
            </div>
          </article>
          <section class="buttonsSection">
          <button class="edit" id="edit_${this.id}">EDIT</button>
          <button class="remove">X REMOVE</button>
          <button class="save">SAVE FOR LATER</button>
        </section>
        </section
      </section>`;
      let openModal=function(){
        new __WEBPACK_IMPORTED_MODULE_0__OverlayComponent__["a" /* default */]("#overlay",this.context.id,"edit");
      }
      $(this.parent).append(markUp);
      let boundFunc=openModal.bind(self);
      
      $('#edit_'+`${this.id}`).on('click',boundFunc);
      
      
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ItemComponent;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OverlayComponent__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dataLayer__ = __webpack_require__(0);



var self;
class CarouselComponent{
    constructor(parent){
        this.parent=parent;
        this.slideIndex=1;
        this.shoppingCartService = new __WEBPACK_IMPORTED_MODULE_2__service_dataLayer__["a" /* default */]();
        this.render();
        self=this;
    }
    render(){
        this.shoppingCartService.getDataCarousel().then((result)=>{
        let markUp=`<div class="slideshow-container">
        <header class="carouselHead">TAKE A LOOK AT OUR NEW ARRIVALS</header>
        <div id="carouselImage"></div>
       
            <a class="prev" id="prevButton">&#10094;</a>
            <a class="next" id="nextButton">&#10095;</a>
            <button id="viewDetails" class="viewDetails">View Details</button>
        </div>`;
        $(this.parent).append(markUp);
        result.forEach(carouselImage => {

            new __WEBPACK_IMPORTED_MODULE_0__ImageCarouselComponent__["a" /* default */]('#carouselImage', carouselImage);

        });
        this.showSlides(1);
        $('#prevButton').on('click',{"counter":-1},self.plusSlides);
        $('#nextButton').on('click',{"counter":1},self.plusSlides);
        $('#viewDetails').on('click',self.openModal);
    });
    }

    // Next/previous controls
    openModal(){
        let dataCounter=self.slideIndex-1;
        new __WEBPACK_IMPORTED_MODULE_1__OverlayComponent__["a" /* default */]("#overlay",dataCounter,"add");

    }
    plusSlides(n) {
        self.showSlides(self.slideIndex += n.data.counter);
        }
    // Thumbnail image controls
    currentSlide(n) {
        self.showSlides(self.slideIndex = n.data.counter);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        //var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {self.slideIndex = 1} 
        if (n < 1) {self.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[self.slideIndex-1].style.display = "block"; 
        //dots[this.slideIndex-1].className += " active";
    }   
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CarouselComponent;

///showSlides(1);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImageCarouselComponent{
    constructor(parent,carouselSuggestion){
        this.imgUrl=carouselSuggestion.imgUrl;
        this.price= carouselSuggestion.price;
        this.parent=parent;
        this.render();
    }
    render(){
        let markup=`
        <div class="mySlides fade">
          <div class="numbertext"></div>
          <img src=${this.imgUrl} style="width:100%">
          <div class="text">${this.price}</div>
        </div>`;
        $(this.parent).append(markup);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageCarouselComponent;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_dataLayer__ = __webpack_require__(0);


class BillingComponent{
    constructor(parent,billingAmount){
        this.parent=parent;
        this.billingAmount=billingAmount;
        this.render();
    }
    render(){
        // this.shoppingCartService.getDataShoppingCart().then((result)=>{

        // });
        $(this.parent).append ( `
        
                    <section class="questions">
                        <p>Need Help<br>or have questions?</p>
                        <p>Call Customer Service at <br>1-800-555-5555</p>
                        <a href="#">Chat with one of <br/>our stylists</a>
                        <a href="#">See return <br/>&amp; exchange policy</a>
                    </section>
                    
                    <section id="payment">
                        <section id="promotion">
                            <label>ENTER PROMOTION CODE OR GIFT CARD</label>
                            <input type="textbox">
                            <button>Apply</button>
                        </section>
                        <section class="pricebox">
                                <div class="insidePrice">
                                    <div class="leftCol">Subtotal</div>
                                    <div class="rightCol">$${this.billingAmount}</div>
                                </div>
                                <div class="insidePrice">
                                    <div class="leftCol" >Promotion JF10 Applied</div>
                                    <div class="rightCol">-$0.0</div>
                                </div>
                                <div class="insidePrice">
                                    <div class="leftCol"><p>Estimated Shipping</p>
                                        <p class="ship-text">you qualify for free shipping because your order is over $50.
                                        </p>
                                    </div>
                                    <div class="rightCol">FREE</div>
                                </div>
                                <div class="insidePrice">
                                    <div class="leftCol">
                                        <p>Estimated Total</p>
                                        <p class="ship-text">Tax will be applied during checkout</p>
                                    </div>
                                    <div class="rightCol ">$${this.billingAmount}</div>
                                </div>

                                        <div class="footerButtons">
                                                <div class="btnwrap">
                                                    <a href="#" class="checkout">CHECKOUT</a>
                                                    <a href="#" class="Shipping">Continue Shopping</a>

                                                </div>
                                                <p>Secure Checkout Shopping is always safe &amp; Secure</p>
                                            </div>
                        </section>
                    </section>
            `);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BillingComponent;


/***/ })
/******/ ]);