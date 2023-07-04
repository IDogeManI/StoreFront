import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminSpaceComponent } from '../admin.space/admin.space.component';
import { UserSpaceComponent } from '../user.space/user.space.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminSpaceComponent },
  { path: '**', component: UserSpaceComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
