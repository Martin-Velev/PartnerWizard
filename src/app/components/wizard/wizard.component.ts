import { Component, OnInit } from '@angular/core';
import Address from '../../models/address';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
})


export class WizardComponent implements OnInit {
  step: number = 0;
  partner: Partner;
  hairColors: string[];
  eyeColors: string[];

  constructor(private dataService: DataService) {
    this.partner = {
      firstName: '',
      lastName: '',
      age: 18,
      hairColor: '',
      eyeColor: '',
      package: '',
    }

    this.hairColors = ['Blond', 'Brown', 'Brunette'];
    this.eyeColors = ['Blue', 'Green', 'Hazel'];
  }

  ngOnInit() {
  }

  nextStep = () => {
    this.step += 1;
  }

  selectStep = (step: number ) => {
    this.step = step
  }

  selectHairColor = (color: string )  => {
    this.partner.hairColor = color;
  }

  selectEyeColor = (color: string )  => {
    this.partner.eyeColor = color;
  }

  selectCupPlan = (cupPlan: string) => {
    this.partner.package = cupPlan;
  }

}
interface Partner {
  firstName: string;
  lastName: string;
  age: number;

  hairColor: string;
  eyeColor: string;
  package: string;
}
