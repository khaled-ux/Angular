
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Authentification/login/log-in/log-in.component';
import { RegisterComponent } from './Authentification/register/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoardAdminComponent } from './board-admin/composant/board/board-admin.component';
import { UserComponent } from './User/user/user.component';
import { ProfileComponent } from './board-admin/composant/profile/profile.component';
import { StepperComponent } from './board-admin/composant/stepper/stepper.component';
import { SidenavListComponent } from './board-admin/composant/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './board-admin/composant/header/header.component';
import { CoordonneComponent } from './board-admin/composant/coordonne/coordonne.component';
import { ThemeComponent } from './board-admin/composant/theme/theme.component';
import { PageComponent } from './board-admin/composant/page/page.component';
import { TypeComponent } from './board-admin/composant/type/type.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddComponent } from './board-admin/composant/coordonne/add/add.component';
import { UpdateComponent } from './board-admin/composant/coordonne/update/update.component';
import { MatDialogModule} from '@angular/material/dialog';
import { UpdateTypeComponent } from './board-admin/composant/type/update-type/update-type.component';
import { AddTypeComponent } from './board-admin/composant/type/add-type/add-type.component';
import { AddThemeComponent } from './board-admin/composant/theme/add-theme/add-theme.component';
import { UpdateThemeComponent } from './board-admin/composant/theme/update-theme/update-theme.component';
import { UpdatePageComponent } from './board-admin/composant/page/update-page/update-page.component';
import { AddPageComponent } from './board-admin/composant/page/add-page/add-page.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UploadComponent } from './board-admin/composant/file/upload/upload.component';
import { UploadsComponent } from './board-admin/composant/file/uploads/uploads.component';
import { TarifsComponent } from './board-admin/composant/tarifs/tarifs.component';
import { StartedComponent } from './board-admin/composant/started/started.component';


import { AppRestaurantComponent } from './WebSite/site-vitrine/Restaurant/app-restaurant/app-restaurant.component';
import { AppGymComponent } from './WebSite/site-vitrine/GYM/app-gym/app-gym.component';
import { AppShopComponent } from './WebSite/site-vitrine/Shop/app-shop/app-shop.component';
import { GoogleMapsModule } from '@angular/google-maps'



import { EditableModule } from '@ngneat/edit-in-place';

import { NgDragDropModule } from 'ng-drag-drop';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { EditorComponent } from './dragAndDrop/editor/editor.component';
import { BodyComponent } from './dragAndDrop/body/body.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    BoardAdminComponent,
    UserComponent,
    ProfileComponent,
    StepperComponent,
    SidenavListComponent,
    HeaderComponent,
    CoordonneComponent,
    ThemeComponent,
    PageComponent,
    TypeComponent,
    AddComponent,
    UpdateComponent,
    UpdateTypeComponent,
    AddTypeComponent,
    AddThemeComponent,
    UpdateThemeComponent,
    UpdatePageComponent,
    AddPageComponent,
    AddUserComponent,
    UpdateUserComponent,
    UploadComponent,
    UploadsComponent,
    TarifsComponent,
    StartedComponent,
    AppRestaurantComponent,
    AppGymComponent,
    AppShopComponent,
    EditorComponent,
    BodyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatDialogModule,
    EditableModule,
    AngularEditorModule,
    NgDragDropModule.forRoot() ,
    GoogleMapsModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
