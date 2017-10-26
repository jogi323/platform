import { Component, OnInit, AfterViewChecked } from '@angular/core';
declare var $;
@Component({
  selector: 'app-sectionc',
  templateUrl: './sectionc.component.html',
  styleUrls: ['./sectionc.component.css']
})
export class SectioncComponent implements OnInit {

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
