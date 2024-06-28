import { Component, OnDestroy, OnInit } from '@angular/core';
import { Action, MyStore, State } from './store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'REDUX_EXAMPLES';
  currentState:State;
  $unsubState:Subscription;
  constructor(private readonly $state:MyStore){ }
  ngOnDestroy(): void {
    this.$unsubState.unsubscribe();
  }
  ngOnInit(): void {
    this.$unsubState = this.$state.getState().subscribe( (res)=> this.currentState = res);
    console.log(this.currentState);
    
  }


  addToCart(index:any){
    // data.addedToCart = !data.addedToCart
      const ADD_To_CART = (index:any) => {
        return <Action>{
          type:'ADD_TO_CART',
          payload: { index } 
      }
    };
    this.$state.dispatch(ADD_To_CART(index))
  }
}
