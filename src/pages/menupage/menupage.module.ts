import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenupagePage } from './menupage';

@NgModule({
  declarations: [
    MenupagePage,
  ],
  imports: [
    IonicPageModule.forChild(MenupagePage),
  ],
})
export class MenupagePageModule {}
