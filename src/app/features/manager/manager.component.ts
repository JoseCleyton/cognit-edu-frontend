import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
    MatCard,
    BaseChartDirective,
    MatFormFieldModule,
    MatSelectModule,
    // MatIcon,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss',
})
export class ManagerComponent {
  alertColumns = ['school', 'reason', 'status', 'action'];
  alerts = [
    { school: 'EREM Severino Farias', reason: 'Queda Abrupta em Matemática' },
    { school: 'Escola Est. de Passira', reason: 'Queda Abrupta em Matemática' },
    { school: 'Escola Est. de Passira', reason: 'Queda Abrupta em Matemática' },
  ];

  barChartLabels = [
    'EREM Severino Farias',
    'EREM Est. Sileerica',
    'EREM Sertão do Araripe',
    'EREM Est. de Pinssa',
    'EREM Est. de Reitta',
    'Escola Est. de Tornea',
    'EREM Severino Farias',
    'Escola Est. de Passira',
    'EREM Est. de Passira',
  ];
  barChartData = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Média IDEPE',
        data: [6, 5.8, 5.5, 5.2, 5, 4.8, 4.5, 4.2, 4],
        backgroundColor: [
          '#388e3c',
          '#43a047',
          '#43a047',
          '#ffb300',
          '#ffb300',
          '#e53935',
          '#e53935',
          '#e53935',
          '#e53935',
        ],
      },
    ],
  };
  barChartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    indexAxis: 'y' as const,
    scales: { x: { beginAtZero: true, max: 6.5 } },
  };

  lineChartLabels = [
    'Mes',
    'Mor',
    'Mes',
    'Mes',
    'Iais',
    'Mes',
    'Mda',
    'Mes',
    'Mes',
    'Mes',
    'Mes',
    'Mes',
  ];
  lineChartData = {
    labels: this.lineChartLabels,
    datasets: [
      {
        label: 'Atual',
        data: [60, 65, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92],
        borderColor: '#233a7a',
        backgroundColor: 'rgba(35,58,122,0.1)',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Meta',
        data: [65, 68, 72, 75, 78, 80, 83, 86, 89, 91, 93, 95],
        borderColor: '#43a047',
        backgroundColor: 'rgba(67,160,71,0.1)',
        fill: false,
        tension: 0.3,
      },
    ],
  };
  lineChartOptions = {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: true, max: 100 } },
  };
}
