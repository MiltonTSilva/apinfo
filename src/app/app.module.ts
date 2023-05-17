import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compontentes/header/header.component';
import { SidebarDireitoComponent } from './compontentes/sidebardireito/sidebardireito.component';
import { SidebarEsquerdoComponent } from './compontentes/sidebaresquerdo/sidebaresquerdo.component';
import { ContentComponent } from './compontentes/content/content.component';
import { FooterComponent } from './compontentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarDireitoComponent,
    SidebarEsquerdoComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
