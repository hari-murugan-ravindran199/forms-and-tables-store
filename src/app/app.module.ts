import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component'; // Task 2) Use Store
import { EmployeeFormEntityComponent } from './components/employee-form-entity/employee-form-entity.component'; // Task 3) Use Entity
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
//import { employeeReducer } from './store/employee-form/employee-form.reducer'; // Task 2) Use Store.
import { employeeReducer } from './store/employee-form-entity/employee-form-entity.reducer'; // Task 3) Use Entity.
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFormEntityService } from '../app/store/employee-form-entity/employee-from-entity.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeFormEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    StoreModule.forRoot({employee: employeeReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [EmployeeFormEntityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
