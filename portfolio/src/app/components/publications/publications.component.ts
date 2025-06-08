import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css',
})
export class PublicationsComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChartDiv!: ElementRef;
  @ViewChild('barChart') barChartDiv!: ElementRef;
  @ViewChild('donutChart') donutChartDiv!: ElementRef;
  @ViewChild('radarChart') radarChartDiv!: ElementRef;
  @ViewChild('stackedChart') stackedChartDiv!: ElementRef;

  ngAfterViewInit() {
    this.drawCharts();
  }

  drawCharts() {
    Plotly.newPlot(this.lineChartDiv.nativeElement, [{
      x: ['Jan', 'Feb', 'Mär', 'Apr'],
      y: [10, 15, 13, 17],
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Besucher',
      marker: { color: '#0f1e3a', size: 8 },
      line: { color: '#3374a8', width: 3 }
    }], {
      title: 'Liniendiagramm',
      responsive: true
    });

    Plotly.newPlot(this.barChartDiv.nativeElement, [{
      x: ['A', 'B', 'C'],
      y: [20, 14, 23],
      type: 'bar',
      marker: { color: ['#0f1e3a', '#3374a8', '#465666'] }
    }], {
      title: 'Balkendiagramm',
      responsive: true
    });

    Plotly.newPlot(this.donutChartDiv.nativeElement, [{
      values: [30, 50, 20],
      labels: ['Desktop', 'Mobile', 'Tablet'],
      type: 'pie',
      hole: 0.4,
      marker: { colors: ['#0f1e3a', '#3374a8', '#465666'] }
    }], {
      title: 'Donut-Chart',
      responsive: true
    });

    Plotly.newPlot(this.radarChartDiv.nativeElement, [{
      type: 'scatterpolar',
      r: [39, 28, 8, 7, 28],
      theta: ['A', 'B', 'C', 'D', 'E'],
      fill: 'toself',
      marker: { color: '#0f1e3a' },
      line: { color: '#3374a8' }
    }], {
      title: 'Radar-Chart',
      polar: { radialaxis: { visible: true, range: [0, 50] } },
      responsive: true
    });

    Plotly.newPlot(this.stackedChartDiv.nativeElement, [
      {
        x: ['Q1', 'Q2', 'Q3', 'Q4'],
        y: [10, 15, 12, 17],
        type: 'bar',
        name: 'A',
        marker: { color: '#0f1e3a' }
      },
      {
        x: ['Q1', 'Q2', 'Q3', 'Q4'],
        y: [5, 7, 10, 8],
        type: 'bar',
        name: 'B',
        marker: { color: '#3374a8' }
      }
    ], {
      title: 'Gestapeltes Diagramm',
      barmode: 'stack',
      responsive: true
    });
  }

  @HostListener('window:resize')
  onResize() {
    Plotly.Plots.resize(this.lineChartDiv.nativeElement);
    Plotly.Plots.resize(this.barChartDiv.nativeElement);
    Plotly.Plots.resize(this.donutChartDiv.nativeElement);
    Plotly.Plots.resize(this.radarChartDiv.nativeElement);
    Plotly.Plots.resize(this.stackedChartDiv.nativeElement);
  }
}
