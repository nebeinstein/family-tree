import { Routes, RouterModule } from '@angular/router';

import { TreeComponent } from './tree/tree.component';
import { OtherTreeComponent } from './other-tree/other-tree.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';

const APP_ROUTES: Routes = [
	{ path: 'otherTree', component: OtherTreeComponent },
	{ path: 'people/:id/:name', component: PersonDetailComponent},
	{ path: 'people', component: PeopleComponent },
	{ path: '', component: TreeComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);