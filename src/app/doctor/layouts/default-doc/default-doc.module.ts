import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultDocComponent } from './default-doc.component';
import { DashboardDocComponent } from '../../modules/dashboard-doc/dashboard-doc.component';
import { ContentDocComponent } from './../../modules/content-doc/content-doc.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UpdateAccountDocComponent } from './../../modules/update-account-doc/update-account-doc.component';
import {MatInputModule} from '@angular/material/input';
import { AppointmentDocComponent } from './../../modules/appointment-doc/appointment-doc.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpdateProfileService } from './../../services/update-profile.service';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppointmentScheduleComponent } from './../../modules/appointment-schedule/appointment-schedule.component';
import { PatientsDocComponent } from './../../modules/patients-doc/patients-doc.component';
import { PaymentsDocComponent } from './../../modules/payments-doc/payments-doc.component';
import { AnnouncementsDocComponent } from './../../modules/announcements-doc/announcements-doc.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    DefaultDocComponent,
    DashboardDocComponent,
    ContentDocComponent,
    UpdateAccountDocComponent,
    AppointmentDocComponent,
    AppointmentScheduleComponent,
    AnnouncementsDocComponent,
    PaymentsDocComponent,
    PatientsDocComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTabsModule,
    MatStepperModule,
    MatIconModule
    
  ],
  providers: [UpdateProfileService]

})
export class DefaultDocModule { }
