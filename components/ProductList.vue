<template>
    <div class="container">
        <div class="row row-offcanvas row-offcanvas-right">
            <div class="col-xs-12 col-sm-3 sidebar-offcanvas side-book">
                <div class="main-line"><h3>Where to Buy Our Food & Supplements</h3></div>
                <div class="rowsl">
                    <form @submit.prevent="">
                        <div class="form-group input-group">
                            <label>Find out where you can buy Steve's Real Food near You.</label>
                            <input class="form-control pincode-search" placeholder="Enter City/Zip Code" type="text"
                                   v-model="city_zipcode">
                            <span class="input-group-btn"><button class="btn btn-info search-btn"
                                                                  v-on:click="gotoMaps(city_zipcode)">Find Stores</button></span>
                        </div>
                    </form>
                    <button class="btn btn-outline-info search-btn" v-on:click="showPosition">Search Nearby
                        <font-awesome-icon icon="map-marker-alt"/>
                    </button>
                </div>
                <hr>
                <div class="main-line"><h3>What are you Searching for?</h3></div>
                <form id="search-product">
                    <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                        <div class="input-group">
                            <input aria-describedby="button-addon1" class="form-control border-0 bg-light"
                                   placeholder="Search"
                                   type="search">
                            <div class="input-group-append">
                                <button class="btn btn-link text-secondary" id="button-addon1" type="submit">
                                    <font-awesome-icon icon="search"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="Product-filters">
                    <p class="product-filter-text">Narrow your search by selecting your favourite products</p>
                    <b-badge :key="category.id"
                             class="badge badge-pill"
                             href=""
                             v-bind:class="{selected:category.selected}"
                             v-for="category in categories" v-on:click="category.selected = !category.selected"
                             variant="light">{{category.name}}
                    </b-badge>
                </div>
            </div>
            <div class="col-xs-12 col-sm-9 Products-grid">
                <div class="rowsl flex-container">
                    <select class="dropdown">
                        <option disabled selected value="">{{selectedProducts.length}} Products Selected</option>
                        <option :key="product.id" v-for="product in selectedProducts">{{product.label}}</option>
                    </select>
                    <b-badge :key="category.id"
                             class="badge badge-pill" href="" v-for="category in selectedCategories"
                             variant="light">{{category.name}}
                        <i class="glyphicon glyphicon-remove"
                           v-on:click="category.selected = !category.selected"></i>
                    </b-badge>
                </div>
                <div class="grid-container">
                    <div :key="product.id"
                         @click="changeSelection(product.id)"
                         class="grid-item grid-item-s1 s1"
                         v-bind:class="{'product-selected':product.selected}"
                         v-for="product in products">
                        <div>
                            <img :alt="product.alt" :src="product.url" class="product-image">
                            <label class="product-name">{{product.label}}</label></div>
                        <div class="checked" v-if="product.selected">
                            <font-awesome-icon icon="check-circle"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {BBadge} from 'bootstrap-vue';

    export default {
        name: "ProductsList",
        data() {
            return {
                city_zipcode: "",
                categories: [
                    {
                        id: '1',
                        name: 'All',
                        selected: true
                    },
                    {
                        id: '2',
                        name: 'Dogs',
                        selected: false
                    },
                    {
                        id: '3',
                        name: 'Cats',
                        selected: false
                    },
                    {
                        id: '4',
                        name: 'Frozen',
                        selected: false
                    },
                    {
                        id: '5',
                        name: 'Freeze Dry',
                        selected: false
                    },
                    {
                        id: '6',
                        name: 'Supplements',
                        selected: false
                    },
                    {
                        id: '7',
                        name: 'Prey Diet',
                        selected: false
                    },
                    {
                        id: '8',
                        name: 'Beef Diet',
                        selected: false
                    },
                    {
                        id: '9',
                        name: 'Pork Diet',
                        selected: false
                    },
                    {
                        id: '10',
                        name: 'Turkey Diet',
                        selected: false
                    },
                    {
                        id: '11',
                        name: 'Chicken Diet',
                        selected: false
                    }

                ]
            }
        },
        components: {
            BBadge
        },
        computed: {
            products() {
                return this.$store.state.products;
            },
            selectedProducts() {
                return this.$store.getters.getSelectedProducts
            },
            selectedCategories: state => {
                let selectedcategories = state.categories.filter(category => {
                    return category.selected === true;
                });
                return selectedcategories;
            }
        },
        methods: {
            showPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        let positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
                        alert(positionInfo);
                        this.$store.commit('goToMap')

                    });
                } else {
                    alert("Sorry, your browser does not support geolocation.");
                }
            },
            changeSelection(id) {
                this.$store.commit('changeProductSelection', id)
            },
            gotoMaps(zipcode) {
                if(zipcode) {
                    alert("Search the products in " + zipcode + " zipcode");
                    this.$store.commit('goToMap')
                }
            }
        }
    }
</script>

<style scoped>
    body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 16px;
        color: #555;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        color: #333
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 150px);
        grid-gap: 10px;
        max-height: 70%;
        overflow-y: scroll;
        -ms-overflow-style: none;
    }

    /*invisible scroll bar*/
    .grid-container::-webkit-scrollbar {
        display: none;
    }

    /*.container {*/
    /*padding: 0;*/
    /*}*/
    .rowsl {
        margin: 0 0 10px;
    }

    .flex-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }

    .side-book {
        background-color: #eee;
        height: max-content;
    }

    .side-book label {
        font-weight: normal;
        font-size: 12px;
        margin: 2px 20px 10px;
    }

    p.product-filter-text {
        font-size: 12px;
        margin: 5px 15px;
    }

    .s1 {
        height: 150px;
        border: 2px solid #FFF;
    }

    .product-image {
        height: 120px;
        width: 120px;
        margin: 0 10px;
    }

    .product-name {
        font-weight: normal;
        font-size: 12px;
        margin: 5px 0;
        display: inherit
    }

    .input-group-btn {
        width: auto
    }

    .pincode-search {
        margin: 0 5px 0 0;
    }

    .main-line h3 {
        margin-top: 10px;
        font-size: 2.3rem;
    }

    .border-0.bg-light {
        margin: 0 0 0 3px;
        border-radius: 15px;
    }

    .form-control:focus {
        box-shadow: none;
    }

    .fa-map-marker-alt {
        margin: 0 0 0 10px;
    }

    .badge-pill {
        padding-right: 1.6em;
        padding-left: 1.6em;
        border-radius: 10rem;
    }

    .badge {
        margin: 5px;
        padding: 0.60em 1.2em;
        font-size: 100%;
        font-weight: 500;
        color: #6c6c6c;
        background-color: #f8f8f8;
        border-style: solid;
        border-width: thin;
        border-color: dimgray;
    }

    /*Used when clicked on the category*/
    .selected {
        color: whitesmoke;
        background-color: #15566a;
    }

    .tag a {
        color: #dddddd;
        cursor: pointer;
        margin: 0 0 0 .5em;
        opacity: 0.6;
    }

    .tag a:hover {
        opacity: 1.0
    }

    .btn-outline-info {
        width: 100%;
    }

    .glyphicon-remove {
        color: dimgray;
        cursor: pointer;
        margin: 0 0 0 .5em;
        opacity: 0.6;
    }

    .glyphicon-remove:hover {
        opacity: 1.0;
    }

    .dropdown {
        padding-left: 10px;
        width: 150px;
        height: 26px;
        margin: 5px;
    }

    option {
        border-width: 1px;
        font-size: 12px;
    }

    .fa-check-circle {
        font-size: 55px;
        color: rgba(142, 36, 30, 0.88);
        background-color: #f5f5f552;
        border-radius: 50%;
    }

    .checked {
        margin-top: -115px;
    }
</style>