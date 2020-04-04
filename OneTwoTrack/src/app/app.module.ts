import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import {ScrollingModule} from '@angular/cdk/scrolling';




import { SearchPageComponent } from './search-page/search-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationIndividualComponent } from './registration-individual/registration-individual.component';
import { RegistrationCorporateComponent } from './registration-corporate/registration-corporate.component';
import { LoginComponent } from './login/login.component';
import { DataSheetComponent } from './data-sheet/data-sheet.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InitialRecComponent } from './initial-rec/initial-rec.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    MessagePageComponent,
    DashboardComponent,
    RegistrationIndividualComponent,
    RegistrationCorporateComponent,
    LoginComponent,
    DataSheetComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    InitialRecComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    CdkStepperModule,
    MatStepperModule,
    ScrollingModule,

    FormsModule
  ],
  providers: [],
  entryComponents: [
    InitialRecComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
