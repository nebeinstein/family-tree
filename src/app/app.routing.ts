import { Routes, RouterModule } from '@angular/router';

import { TreeComponent } from './tree/tree.component';
import { OtherTreeComponent } from './other-tree/other-tree.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';

const APP_ROUTES: Routes = [
	{ path: 'people/:id', component: PeopleComponent},
	{ path: 'people', component: PeopleComponent },
	{ path: 'otherTree', component: OtherTreeComponent },
	{ path: '', component: TreeComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);