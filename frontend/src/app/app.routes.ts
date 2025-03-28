import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { ViewProjectComponent } from './pages/projects/view-project/view-project.component';
import { ViewTaskComponent } from './pages/tasks/view-task/view-task.component';
import { CreateProjectComponent } from './pages/projects/create-project/create-project.component';
import { EditTaskComponent } from './pages/tasks/edit-task/edit-task.component';
import { EditProjectComponent } from './pages/projects/edit-project/edit-project.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login - Worksync',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    title: 'Projetos - Worksync',
  },
  {
    path: 'projects/:projectId',
    component: ViewProjectComponent,
    canActivate: [AuthGuard],
    title: 'Projeto - Worksync',
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuard],
    title: 'Tarefas - Worksync',
  },
  {
    path: 'tasks/:taskId',
    component: ViewTaskComponent,
    canActivate: [AuthGuard],
    title: 'Tarefa - Worksync',
  },
  { path: 'edit-project/:id', component: EditProjectComponent, canActivate: [AuthGuard], title: 'Editar Projeto - Worksync' },
  {
    path: 'tasks/edit/:taskId',
    component: EditTaskComponent,
    canActivate: [AuthGuard],
    title: 'Editar Tarefa - Worksync',
  },
  {
    path: 'create-task',
    component: CreateTaskComponent,
    canActivate: [AuthGuard],
    title: 'Criar Tarefa - Worksync'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Cadastrar - Worksync'
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
    canActivate: [AuthGuard],
    title: 'Criar projeto - Worksync'
  },
  {
    path: '**',
    redirectTo: '/login'
  },
];