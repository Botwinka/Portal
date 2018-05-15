import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {DogRegisterComponent} from "./dog-register/dog-register.component";
import {SidebarModule} from "./sidebar/sidebar.module";

@NgModule({
  declarations: [
    AppComponent,
    DogRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
