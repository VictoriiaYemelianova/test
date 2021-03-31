import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: '', redirectTo: 'auth',  pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
