import { createStore } from "vuex";

export default createStore({
    state: {
        serviceSelect:'',
        modalActive: '',
        modalNext:'',
        modalPrev:'',
        cartItems: {
            service : '',
            date: '',
            mamasafi: '',
            units: 1,
            location: '',
        }
    },
    mutations:{ 
        setActiveModal(state, modal){
            state.modalActive = modal;
        },
        setNextModal(state, modal){
            state.modalNext = modal;
        },
        setPrevModal(state, modal){
            state.modalPrev = modal;
        },
        serviceSelect(state, service){
            state.serviceSelect=service
        },
        increaseItemCount(state, maximum){
            if (state.cartItems.units >= maximum){
                state.cartItems.units=maximum
            }else{
            state.cartItems.units++
            }
        },
        decreaseItemCount(state){
            if (state.cartItems.units <= 1){
                state.cartItems.units=1
            }else{
                state.cartItems.units--
            }
        },
        addServiceTocart(state, payload){
            state.cartItems.service=payload
        },
        selectMamasafi(state, payload){
            state.cartItems.mamasafi=payload
        },
        setDate(state, date){
            state.cartItems.date=date
        },
        
    },
    actions:{},
    modules:{}
})