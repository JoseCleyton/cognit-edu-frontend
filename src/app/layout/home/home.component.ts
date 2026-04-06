import { Component } from '@angular/core';
import { StudentComponent } from '../../features/student/student.component';
import { ManagerComponent } from '../../features/manager/manager.component';
import { TeacherComponent } from '../../features/teacher/teacher.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ManagerComponent, TeacherComponent, StudentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  profile = 'teacher';
}
