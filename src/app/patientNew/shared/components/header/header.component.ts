import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() =>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  signOut(){
    this.afAuth.signOut()
    .then(()=>{
      console.log('logged out!')
      this.router.navigate(['/home']);
    })
  }

  help(){
    this.router.navigate(['/help']);
  }

  goToSettings(){
    this.router.navigate(['/myaccount']);
  }

}