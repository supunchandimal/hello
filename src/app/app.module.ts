import { AccountService } from './patientpages/services/account.service';
import { ServiceService } from './patientpages/services/service.service';
import { DefaultDocModule } from './doctor/layouts/default-doc/default-doc.module';
import { DefaultAdminModule } from './admin02/layouts/default-admin/default-admin.module';

import { AuthService } from './auth/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainNavigationBarComponent } from './main-navigation-bar/main-navigation-bar.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PagemenuComponent } from './patientpages/pagemenu/pagemenu.component';
import { HealthrecordsComponent } from './patientpages/healthrecords/healthrecords.component';
import { MyprovidersComponent } from './patientpages/myproviders/myproviders.component';
import { ConsultationhistoryComponent } from './patientpages/consultationhistory/consultationhistory.component';
import { AllergierecordsComponent } from './patientpages/allergierecords/allergierecords.component';
import { MedicationComponent } from './patientpages/medication/medication.component';
import { UploadrecordsComponent } from './patientpages/uploadrecords/uploadrecords.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { ImageCropperModule,} from 'ngx-image-cropper';


import { WhatwetreatComponent } from './whatwetreat/whatwetreat.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { OurproviersComponent } from './ourproviers/ourproviers.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';

import { AdminFeedbacksComponent } from './admin-feedbacks/admin-feedbacks.component';
import { DropzoneDirective } from './patientpages/patientfiles/dropzone.directive';
import { UploaderComponent } from './patientpages/patientfiles/uploader/uploader.component';
import { UploadTaskComponent } from './patientpages/patientfiles/upload-task/upload-task.component';

import { BehaviorhistoryComponent } from './patientpages/behaviorhistory/behaviorhistory.component';
import { FamilyhistoryComponent } from './patientpages/familyhistory/familyhistory.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TextFieldModule} from '@angular/cdk/text-field';

import { AdminComponent } from './admin/admin.component';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ManageDoctorService } from 'src/services/shared/manage-doctor.service';
import { MyaccountComponent } from './patientpages/myaccount/myaccount.component';
import { PpicComponent } from './patientpages/myaccount/ppic/ppic.component';
import { UploadererppicComponent } from './patientpages/myaccount/uploadererppic/uploadererppic.component';
import { AdminAnnouncementComponent } from './admin-announcement/admin-announcement.component';
import { PasswordComponent } from './patientpages/myaccount/password/password.component';
import { PpicService } from './patientpages/services/ppic.service';

import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    MainFooterComponent,
    MainNavigationBarComponent,
    LoginComponentComponent,
    RegisterComponent,
    ContactusComponent,
    HowItWorksComponent,
    routingComponents,
    PagemenuComponent,
    HealthrecordsComponent,
    MyprovidersComponent,
    ConsultationhistoryComponent,
    AllergierecordsComponent,
    MedicationComponent,
    UploadrecordsComponent,
    AdminComponent,
    WhatwetreatComponent,
    ForgotpassComponent,
    OurproviersComponent,
    ManageDoctorComponent,
    ManagePatientComponent,
    
    AdminFeedbacksComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    BehaviorhistoryComponent,
    FamilyhistoryComponent,
    MyaccountComponent,
    PpicComponent,
    UploadererppicComponent,

    AdminAnnouncementComponent,

    PasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,"hello"),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule, BrowserAnimationsModule,
    DefaultDocModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatRadioModule,
    MatSliderModule,
    MaterialModule,
    TextFieldModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    ImageCropperModule,
    DefaultAdminModule,
    MatDatepickerModule,
    MatNativeDateModule ,
  ],
  providers: [
    AuthService,
    ServiceService ,
    ManageDoctorService,
    AccountService,
    PpicService,
    MatDatepickerModule

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
