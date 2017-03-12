import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { LogoutComponent } from "./logout.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { authRouting } from './auth.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ],
    exports: [],
    declarations: [
        LogoutComponent,
        SignupComponent,
        SigninComponent,

    ],
    providers: [],
})
export class AuthModule { }
