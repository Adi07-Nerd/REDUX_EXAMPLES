import { NgModule } from "@angular/core";
import { SecondChapterComponent } from "./second-chapter.component";
import { SecondChapterRouting } from "./second-chapter.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { BookmarkEffects } from "../store/bookmark/bookmark.effects";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
    declarations: [ SecondChapterComponent],
    imports:[ 
        RouterModule,
        CommonModule,
        SecondChapterRouting ,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatInputModule,
        EffectsModule.forFeature([BookmarkEffects]),
    ]
})
export class SecondChapterModule {}