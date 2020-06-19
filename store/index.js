export const state = () => ({
    products: [
        {
            id: '1',
            url: 'https://www.stevesrealfood.com/wp-content/uploads/Beef-Box-and-Bag.jpg',
            alt: 'Beef-Box-and-Bag',
            label: 'Beef Box and Bag',
            selected: true
        },
        {
            id: '2',
            url: 'https://www.stevesrealfood.com/wp-content/uploads/Chicken-Box-and-Bag.jpg',
            alt: 'Chicken-Box-and-Bag',
            label: 'Chicken Box and Bag',
            selected: false
        }, {
            id: '3',
            url: 'https://www.stevesrealfood.com/wp-content/uploads/Turkey-Box-and-Bag.jpg',
            alt: 'Turkey-Box-and-Bag',
            label: 'Turkey Box and Bag',
            selected: false
        }, {
            id: '4',
            url: 'https://stevesrealfood.wpengine.com/wp-content/uploads/quest1.jpeg',
            alt: 'quest1',
            label: 'Quest 1',
            selected: false
        }, {
            id: '5',
            url: 'https://stevesrealfood.wpengine.com/wp-content/uploads/Quest2.jpg',
            alt: 'Quest3',
            label: 'Quest 3',
            selected: false
        }, {
            id: '6',
            url: 'https://stevesrealfood.wpengine.com/wp-content/uploads/Quest3.jpg',
            alt: 'Quest3',
            label: 'Quest 3',
            selected: false
        }, {
            id: '7',
            url: 'https://www.stevesrealfood.com/wp-content/uploads/FreezeDriedPork-No-Refelxtion.jpg',
            alt: 'FreezeDriedPork',
            label: 'Freeze Dried Pork',
            selected: false
        }, {
            id: '8',
            url: 'https://www.stevesrealfood.com/wp-content/uploads/FreezeDriedTurducken-No-Refelxtion.jpg',
            alt: 'FreezeDriedTurducken',
            label: 'Freeze Dried Turducken',
            selected: false
        },
        {
            id: '9',
            url: 'https://www.stevesrealfood.com/wp-content/uploads/FreezeDriedckn-No-Refelxtion.jpg',
            alt: 'FreezeDriedckn',
            label: 'Freeze Driedckn',
            selected: false
        }
    ],
    storedata: [
        {
            "id": "1",
            "rating": 3.9,
            "reviews": "490",
            "name": "Mahesh Fine Dine",
            "address": "Govind Sagar,CST Road",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400098",
            "country": "IN",
            "lat": "19.0776224",
            "lng": "72.8654644",
            "phone_number": "02226652084"
        },
        {
            "id": "2",
            "rating": 4.1,
            "reviews": "799",
            "name": "The Camp",
            "address": "Anne's Premises Co-Op Housing Society,Kalina",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400029",
            "country": "IN",
            "lat": "19.0774706",
            "lng": "72.8655724",
            "phone_number": "02226660092"
        },
        {
            "id": "3",
            "rating": 3.9,
            "reviews": "321",
            "name": "Rite on Coal",
            "address": "Air India Colony Road, Kalina",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400029",
            "country": "IN",
            "lat": "19.0777627",
            "lng": "72.8616071",
            "phone_number": "989-354-8780"
        },
        {
            "id": "4",
            "rating": 4.1,
            "reviews": "36",
            "name": "Oven Hot",
            "address": "Anne`s Apartment, Kalina Kurla Road",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400029",
            "country": "IN",
            "lat": "19.0776033",
            "lng": "72.8670484",
            "phone_number": "9892325062"
        },
        {
            "id": "5",
            "rating": 3.4,
            "reviews": "1295",
            "name": "Geeta Vihar",
            "address": "Kalina - Kurla Road",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400029",
            "country": "IN",
            "lat": "19.0779611",
            "lng": "72.8616929",
            "phone_number": "02226664182"
        },
        {
            "id": "6",
            "rating": 3.9,
            "reviews": "54",
            "name": "Monginis Cake Shop",
            "address": "Air India Road, Kalina",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400029",
            "country": "IN",
            "lat": "19.0778901",
            "lng": "72.8640633",
            "phone_number": "02226663112"
        },
        {
            "id": "7",
            "rating": 3.7,
            "reviews": "15",
            "name": "Mastan",
            "address": "Kalina Kurla Road, Kalina",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400029",
            "country": "IN",
            "lat": "19.0774642",
            "lng": "72.8636381",
            "phone_number": "02226661322"
        },
        {
            "id": "8",
            "rating": 3.7,
            "reviews": "216",
            "name": "Smokin Joe's",
            "address": "Air India Colony Road, Kalina",
            "city": "Mumbai",
            "state": "MH",
            "zip_code": "400029",
            "country": "IN",
            "lat": "19.0782747",
            "lng": "72.8658061",
            "phone_number": "02226662137"
        },
    ],
    productlistshow: true,
    googlemapshow: false,
    storelistshow: true,
    storeshow: false,
    selectedStoreId: 0
})
export const mutations = {
    changeProductSelection(state, id) {
        state.products = state.products.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    selected: !product.selected
                }
            } else {
                return {
                    ...product
                }
            }
        })
    },
    goToMap(state) {
        state.productlistshow = !state.productlistshow;
        state.googlemapshow = !state.googlemapshow;
        state.storelistshow = true;
        state.storeshow = false;
    },
    storeList(state) {
        state.storelistshow = !state.storelistshow;
        state.storeshow = !state.storeshow;
    },
    goToThisStore(state, id) {
        state.storedata.forEach(
            store => {
                if (store.id == id) {
                    state.selectedStoreId = id;
                    mutations.storeList(state);
                }
            }
        )
    },
    nextStore(state) {
        if (state.selectedStoreId > 0 && state.selectedStoreId < state.storedata.length) {
            state.selectedStoreId++;
        }
    },
    previousStore(state) {
        if (state.selectedStoreId >= 2 && state.selectedStoreId <= state.storedata.length) {
            state.selectedStoreId--;
        }
    }
}

export const getters = {
    getSelectedProducts: state => {
        let selectedproducts = state.products.filter(product => {
            return product.selected === true;
        });
        return selectedproducts;
    },
    getselectedStore: state => {
        let selectedstore = state.storedata.filter(store => {
            if (store.id == state.selectedStoreId) {
                return store
            }
        });
        return selectedstore;
    }
}