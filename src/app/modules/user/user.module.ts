import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';

import { CommonService } from './services/common.service';



@NgModule({
  declarations: [UserComponent, ProfileComponent, AddressComponent],
  imports: [
    CommonModule
  ],
  exports:[ProfileComponent,UserComponent],
  providers:[CommonService],
})
export class UserModule { }
