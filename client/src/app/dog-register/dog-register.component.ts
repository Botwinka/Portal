import {Component, OnInit} from "@angular/core";
import {Dog} from "../dog";

@Component({
  selector: 'app-dog-register',
  templateUrl: './dog-register.component.html',
  styleUrls: ['./dog-register.component.css']
})
export class DogRegisterComponent implements OnInit {

  dog: Dog = {
    id: 1,
    name: "Wyżeł"
  };

  constructor() { }

  ngOnInit() {
  }

}
