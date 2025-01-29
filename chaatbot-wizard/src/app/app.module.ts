import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IntentsListComponent } from './list/intents-list.component';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChatbotWizardComponent } from './chatbot-wizard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntentsTableComponent } from './list/table/intents-table.component';
import { MatTableModule } from '@angular/material/table';
import { IntentsSummaryComponent } from './summary/intents-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotWizardComponent,
    IntentsListComponent,
    IntentsTableComponent,
    IntentsSummaryComponent
  ],
  imports: [
    AppRoutingModule,

    // Angular
    RouterOutlet,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Material-web design
    MatListModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
