import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newangular';
opened=false;
chartOptions = {
  height: 325,
  animationEnabled: true,
  title: {
      text: "Facebook Instagram weeter"
  },
  axisY: {
      title: "Units Sold",
      valueFormatString: "#0,,.",
      suffix: "M"
  },
  data: [{
      type: "splineArea",
      color: "rgba(54,158,173,.7)",
      xValueFormatString: "YYYY",
      dataPoints: [
          { x: new Date(2004, 0), y: 2506000 },
          { x: new Date(2005, 0), y: 2798000 },
          { x: new Date(2006, 0), y: 3386000 },
          { x: new Date(2007, 0), y: 6944000 },
          { x: new Date(2008, 0), y: 6026000 },
          { x: new Date(2009, 0), y: 2394000 },
          { x: new Date(2010, 0), y: 1872000 },
          { x: new Date(2011, 0), y: 2140000 },
          { x: new Date(2012, 0), y: 7289000 },
          { x: new Date(2013, 0), y: 4830000 },
          { x: new Date(2014, 0), y: 2009000 },
          { x: new Date(2015, 0), y: 2840000 },
          { x: new Date(2016, 0), y: 2396000 },
          { x: new Date(2017, 0), y: 1613000 },
          { x: new Date(2018, 0), y: 2821000 },
          { x: new Date(2019, 0), y: 2000000 },
          { x: new Date(2020, 0), y: 1397000 }
      ]
  },{
    type: "column", 
    color: "orange",
    xValueFormatString: "YYYY",
    dataPoints: [
        { x: new Date(2004, 0), y: 2000000 },
        { x: new Date(2005, 0), y: 2508000 },
        { x: new Date(2006, 0), y: 3356000 },
        { x: new Date(2007, 0), y: 6604000 },
        { x: new Date(2008, 0), y: 5906000 },
        { x: new Date(2009, 0), y: 2304000 },
        { x: new Date(2010, 0), y: 1802000 },
        { x: new Date(2011, 0), y: 2100000 },
        { x: new Date(2012, 0), y: 6509000 },
        { x: new Date(2013, 0), y: 4030000 },
        { x: new Date(2014, 0), y: 1809000 },
        { x: new Date(2015, 0), y: 2040000 },
        { x: new Date(2016, 0), y: 2306000 },
        { x: new Date(2017, 0), y: 1603000 },
        { x: new Date(2018, 0), y: 2221000 },
        { x: new Date(2019, 0), y: 1990000 },
        { x: new Date(2020, 0), y: 1307000 }
    ]
  },{
    type: "spline", 
    color:"red",
    xValueFormatString: "YYYY",
    dataPoints: [
        { x: new Date(2004, 0), y: 2000000 },
        { x: new Date(2005, 0), y: 2508000 },
        { x: new Date(2006, 0), y: 3356000 },
        { x: new Date(2007, 0), y: 6604000 },
        { x: new Date(2008, 0), y: 5906000 },
        { x: new Date(2009, 0), y: 2304000 },
        { x: new Date(2010, 0), y: 1802000 },
        { x: new Date(2011, 0), y: 2100000 },
        { x: new Date(2012, 0), y: 6509000 },
        { x: new Date(2013, 0), y: 4030000 },
        { x: new Date(2014, 0), y: 1809000 },
        { x: new Date(2015, 0), y: 2040000 },
        { x: new Date(2016, 0), y: 2306000 },
        { x: new Date(2017, 0), y: 1603000 },
        { x: new Date(2018, 0), y: 2221000 },
        { x: new Date(2019, 0), y: 1990000 },
        { x: new Date(2020, 0), y: 1307000 }
    ]
  }

  ]
  
}

sidebar = {
  animationEnabled: true,
  height: 325,
  title:{
    text: "Quarterly Sales",
    fontFamily: "Calibri, Arial, sans-serif"
  },
  axisX:{
    title: "Quarter",
    reversed: true
  },
  axisY:{
    title: "Sales",
    prefix: "$",
    suffix: "k",
    includeZero: true
  },
  // toolTip:  {
  //   shared: true
  // },
  data: [{
    type: "stackedBar",
    name: "Product A",
    showInLegend: "true",
    yValueFormatString: "#,###k",
    color: "#B2BEB5",
    dataPoints: [
      {  y: 95, label: "Q1"},
      {  y: 110, label: "Q2" },
      {  y: 85, label: "Q3" },
      {  y: 80, label: "Q4" },
      {  y: 49, label: "Q5" },
      {  y: 89, label: "Q6" },
      {  y: 39, label: "Q7" }
    ]
  }, {
    type: "stackedBar",
    name: "Product B",
    showInLegend: "true",
    yValueFormatString: "#,###k",
    color: "#00008B",
    dataPoints: [
      {  y: 90, label: "Q1"},
      {  y: 75, label: "Q2" },
      {  y: 75, label: "Q3" },
      {  y: 92, label: "Q4" },
      {  y: 49, label: "Q5" },
      {  y: 89, label: "Q6" },
      {  y: 39, label: "Q7" }
    ]
  }, {
    type: "stackedBar",
    name: "Product C",
    showInLegend: "true",
    yValueFormatString: "#,###k",
    color: "#ADD8E6",
    dataPoints: [
      {  y: 46, label: "Q1"},
      {  y: 60, label: "Q2" },
      {  y: 58, label: "Q3" },
      {  y: 70, label: "Q4" },
      {  y: 49, label: "Q5" },
      {  y: 89, label: "Q6" },
      {  y: 39, label: "Q7" }
    ]
  }]
}	
}
