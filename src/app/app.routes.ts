import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { CalculatorComponent } from './calculator-component/calculator-component';
import { CardComponent } from './card/card';
import { CatalogComponent } from './catalog-component/catalog-component';
import { TodoComponent } from './todo-component/todo-component';
import { StudentComponent } from './student-component/student-component';
import { SearchComponent } from './search-component/search-component';
import { CatalogDetailComponent } from './catalog-detail-component/catalog-detail-component';
import { LoginForm } from './login-form/login-form';
import { PokemonList } from './pokemon-list/pokemon-list';
import { Posts } from './posts/posts';
import { PostCreate } from './post-create/post-create';
import { PostDetails } from './post-details/post-details';
import { EditPost } from './edit-post/edit-post';

export const routes: Routes = [
    { path: 'card', component: CardComponent },
    { path: 'calculator', component: CalculatorComponent},
    { path: 'catalog', component: CatalogComponent},
    { path: 'catalog-details/:productId', component: CatalogDetailComponent },
    { path: 'todo', component: TodoComponent},
    { path: 'students', component: StudentComponent},
    { path: 'students/:studentName', component: StudentComponent},
    { path: 'search', component: SearchComponent},
    { path: 'login', component: LoginForm },
    { path: 'pokemon', component: PokemonList },
    { path: 'posts/:id/edit', component: PostCreate },
    { path: 'posts/create', component: PostCreate },
    { path: 'posts/:id', component: PostDetails},
    { path: 'posts', component: Posts },
    { path: '', component: LandingPage},
    { path: '**', redirectTo: '' },
];
