<template>
    <div class="store-list">
        <div :key="store.infoText.id"
             class="store" v-for="store in markers"
             v-on:click=seeThisStore(store.infoText.label)>
            <div class="row">
                <div class="col-md-12 listing-block">
                    <div class="card">
                        <div class="card-upper">
                            <div class="marker-label">{{store.infoText.label}}</div>
                            <div class="name-rating">
                                <div class="name">
                                    {{store.infoText.name}}
                                </div>
                                <div class="rating">
                                    <star-rating
                                            :increment="0.1" :read-only=true :show-rating=false :star-size="15"
                                            v-model=store.infoText.rating></star-rating>
                                    ({{store.infoText.reviews}})
                                </div>
                            </div>
                            <div class="distance-box2">
                                <div class="distance">{{Math.ceil(8 * 0.000621371192)}} miles</div>
                                <div class="box2">3 products found</div>
                            </div>
                        </div>
                        <div class="address">{{store.infoText.address}}</div>
                        <div class="stats">
                            <span><i>Open today until 8:30pm</i></span>
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
        name: 'StoreList',
        data() {
            return {
                rating: 4
            }
        },
        props: {
            markers: Array
        },
        components: {
            StarRating
        },
        methods: {
            seeThisStore(id) {
                console.log(id);
                this.$store.commit('goToThisStore', id)
            }
        }
    }
</script>

<style scoped>
    .store-list {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
        -ms-overflow-style: none;
    }

    /*invisible scroll bar*/
    .store-list::-webkit-scrollbar {
        display: none;
    }

    .store p {
        margin-bottom: 5px;
    }

    .listing-block {
        background: #fff;
    }

    .card {
        background: #fff;
        height: 85px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 0 15px;
        border: 0;
        border-bottom: 1px solid rgba(0, 0, 0, .125);
    }

    .card-upper {
        width: 100%;
        text-align: right;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 5px 0;
    }

    .card .name {
        text-align: left;
        width: 100%;
        font-size: 14px;
        font-weight: 600;
        color: #4765AB;
    }

    .card .address {
        font-size: 12px;
    }

    .card .rating {
        display: flex;
        flex-direction: row;
        /*justify-content: space-evenly;*/
        align-items: center;
        font-size: 10px;
        font-weight: bold;
        color: #232323;
    }

    .card .distance {
        font-size: 14px;
    }

    .card .box2 {
        font-size: 10px;
        font-weight: 600;
    }

    .card .stats span {
        font-size: 10px;
        color: #888;
    }

    .marker-label {
        position: relative;
        padding: 5px 9px;
        border-radius: 50%;
        margin-right: 7px;
        color: #fff;
        background-color: #800000;
    }

    .distance-box2 {
        position: absolute;
        right: 10px;
    }
</style>