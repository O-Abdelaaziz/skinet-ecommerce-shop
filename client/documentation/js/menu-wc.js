'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">client documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-f661953011071957d132e85d699155eb1070fdd526dd7fae0aa18d186627d2c83f43442d1fb37a8c01361a8a2ef996bf857a6212d0205098788eab38b035050b"' : 'data-target="#xs-components-links-module-AccountModule-f661953011071957d132e85d699155eb1070fdd526dd7fae0aa18d186627d2c83f43442d1fb37a8c01361a8a2ef996bf857a6212d0205098788eab38b035050b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-f661953011071957d132e85d699155eb1070fdd526dd7fae0aa18d186627d2c83f43442d1fb37a8c01361a8a2ef996bf857a6212d0205098788eab38b035050b"' :
                                            'id="xs-components-links-module-AccountModule-f661953011071957d132e85d699155eb1070fdd526dd7fae0aa18d186627d2c83f43442d1fb37a8c01361a8a2ef996bf857a6212d0205098788eab38b035050b"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link" >AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a94915ed10e6022c7ef5e93dc9b57410eb21110c90a726ec84b476ae2e561c2cec05b1ada94091d5b9ee8fb49a40bbe6e75c719004e54bddc55e5261357720ec"' : 'data-target="#xs-components-links-module-AppModule-a94915ed10e6022c7ef5e93dc9b57410eb21110c90a726ec84b476ae2e561c2cec05b1ada94091d5b9ee8fb49a40bbe6e75c719004e54bddc55e5261357720ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a94915ed10e6022c7ef5e93dc9b57410eb21110c90a726ec84b476ae2e561c2cec05b1ada94091d5b9ee8fb49a40bbe6e75c719004e54bddc55e5261357720ec"' :
                                            'id="xs-components-links-module-AppModule-a94915ed10e6022c7ef5e93dc9b57410eb21110c90a726ec84b476ae2e561c2cec05b1ada94091d5b9ee8fb49a40bbe6e75c719004e54bddc55e5261357720ec"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BasketModule.html" data-type="entity-link" >BasketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BasketModule-1849debcb27629b64f1c700ecf5b36c18477c352b967e73b6c51527dce8918f4d9b0ebaebc34d97b1af1eea801e8399fc012c0236b186fcd74a63eaec0a6afaf"' : 'data-target="#xs-components-links-module-BasketModule-1849debcb27629b64f1c700ecf5b36c18477c352b967e73b6c51527dce8918f4d9b0ebaebc34d97b1af1eea801e8399fc012c0236b186fcd74a63eaec0a6afaf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BasketModule-1849debcb27629b64f1c700ecf5b36c18477c352b967e73b6c51527dce8918f4d9b0ebaebc34d97b1af1eea801e8399fc012c0236b186fcd74a63eaec0a6afaf"' :
                                            'id="xs-components-links-module-BasketModule-1849debcb27629b64f1c700ecf5b36c18477c352b967e73b6c51527dce8918f4d9b0ebaebc34d97b1af1eea801e8399fc012c0236b186fcd74a63eaec0a6afaf"' }>
                                            <li class="link">
                                                <a href="components/BasketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BasketRoutingModule.html" data-type="entity-link" >BasketRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutModule.html" data-type="entity-link" >CheckoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CheckoutModule-315c8ae1288c861f8ef280221cc85f28d75c1db873e216e1013cbc46554fb2288e2e4290d98ebd87f4fbc76b993da90d72bccf548a038103ee2598ee2df4db79"' : 'data-target="#xs-components-links-module-CheckoutModule-315c8ae1288c861f8ef280221cc85f28d75c1db873e216e1013cbc46554fb2288e2e4290d98ebd87f4fbc76b993da90d72bccf548a038103ee2598ee2df4db79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckoutModule-315c8ae1288c861f8ef280221cc85f28d75c1db873e216e1013cbc46554fb2288e2e4290d98ebd87f4fbc76b993da90d72bccf548a038103ee2598ee2df4db79"' :
                                            'id="xs-components-links-module-CheckoutModule-315c8ae1288c861f8ef280221cc85f28d75c1db873e216e1013cbc46554fb2288e2e4290d98ebd87f4fbc76b993da90d72bccf548a038103ee2598ee2df4db79"' }>
                                            <li class="link">
                                                <a href="components/CheckoutAddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutAddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutDeliveryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutDeliveryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutPaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutPaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutSuccessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutSuccessComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutRoutingModule.html" data-type="entity-link" >CheckoutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-27ac66aa1ab3b408036a203a043417b0cc3f2e79b3b8ae18e2b248a4f36c15d6a90123bb2cccd83c5abddcfbe0514cb6febea82a326dc759dac7f094507a77a5"' : 'data-target="#xs-components-links-module-CoreModule-27ac66aa1ab3b408036a203a043417b0cc3f2e79b3b8ae18e2b248a4f36c15d6a90123bb2cccd83c5abddcfbe0514cb6febea82a326dc759dac7f094507a77a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-27ac66aa1ab3b408036a203a043417b0cc3f2e79b3b8ae18e2b248a4f36c15d6a90123bb2cccd83c5abddcfbe0514cb6febea82a326dc759dac7f094507a77a5"' :
                                            'id="xs-components-links-module-CoreModule-27ac66aa1ab3b408036a203a043417b0cc3f2e79b3b8ae18e2b248a4f36c15d6a90123bb2cccd83c5abddcfbe0514cb6febea82a326dc759dac7f094507a77a5"' }>
                                            <li class="link">
                                                <a href="components/MainHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainNavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServerErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-a7233fc9f538a243327621946f59f7fe73e7b208c56ab3ec56a1a03b0ed8c6eb025bbec1ab1d983a8627abd9da9c08ff4ce625bc52a8c9479e3a9ac14c3dc4c9"' : 'data-target="#xs-components-links-module-HomeModule-a7233fc9f538a243327621946f59f7fe73e7b208c56ab3ec56a1a03b0ed8c6eb025bbec1ab1d983a8627abd9da9c08ff4ce625bc52a8c9479e3a9ac14c3dc4c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a7233fc9f538a243327621946f59f7fe73e7b208c56ab3ec56a1a03b0ed8c6eb025bbec1ab1d983a8627abd9da9c08ff4ce625bc52a8c9479e3a9ac14c3dc4c9"' :
                                            'id="xs-components-links-module-HomeModule-a7233fc9f538a243327621946f59f7fe73e7b208c56ab3ec56a1a03b0ed8c6eb025bbec1ab1d983a8627abd9da9c08ff4ce625bc52a8c9479e3a9ac14c3dc4c9"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-4a3766f6f510c18aa05014267d9b12ac4c8d2c0dd4f6bd50dadf9b9925788dea5519be3367aa39a828379e24b30962073538a679e2be7f2b4c7f7130072d3bcc"' : 'data-target="#xs-components-links-module-OrdersModule-4a3766f6f510c18aa05014267d9b12ac4c8d2c0dd4f6bd50dadf9b9925788dea5519be3367aa39a828379e24b30962073538a679e2be7f2b4c7f7130072d3bcc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-4a3766f6f510c18aa05014267d9b12ac4c8d2c0dd4f6bd50dadf9b9925788dea5519be3367aa39a828379e24b30962073538a679e2be7f2b4c7f7130072d3bcc"' :
                                            'id="xs-components-links-module-OrdersModule-4a3766f6f510c18aa05014267d9b12ac4c8d2c0dd4f6bd50dadf9b9925788dea5519be3367aa39a828379e24b30962073538a679e2be7f2b4c7f7130072d3bcc"' }>
                                            <li class="link">
                                                <a href="components/OrderDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c8d4fe84b2fa2ca128f115e0c4cd188e6c4a88ed1ed6bc32c068934d2c4925deea64248a8de8b12a3da9fa83a34c15c0cf4251f9d5aadb8ac37880335c2980b2"' : 'data-target="#xs-components-links-module-SharedModule-c8d4fe84b2fa2ca128f115e0c4cd188e6c4a88ed1ed6bc32c068934d2c4925deea64248a8de8b12a3da9fa83a34c15c0cf4251f9d5aadb8ac37880335c2980b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c8d4fe84b2fa2ca128f115e0c4cd188e6c4a88ed1ed6bc32c068934d2c4925deea64248a8de8b12a3da9fa83a34c15c0cf4251f9d5aadb8ac37880335c2980b2"' :
                                            'id="xs-components-links-module-SharedModule-c8d4fe84b2fa2ca128f115e0c4cd188e6c4a88ed1ed6bc32c068934d2c4925deea64248a8de8b12a3da9fa83a34c15c0cf4251f9d5aadb8ac37880335c2980b2"' }>
                                            <li class="link">
                                                <a href="components/BasketSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderTotalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderTotalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagingHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagingHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StepperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShopModule.html" data-type="entity-link" >ShopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShopModule-cb84db4e972510ab27a6e0b4a8afe57635eedbd13b507d2eb9db40d9f69184909bcfa5c76c093543485a1581cb8f5f82f2022c4c4efdda562bf2b9e33ae17529"' : 'data-target="#xs-components-links-module-ShopModule-cb84db4e972510ab27a6e0b4a8afe57635eedbd13b507d2eb9db40d9f69184909bcfa5c76c093543485a1581cb8f5f82f2022c4c4efdda562bf2b9e33ae17529"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-cb84db4e972510ab27a6e0b4a8afe57635eedbd13b507d2eb9db40d9f69184909bcfa5c76c093543485a1581cb8f5f82f2022c4c4efdda562bf2b9e33ae17529"' :
                                            'id="xs-components-links-module-ShopModule-cb84db4e972510ab27a6e0b4a8afe57635eedbd13b507d2eb9db40d9f69184909bcfa5c76c093543485a1581cb8f5f82f2022c4c4efdda562bf2b9e33ae17529"' }>
                                            <li class="link">
                                                <a href="components/ProductDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShopRoutingModule.html" data-type="entity-link" >ShopRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Basket.html" data-type="entity-link" >Basket</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShopParams.html" data-type="entity-link" >ShopParams</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AngularNotifierService.html" data-type="entity-link" >AngularNotifierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BasketService.html" data-type="entity-link" >BasketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckoutService.html" data-type="entity-link" >CheckoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShopService.html" data-type="entity-link" >ShopService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerService.html" data-type="entity-link" >SpinnerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoadingInterceptor.html" data-type="entity-link" >LoadingInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoggedInGuard.html" data-type="entity-link" >LoggedInGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAddress.html" data-type="entity-link" >IAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBasket.html" data-type="entity-link" >IBasket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBasketItem.html" data-type="entity-link" >IBasketItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBasketTotals.html" data-type="entity-link" >IBasketTotals</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrand.html" data-type="entity-link" >IBrand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDeliveryMethod.html" data-type="entity-link" >IDeliveryMethod</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrder.html" data-type="entity-link" >IOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrderItem.html" data-type="entity-link" >IOrderItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrderToCreate.html" data-type="entity-link" >IOrderToCreate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPagination.html" data-type="entity-link" >IPagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProduct.html" data-type="entity-link" >IProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IType.html" data-type="entity-link" >IType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});