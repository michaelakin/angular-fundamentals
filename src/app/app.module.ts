import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyPipePipe } from './my-pipe.pipe';
import { HttpClientModule} from '@angular/common/http';
import { ServiceNameService } from './service-name.service';
import { GitSearchService } from './git-service.service';
import { GitSearchComponent } from './git-search/git-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MyPipePipe,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
