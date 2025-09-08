import { Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/pages/dashboard';
import { NoteComponent } from '../features/note/pages/note';
import { NotFoundComponent } from '../features/notfound/pages/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'note',
        component: NoteComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];