<template>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="search">
                        <div class="back-to-products" @click="backToProducts">
                            <font-awesome-icon icon="chevron-left"/>&nbsp;&nbsp;&nbsp;Back to Products
                        </div>
                        <div class="right-icons">
                            <font-awesome-icon icon="print"/>
                            <font-awesome-icon icon="envelope"/>
                        </div>
                    </div>
                    <store-list :markers="markers" v-if="storelistshow"/>
                    <store v-if="storeshow"/>
                    <div class="footer">
                        Total {{markers.length}} stores found.
                    </div>
                </div>
                <div class="col-md-8">
                    <GmapMap
                            :center="center"
                            :zoom="zoom"
                            map-type-id="roadmap"
                            ref="map"
                    >
                        <gmap-info-window :opened="infoWinOpen" :options="infoOptions" :position="infoWindowPos"
                                          @closeclick="infoWinOpen=false">
                            <div class="info-window">
                                <!--info window-->
                                <div class="card-body">
                                    <div class="name">{{infoContent.name}}
                                    </div>
                                    <div class="distance">{{Math.ceil(8 * 0.000621371192)}}
                                        <p>miles</p></div>
                                    <div class="rating">
                                        <star-rating
                                                :increment="0.1" :read-only=true :show-rating=false :star-size="15"
                                                v-model=infoContent.rating></star-rating>
                                        ({{infoContent.reviews}})
                                    </div>
                                    <div class="box2">3 products found</div>
                                    <div class="stats">
                                        <span><i>Open today until 8:30pm</i></span>
                                    </div>
                                    <div class="address">{{infoContent.address}}</div>
                                </div>
                                <!--info window end-->
                            </div>
                        </gmap-info-window>
                        <GmapMarker
                                :clickable="true"
                                :key="index"
                                :label="m.infoText.label"
                                :position="m.position"
                                @click="toggleInfoWindow(m,i)"
                                v-for="(m, index) in markers"
                        />
                    </GmapMap>
                </div>
            </div>
        </div>
</template>

<script>
    import StoreList from '../components/StoreList'
    import Store from '../components/Store'
    import StarRating from 'vue-star-rating'

    export default {
        name: 'GoogleMap',
        components: {
            StoreList, StarRating, Store
        },
        data() {
            return {
                center: {lat: 19.0757994, lng: 72.8656201},
                zoom: 16,
                infoContent: {},
                infoWindowPos: null,
                infoWinOpen: false,
                currentMidx: null,
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                i: [],
                markers: [],
                place: null,
                radius: 100,
                storeId: []
            }
        },
        computed: {
            storedata() {
                return this.$store.state.storedata;
            },
            storelistshow() {
                return this.$store.state.storelistshow;
            },
            storeshow() {
                return this.$store.state.storeshow;
            }
        },
        methods: {
            toggleInfoWindow(marker, idx) {
                this.infoWindowPos = marker.position
                this.infoContent = marker.infoText
                if (this.currentMidx === idx) {
                    this.infoWinOpen = !this.infoWinOpen
                } else {
                    this.infoWinOpen = true
                    this.currentMidx = idx
                }
            },
            backToProducts() {
                this.$store.commit('goToMap', 0)
            }
        },
        created() {
            this.storedata.map(element => {
                this.markers.push(
                    {
                        position: {
                            lat: Number(element.lat),
                            lng: Number(element.lng)
                        },
                        infoText: {
                            name: element.name,
                            address: element.address,
                            city: element.city,
                            state: element.state,
                            zip: element.zip_code,
                            phone: element.phone_number,
                            label: element.id,
                            rating: element.rating,
                            reviews: element.reviews
                        }
                    }
                )
            })
        }
    }
</script>

<style scoped>
    body {
        font-family: 'Open Sans', sans-serif;
    }

    h1 {
        margin-bottom: 50px;
        text-align: center;
    }

    .info-window {
        width: 200px;
        height: auto;
    }

    /*Map size*/
    .vue-map-container {
        display: inline-block;
        width: 100%;
        height: 550px;
    }

    .search {
        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
        align-items: center;
        padding: 0 5px;
        color: #bababa;
        background-color: #f6f6f6;
        font-size: 15px;
    }

    .right-icons {
        position: absolute;
        right: 30px;
    }

    .footer {
        padding: 5px 0;
        margin-bottom: 5px;
        color: #397f95;
        font-size: 12px;
        border-top: 1px solid rgba(0, 0, 0, .125);
        border-bottom: 1px solid rgba(0, 0, 0, .125);
    }

    .card-body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding: 0px;
    }

    .card-body .name {
        font-size: 14px;
        font-weight: 600;
        color: #4765AB;
    }

    .card-body .rating {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        font-size: 10px;
        font-weight: bold;
        color: #232323;
    }

    .card-body .address {
        font-size: 10px;
        text-align: start
    }

    .card-body .distance {
        position: absolute;
        top: 5px;
        right: 2px;
        font-size: 12px;
        font-weight: bold;
        padding: 4px 6px;
        color: #800000;
        border: 1px solid #000;
    }

    .card-body .distance p {
        margin: 0px;
    }

    .card-body .box2 {
        font-size: 10px;
        padding: 1px 0;
        font-weight: bold;
    }

    .card-body .stats span {
        font-size: 10px;
        padding: 1px 0;
        color: #888;
    }

    .col-md-4, .col-md-8 {
        padding-right: 2px;
        padding-left: 2px;
    }
    .back-to-products{
        cursor: pointer;
    }
</style>