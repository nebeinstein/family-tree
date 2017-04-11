import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TreeComponent } from './tree/tree.component';
import { OtherTreeComponent } from './other-tree/other-tree.component';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PersonItemComponent } from './people/people-list/person-item/person-item.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';

import { PeopleService } from './people/people.service';

import { Routing } from './app.routing';
import { MyTreeComponent } from './my-tree/my-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeComponent,
    OtherTreeComponent,
    PeopleComponent,
    PeopleListComponent,
    PersonItemComponent,
    PersonDetailComponent,
    MyTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
