import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UserDetailComponent
  ],
  providers: [UserService]
})
export class UsersModule { }
