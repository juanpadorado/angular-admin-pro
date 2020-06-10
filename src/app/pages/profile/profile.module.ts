import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../../pipes/pipes.module";


@NgModule({
  declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule,
        PipesModule
    ]
})
export class ProfileModule { }
