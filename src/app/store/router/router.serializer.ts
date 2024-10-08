import { Params, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";

/**
 * Trimmed Down Version of Complex Default Router State.
 */
export interface RouterState{
    url:string,
    params:Params,
    queryParams:Params
}

export class CustomRouterSerializer implements RouterStateSerializer{
    serialize(routerState: RouterStateSnapshot): RouterState {
        let route = routerState.root;
        while(route.firstChild){
            route = route.firstChild;
        }

        const { url , root:{queryParams}} = routerState;
        const { params } = route;
        return { url , params , queryParams};
    }
    
}