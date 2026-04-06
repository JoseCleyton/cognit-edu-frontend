import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
// Importe o módulo do Chart.js conforme sua configuração (exemplo: NgChartsModule)

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    BaseChartDirective
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  // Dados do gráfico radar
  radarChartLabels: string[] = ['Álgebra', 'Cálculo', 'Lógica', 'Geometria', 'Interpretação'];
  radarChartData = {
    labels: this.radarChartLabels,
    datasets: [
      {
        label: 'Meu Nível Atual',
        data: [80, 60, 70, 50, 90],
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        borderColor: '#1976d2',
        pointBackgroundColor: '#1976d2',
      },
      {
        label: 'Objetivo da Turma',
        data: [90, 80, 80, 70, 95],
        backgroundColor: 'rgba(255, 179, 0, 0.2)',
        borderColor: '#ffb300',
        pointBackgroundColor: '#ffb300',
      }
    ]
  };
  radarChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { stepSize: 20 }
      }
    }
  };

  // Badges (exemplo)
  badges = [
    { icon: 'calculate', earned: true },
    { icon: 'emoji_objects', earned: true },
    { icon: 'lightbulb', earned: true },
    { icon: 'rocket_launch', earned: true },
    { icon: 'menu_book', earned: true },
    { icon: 'rocket_launch', earned: false },
    { icon: 'menu_book', earned: false },
    { icon: 'lock', earned: false },
    { icon: 'lock', earned: false }
  ];
}