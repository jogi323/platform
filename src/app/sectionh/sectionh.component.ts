import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare var $;

@Component({
  selector: 'app-sectionh',
  templateUrl: './sectionh.component.html',
  styleUrls: ['./sectionh.component.css']
})
export class SectionhComponent implements OnInit {

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
      $(".form-2").hide();
      $(".next-step").click(function () {
        $(".form-1").hide();
        $(".form-2").show();
      });
      $(".btn-rqst-txt").hide();
      $(".btn-rqst-popup").click(function () {
        $(".btn-rqst-txt").show();
      });
      $('.tabgroup > div').hide();
      $('.tabgroup > div:first-of-type').show();
      $('.tabs a').click(function (e) {
        e.preventDefault();
        var $this = $(this),
          tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

      })
      var $scrollbar = $("#scrollbar1");
      $scrollbar.tinyscrollbar();
    })
  }

}
