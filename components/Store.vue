<template>
    <div class="store">
        <div class="row">
            <div class="col-md-12 listing-block" v-for="storeDetails in selectedStore">
                <div class="store-toggle">
                    <div @click="backToStoreList">Location {{storeDetails.id}} of 8</div>
                    <div class="right-icons">
                        <font-awesome-icon @click="previous()" icon="angle-left"/>
                        <font-awesome-icon @click="next()" icon="angle-right"/>
                    </div>
                </div>
                <div class="store-data">
                    <div class="marker">
                        <div class="marker-label">
                            {{storeDetails.id}}
                        </div>
                        <div class="store-header">
                            <div class="name">{{storeDetails.name}}</div>
                            <div class="address">{{storeDetails.address}}</div>
                            <div class="phone-number">{{storeDetails.phone_number}}</div>
                            <button class=" btn btn-info">Store Website</button>
                        </div>
                    </div>
                    <hr>
                    <div class="store-mid">
                        <div class="store-time">
                            <p>Sun 10:00am–9:00pm</p>
                            <p>Mon 10:00am–9:00pm</p>
                            <p>Tue 10:00am–9:00pm</p>
                            <p>Wed 10:00am–9:00pm</p>
                            <p>Thur 10:00am–9:00pm</p>
                            <p>Fri 10:00am–9:00pm</p>
                            <p>Sat 10:00am–9:00pm</p>
                        </div>
                        <div class="distance-right">
                            <div class="distance"><h2>9</h2>
                                <h4>miles</h4>
                                <h5>away</h5>
                            </div>
                            <div class="get-directions"><a href="#">Get Directions
                                <font-awesome-icon icon="angle-right"/>
                            </a></div>
                        </div>
                    </div>
                    <hr>
                    <div class="rating-review">
                        <h4>{{storeDetails.rating}}</h4>
                        <div class="rating">
                            <star-rating
                                    :increment="0.1" :read-only=true :show-rating=false :star-size="15"
                                    v-model=storeDetails.rating></star-rating>
                        </div>
                        <h4>({{storeDetails.reviews}})</h4>
                        <div class="rating-reviews-link">
                            <a href="#">Read Reviews
                                <font-awesome-icon icon="angle-right"/>
                            </a>
                            <a href="#">Write a Review
                                <font-awesome-icon icon="angle-right"/>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div class="product-list">
                        <h3>3 products found</h3>
                        <div class="product-gallery">
                            <div :key="product.id"
                                 class="grid-item grid-item-s1 s1"
                                 v-for="product in selectedProducts">
                                <img :alt="product.alt" :src="product.url" class="product-image">
                                <label class="product-name">{{product.label}}</label>
                            </div>
                        </div>
                        <div>
                            <h5>Other Products</h5>
                            Steve's Original Frozen <br>
                            Quest Cat Food<br>
                            Enhance<br>
                            16oz ChiaFreeze Goat Milk Yogurt<br>
                            <h6>*products are subject to availability</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'

    export default {
        name: 'Store',
        components: {
            StarRating
        },
        data() {
            return {
                rating: 4,
                reviews: 65
            }
        },
        computed: {
            selectedProducts() {
                return this.$store.getters.getSelectedProducts
            },
            selectedStore() {
                return this.$store.getters.getselectedStore
            }
        },
        methods: {
            backToStoreList() {
                this.$store.commit('storeList');
            },
            previous() {
                this.$store.commit('previousStore')
            },
            next() {
                this.$store.commit('nextStore')
            }
        }
    }
</script>

<style scoped>
    body {
        font-family: 'Open Sans', sans-serif;
    }

    .col-md-12 {
        padding-right: 15px;
        padding-left: 15px;
    }

    .store-toggle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        color: #5e93a4;
        background-color: #e3e3e3;
        font-size: 15px;
    }

    .right-icons {
        position: absolute;
        right: 45px;
    }

    .store {
        height: 80vh;
        overflow-x: hidden;
        overflow-y: scroll;
        -ms-overflow-style: none;
    }

    /*invisible scroll bar*/
    .store::-webkit-scrollbar {
        display: none;
    }

    .store p {
        margin-bottom: 5px;
    }

    .listing-block {
        background: #fff;
    }

    .store-data {
        background: #fff;
        font-size: 12px;
        position: relative;
    }

    .marker {
        display: flex;
        flex-direction: row;
    }

    .store-header {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0 15px;
        text-align: left;
    }

    .store-header button {
        position: absolute;
        right: 15px;
        top: 60px;
        padding: 5px 10px;
    }

    .store-data .name {
        font-size: 20px;
        font-weight: 600;
        color: #1e6e86;
    }

    .store-data .address {
        color: #c5c5c5;
        width: 60%;
    }

    .store-data .phone-number {
        color: #42849a;
    }

    .store-mid {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
    }

    .store-data .store-time {
        color: #aeaeb1;
    }

    .distance-right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .distance {
        padding: 2px 12px;
        border: 2px solid #000;
        color: #800000;
    }

    .distance h2, h4, h5 {
        font-weight: 700;
        margin-bottom: 0;
    }

    .get-directions {
        margin: 12px 0;
    }

    .rating-review {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .rating-review h4 {
        font-weight: normal;
    }

    .rating-reviews-link {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .product-list {
        text-align: left;
    }

    .product-list h5, h6 {
        margin: 5px 0;
    }

    .product-gallery {
        display: flex;
        flex-direction: row;
        /*justify-content: space-around;*/
        overflow-x: scroll;
    }

    .product-image {
        height: 120px;
        width: 120px;
        margin: 2px 5px;
    }

    .product-name {
        font-weight: normal;
        font-size: 12px;
        margin: 5px 0;
        display: inherit;
        text-align: center;
    }

    .marker-label {
        display: inline-table;
        position: relative;
        flex: border-box;
        padding: 10px 15px;
        border-radius: 50%;
        margin: 10px 10px 10px 15px;
        color: #fff;
        background-color: #800000;
    }

    .svg-inline--fa.fa-w-8 {
        width: 1.5em;
        cursor: pointer;
    }
</style>