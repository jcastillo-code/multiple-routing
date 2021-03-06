import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.css']
})
export class StackedColumnChartComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  //@Input() data = [];

  public Highcharts = Highcharts;
  public chartOptions = {};

  constructor() { }

  ngOnInit() {
    
    this.buildGraphics();
  }

  buildGraphics(){

    this.chartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: false,  // this option show value on bar
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        credits:{
            enabled: false
        },
        colors: [
            '#FF5252', // red
            '#EEF858',  // yeloow
            '#58F88B' // green
        ],
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false // this option show value in bar
                }
            },
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            alert('Category: ' + this.category + ', value: ' + this.y);
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Negative',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Neutral',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Positive',
            data: [3, 4, 4, 2, 5]
        }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);

  }

}
