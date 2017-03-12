import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageComponent } from "./message.component";
import { MessageListComponent } from "./message-list.component";
import { MessageInputComponent } from "./message-input.component";
import { MessagesComponent } from "./messages.component";
import { MessageService } from './message.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessagesComponent,
        MessageInputComponent
    ],
    providers: [MessageService],
})
export class MessageModule { }
