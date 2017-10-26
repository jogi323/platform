import { Component, OnInit, AfterViewChecked } from '@angular/core';
declare var $;
@Component({
  selector: 'app-sectionb',
  templateUrl: './sectionb.component.html',
  styleUrls: ['./sectionb.component.css']
})
export class SectionbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    $(document).ready(function () {
      var date_input = $('input[name="date"]'); //our date input has the name "date"
      var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
      date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      })
    })
  }
}
