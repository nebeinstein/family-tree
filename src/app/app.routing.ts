import { Routes, RouterModule } from '@angular/router';

import { TreeComponent } from './tree/tree.component';
import { OtherTreeComponent } from './other-tree/other-tree.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';

const APP_ROUTES: Routes = [
	{ path: '', component: TreeComponent },
	{ path: 'otherTree', component: OtherTreeComponent },
	{ path: 'people/:id/:name', component: PersonDetailComponent},
	{ path: 'people', component: PeopleComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);