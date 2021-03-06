import { DashboardPatientComponent } from './patientNew/modules/dashboard-patient/dashboard-patient.component';
import { DefaultPatientComponent } from './patientNew/layouts/default-patient/default-patient.component';


import { MyaccountComponent } from './patientpages/myaccount/myaccount.component';
import { ConsultationhistoryComponent } from './patientpages/consultationhistory/consultationhistory.component';
import { MyprovidersComponent } from './patientpages/myproviders/myproviders.component';
import { HealthrecordsComponent } from './patientpages/healthrecords/healthrecords.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { pathToFileURL } from 'url';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AdminComponent } from './admin/admin.component';
import { PatientHomeComponent } from './patient-home-navibar/patient-home.component';
import { PatientDefaultPageComponent } from './patient-default-page/patient-default-page.component';
import { HealthprofileComponent } from './patientpages/healthprofile/healthprofile.component';
import { AppoinmentsComponent } from './patientpages/appoinments/appoinments.component';
import { WhatwetreatComponent } from './whatwetreat/whatwetreat.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { OurproviersComponent } from './ourproviers/ourproviers.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ViewDoctorComponent } from './manage-doctor/view-doctor/view-doctor.component';
import { AdminGraphComponent } from './admin/admin-graph/admin-graph.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';
import { AdminFeedbacksComponent } from './admin-feedbacks/admin-feedbacks.component';
import { AdminAnnouncementComponent } from './admin-announcement/admin-announcement.component';
import {AdminPaymentdetailsComponent} from './admin-paymentdetails/admin-paymentdetails.component';
import { UploaderComponent } from './patientpages/patientfiles/uploader/uploader.component';


  //doctor's component
import { DefaultDocComponent } from './doctor/layouts/default-doc/default-doc.component';
import { DashboardDocComponent } from './doctor/modules/dashboard-doc/dashboard-doc.component';
import { ContentDocComponent } from './doctor/modules/content-doc/content-doc.component';
import { UpdateAccountDocComponent } from './doctor/modules/update-account-doc/update-account-doc.component';
import { AppointmentDocComponent } from './doctor/modules/appointment-doc/appointment-doc.component';
import { AppointmentScheduleComponent } from './doctor/modules/appointment-schedule/appointment-schedule.component';
import { PatientsDocComponent } from './doctor/modules/patients-doc/patients-doc.component';
import { PaymentsDocComponent } from './doctor/modules/payments-doc/payments-doc.component';
import { AnnouncementsDocComponent } from './doctor/modules/announcements-doc/announcements-doc.component';

  //admin's new component
import { DashboardAdminComponent } from './admin02/modules/dashboard-admin/dashboard-admin.component';
import { DefaultAdminComponent } from './admin02/layouts/default-admin/default-admin.component';


import { VconferenceComponent } from './video/vconference/vconference.component';
import { MessagesComponent } from './patientpages/messages/messages.component';
import { HelpComponent } from './patientpages/help/help.component';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PayhereComponent } from './patientpages/payhere/payhere.component';
import { BookedComponent } from './patientpages/appoinments/booked/booked.component';
import { DocvComponent } from './video/docv/docv.component';
import { PrescriptionpdfComponent } from './patientpages/prescriptionpdf/prescriptionpdf.component';
import { PaymentSuccessComponent } from './patientpages/payment-success/payment-success.component';
import { PaymentFailedComponent } from './patientpages/payment-failed/payment-failed.component';
import { PrescriptionformComponent } from './doctor/modules/prescriptionform/prescriptionform.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  { path:'login', component: LoginComponentComponent },
  {path:'home',component:FirstPageComponent},
  {path:'joinnow', component:RegisterComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'howitworks', component:HowItWorksComponent},
  {path:'prescriptionpdf',component:PrescriptionpdfComponent},
  {path:'admin', component:AdminComponent,
  children:[
      { path:'manage-doctor', component: ManageDoctorComponent},
      { path:'manage-patient', component: ManagePatientComponent},
      { path:'admin-announcement', component: AdminAnnouncementComponent},
    ]
  },
  {path:'manage-doctor', component: ManageDoctorComponent},
  {path:'view-doctor', component: ViewDoctorComponent},
  {path:'admin-graph', component: AdminGraphComponent},
  {path:'manage-patient', component: ManagePatientComponent},
  {path:'admin-announcement', component: AdminAnnouncementComponent},
  {path:'admin-paymentdetails', component: AdminPaymentdetailsComponent},
  {path:'patientHome',component:PatientDefaultPageComponent},
  {path:'healthrecords',component:HealthrecordsComponent},
  {path:'myproviders',component:MyprovidersComponent},
  {path:'whatwetreat', component:WhatwetreatComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'ourproviders',component:OurproviersComponent},
  {path:'adminfeedbacks', component:AdminFeedbacksComponent},
  {path:'patientupload',component:UploaderComponent},
  {path:'payement',component:PayhereComponent},
  
  {path:'payment-completed',component:PaymentSuccessComponent},
  {path:'payment-failed',component:PaymentFailedComponent},

  //doctor's paths

  {path:'',component:DefaultDocComponent,
  children: [{ path :'docHome', component:DashboardDocComponent},
            { path : 'contentDoc' , component : ContentDocComponent},
            {path:'updateAccount',component:UpdateAccountDocComponent},
            {path:'appointments',component:AppointmentDocComponent},
            {path:'appointmentSchedule',component:AppointmentScheduleComponent},
            {path:'announcements',component:AnnouncementsDocComponent},
            {path:'payments',component:PaymentsDocComponent},
            {path:'patients',component:PatientsDocComponent}, 
            {path:'docvideo',component:DocvComponent},         
            ]
  },
  {path:'prescriptionform',component:PrescriptionformComponent},


  //admin's new paths

  {path:'',component:DefaultAdminComponent,
  children: [{ path :'adminHome', component:DashboardAdminComponent},
            { path : 'manageDoctor' , component : ManageDoctorComponent},
            {path:'managePatient',component:ManagePatientComponent},
            {path:'feedbacks',component:AdminFeedbacksComponent},
           
 ]
},

//patient's new paths

{path:'',component:DefaultPatientComponent,
  children: [{ path :'PHome', component:DashboardPatientComponent},
  {path:'patientHome2',component:PatientDefaultPageComponent},
  {path:'healthrecords2',component:HealthrecordsComponent},
  {path:'healthprofile2',component:HealthprofileComponent},
  {path:'appoinments',component:AppoinmentsComponent},
  {path:'book',component:BookedComponent},
  {path:'messages',component:MessagesComponent},
  {path:'healthprofile',component:HealthprofileComponent},
  {path:'help',component:HelpComponent},
  {path:'myaccount',component:MyaccountComponent},
  {path:'consultationhistory',component:ConsultationhistoryComponent},
  {path:'video',component:VconferenceComponent},


                      
            ]
  },


  {path:"**",component:PageNotFoundComponent},
  
  

  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PatientHomeComponent,
  PageNotFoundComponent,
  PatientDefaultPageComponent,
  LoginComponentComponent,
  HealthprofileComponent,
  AppoinmentsComponent
    
];
