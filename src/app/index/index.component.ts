import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user: object;
  constructor(private router:Router) {
    this.user  = {
      username:'',
      password:''
    }
   }

  ngOnInit() {
  }
  checkLogindetails(user){
    if(user.username === 'bank@bank.com' && user.password === 'bank'){
      console.log('bank');
      this.router.navigate(['section18']);
    }else if(user.username === 'auditor@auditor.com' && user.password === 'auditor'){
      console.log('auditor');
      this.router.navigate(['section8']);
    }else{
      this.router.navigate(['']);
    }
  }

  ngAfterViewChecked() {
    $(document).ready(function () {
      //alert("ok");
      $(".form-sec-2,.form-sec-3,.form-sec-4,.form-sec-5").hide();
      $(".tab-1").click(function () {
        $(".form-sec-2,.form-sec-3,.form-sec-4,.form-sec-5").hide();
        $(".form-sec-1").show();
        $(".tab-1").addClass('active');
        $(".tab-2,.tab-3,.tab-4,.tab-5").removeClass('active');
      });

      $(".tab-2").click(function () {
        $(".form-sec-1,.form-sec-3,.form-sec-4,.form-sec-5").hide();
        $(".form-sec-2").show();
        $(".tab-2").addClass('active');
        $(".tab-1,.tab-3,.tab-4,.tab5").removeClass('active');
      });

      $(".tab-3").click(function () {
        $(".form-sec-1,.form-sec-2,.form-sec-4,.form-sec-5").hide();
        $(".form-sec-3").show();
        $(".tab-3").addClass('active');
        $(".tab-1,.tab-2,.tab-4,.tab5").removeClass('active');
      });

      $(".tab-4").click(function () {
        $(".form-sec-1,.form-sec-2,.form-sec-3,.form-sec-5").hide();
        $(".form-sec-4").show();
        $(".tab-4").addClass('active');
        $(".tab-1,.tab-2,.tab-3,.tab5").removeClass('active');
      });

      $(".tab-5").click(function () {
        $(".form-sec-1,.form-sec-2,.form-sec-3,.form-sec-4").hide();
        $(".form-sec-5").show();
        $(".tab-5").addClass('active');
        $(".tab-1,.tab-2,.tab-3,.tab-4").removeClass('active');
      });
      var $scrollbar = $("#scrollbar1");
      $scrollbar.tinyscrollbar();
      
    });
  }

}
