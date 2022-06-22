import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authentification/auth/auth.guard';
import { LogInComponent } from './Authentification/login/log-in/log-in.component';
import { RegisterComponent } from './Authentification/register/register/register.component';
import { BoardAdminComponent } from './board-admin/composant/board/board-admin.component';
import { AddComponent } from './board-admin/composant/coordonne/add/add.component';
import { CoordonneComponent } from './board-admin/composant/coordonne/coordonne.component';
import { UploadComponent } from './board-admin/composant/file/upload/upload.component';
import { UploadsComponent } from './board-admin/composant/file/uploads/uploads.component';
import { AddPageComponent } from './board-admin/composant/page/add-page/add-page.component';
import { PageComponent } from './board-admin/composant/page/page.component';
import { UpdatePageComponent } from './board-admin/composant/page/update-page/update-page.component';
import { StartedComponent } from './board-admin/composant/started/started.component';
import { StepperComponent } from './board-admin/composant/stepper/stepper.component';
import { TarifsComponent } from './board-admin/composant/tarifs/tarifs.component';
import { AddThemeComponent } from './board-admin/composant/theme/add-theme/add-theme.component';
import { ThemeComponent } from './board-admin/composant/theme/theme.component';
import { UpdateThemeComponent } from './board-admin/composant/theme/update-theme/update-theme.component';
import { AddTypeComponent } from './board-admin/composant/type/add-type/add-type.component';
import { TypeComponent } from './board-admin/composant/type/type.component';
import { UpdateTypeComponent } from './board-admin/composant/type/update-type/update-type.component';
import { SidenavListComponent } from './board-admin/composant/sidenav-list/sidenav-list.component';
import { ProfileComponent } from './board-admin/composant/profile/profile.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UserComponent } from './User/user/user.component';
import { AppRestaurantComponent } from './WebSite/site-vitrine/Restaurant/app-restaurant/app-restaurant.component';
import { AppGymComponent } from './WebSite/site-vitrine/GYM/app-gym/app-gym.component';
import { AppShopComponent } from './WebSite/site-vitrine/Shop/app-shop/app-shop.component';

import { PageNotFoundComponent } from './board-admin/composant/page-not-found/page-not-found.component';

import { EditorComponent } from './dragAndDrop/editor/editor.component';
import { BodyComponent } from './dragAndDrop/body/body.component';



const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'login' },



  { path:'login', component: LogInComponent },
  { path:'register', component: RegisterComponent },





  { path:'user', component: UserComponent,canActivate:[ AuthGuard ] },
  { path:'board-admin', component: BoardAdminComponent ,canActivate:[ AuthGuard ] },
  { path:'profile', component: ProfileComponent ,canActivate:[ AuthGuard ]},
  { path:'stepper', component: StepperComponent,canActivate:[ AuthGuard ]},
  { path:'SidenavList', component: SidenavListComponent,canActivate:[ AuthGuard ]},
  { path:'coordonne', component: CoordonneComponent,canActivate:[ AuthGuard ]},
  { path:'type', component: TypeComponent,canActivate:[ AuthGuard ]},
  { path:'theme', component: ThemeComponent,canActivate:[ AuthGuard ]},
  { path:'page', component: PageComponent,canActivate:[ AuthGuard ]},

  { path:'coordonne/add', component: AddComponent,canActivate:[ AuthGuard ]},
  { path:'type/addType', component: AddTypeComponent,canActivate:[ AuthGuard ]},
  { path:'theme/addTheme', component: AddThemeComponent,canActivate:[ AuthGuard ]},
  { path:'page/addPage', component: AddPageComponent,canActivate:[ AuthGuard ]},
  { path:'user/addUser', component: AddUserComponent,canActivate:[ AuthGuard ]},
  { path:'file', component: UploadComponent,canActivate:[ AuthGuard ]},
  { path:'tarifs', component: TarifsComponent,canActivate:[ AuthGuard ]},
  { path:'files', component: UploadsComponent,canActivate:[ AuthGuard ]},
  { path:'started', component: StartedComponent,canActivate:[ AuthGuard ]},
  { path:'notfound', component: PageNotFoundComponent,canActivate:[ AuthGuard ]},


  { path:'gym', component:AppGymComponent,canActivate:[ AuthGuard ]},
  { path:'restaurant', component: AppRestaurantComponent,canActivate:[ AuthGuard ]},
  { path:'shop', component: AppShopComponent,canActivate:[ AuthGuard ]},




  { path:'editor', component: EditorComponent,canActivate:[ AuthGuard ]},
  { path:'body', component: BodyComponent,canActivate:[ AuthGuard ]},




  { path:'type/update/:id', component:UpdateTypeComponent,canActivate:[ AuthGuard ]},
  { path:'user/update/:id', component:UpdateUserComponent,canActivate:[ AuthGuard ]},
  { path:'theme/update/:id', component:UpdateThemeComponent,canActivate:[ AuthGuard ]},
  { path:'page/update/:id', component:UpdatePageComponent,canActivate:[ AuthGuard ]},
  { path:'coordonne/:id', component:CoordonneComponent,canActivate:[ AuthGuard ]},
  { path:'file/:id', component: UploadComponent,canActivate:[ AuthGuard ]},

  { path: '**',component: PageNotFoundComponent, canActivate:[ AuthGuard ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
