import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const RouterActions = createActionGroup({
  source: 'Router',
  events: {
    'Router Redirect To List Route': emptyProps(),
    
    
  }
});
