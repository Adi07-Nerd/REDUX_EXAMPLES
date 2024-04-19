import { NgModule } from "@angular/core";
import { SecondChapterComponent } from "./second-chapter.component";
import { SecondChapterRouting } from "./second-chapter.routing";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [ SecondChapterComponent],
    imports:[ 
        SecondChapterRouting ,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        MatInputModule,
    ]
})
export class SecondChapterModule {}