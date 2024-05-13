import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecondChapterComponent } from "./second-chapter.component";

const secondChaptRout:Routes = [
    { path: '' ,component: SecondChapterComponent ,
        children:[
            { path: 'create', loadChildren: () => import('../create/create.module').then(m => m.CreateModule) },
            { path: 'list', loadChildren: () => import('../list/list.module').then(m => m.ListModule) },
            { path: 'edit/:bookmarkId', loadChildren: () => import('../edit/edit.module').then(m => m.EditModule) }
        ]
    },
]
@NgModule({
    imports:[ RouterModule.forChild(secondChaptRout)],
    exports:[ RouterModule ]
})
export class SecondChapterRouting { }