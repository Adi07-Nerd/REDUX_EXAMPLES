import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class MyStore{
    private currentState:State;
    private $state:BehaviorSubject<State>
    private initialState = {
        products: [
            { name:'Laptop Air',price: 799,addedToCart: false},
            { name:'Laptop Pro',price: 699,addedToCart: false},
            { name:'Laptop Mini',price: 299,addedToCart: false},
        ]
    }

    constructor(){
        this.currentState = this.initialState;
    }

    public getState():BehaviorSubject<State>{
        // return this.currentState
        this.$state = new BehaviorSubject(this.currentState);
        return this.$state
    }

    public dispatch(action:Action){
        this.currentState = this.reducer(this.currentState,action);
        this.$state.next(this.currentState);
        console.log(this.currentState);
    }

    private reducer(state:State,action:Action):State{
        switch(action.type){
            case 'ADD_TO_CART':
                let updatedProduct:product[] = state.products.map((product:product,index:number) => {
                    if(index == action.payload.index){
                        return Object.assign({},product,{addedToCart:true});
                    }
                    return product;
                });
                return Object.assign({},state,{ products: updatedProduct});

            default:
                console.log(action);
                state;
        }
        return state;
    }
}

export interface State {
    products:product[]
}

interface product {
    name: string,
    price: number,
    addedToCart:boolean
}

export interface Action{
    type:string,
    payload:Payload
}

interface Payload{
    index?:number
}