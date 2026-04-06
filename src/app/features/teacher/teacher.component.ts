import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BaseChartDirective } from 'ng2-charts';
// Importe o módulo do Chart.js conforme sua configuração (exemplo: NgChartsModule)

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, BaseChartDirective],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss',
})
export class TeacherComponent {
  // Dados do gráfico de barras
  barChartLabels: string[] = [
    'Equações de 2º Grau',
    'Equações de 1º Grau',
    'Sistemas de Equações',
  ];
  barChartData = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Alunos',
        data: [20, 35, 55],
        backgroundColor: ['#e53935', '#ffb300', '#43a047'],
      },
    ],
  };
  barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    indexAxis: 'y' as const,
    scales: {
      x: { beginAtZero: true, max: 60 },
    },
  };

  // Lista de alunos em destaque
  students = [
    { name: 'Ana S.', score: 5.0, avatar: 'assets/aluno1.jpg' },
    { name: 'Bruno R.', score: 4.5, avatar: 'assets/aluno2.jpg' },
    { name: 'Carlos M.', score: 5.5, avatar: 'assets/aluno3.jpg' },
    { name: 'Ana S.', score: 5.0, avatar: 'assets/aluno1.jpg' },
    { name: 'Liano H.', score: 4.5, avatar: 'assets/aluno4.jpg' },
  ];
}
