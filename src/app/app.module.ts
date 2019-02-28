import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularHalModule} from 'angular4-hal';
import {ExternalConfigurationService} from './external-configuration.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularHalModule.forRoot()

  ],
  providers: [
    {provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
