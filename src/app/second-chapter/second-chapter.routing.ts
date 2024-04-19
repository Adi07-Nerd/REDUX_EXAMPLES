import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecondChapterComponent } from "./second-chapter.component";

const secondChaptRout:Routes = [
    { path: '' ,component: SecondChapterComponent },
    { path:'list', component: SecondChapterComponent }
]
@NgModule({
    imports:[ RouterModule.forChild(secondChaptRout)],
    exports:[ RouterModule ]
})
export class SecondChapterRouting { }