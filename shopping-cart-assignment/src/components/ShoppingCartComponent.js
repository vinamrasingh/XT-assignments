import ItemComponent from './itemComponent';
import ShoppingCartService from '../service/dataLayer';
import CarouselComponent from './CarouselComponent';
import BillingComponent from './BillingComponent';
export default class ShoppingCartComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new ShoppingCartService();
        this.billingAmount=0;
        this.render();
    }
    render() {
        this.shoppingCartService.getDataShoppingCart().then((result)=>{
    
            let markup =/* `<div class="shopping-cart">
                <div class="title">
                YOUR SHOPPING BAG
                </div>
                <header class="headerClass">
                <div class="header1">${result.length} ITEMS</div>
                <div class="header2">SIZE</div>
                <div class="header3">QTY</div>
                <div class="header4">PRICE</div>


                </header> */
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
                                <li class="items">3 items</li>
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

                new ItemComponent('#itemsDiv', item);
                doBilling.call(this,item);

            });
            new BillingComponent('#paymentandhelp',this.billingAmount);
           
            new CarouselComponent('#carousel');
            // ${result.items.map(item => new ItemComponent(item).render()).join('')}
            // return markup;
        });  
    
    }
}