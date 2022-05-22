import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoryGamePageRoutingModule } from './memory-game-routing.module';

import { MemoryGamePage } from './memory-game.page';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalResultComponent } from './modal-result/modal-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoryGamePageRoutingModule
  ],
  declarations: [MemoryGamePage, ModalConfirmComponent, ModalResultComponent]
})
export class MemoryGamePageModule {}
