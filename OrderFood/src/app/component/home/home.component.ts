import { Component, OnInit } from '@angular/core';
import { IFoods } from 'src/app/Config/home/IFoods';
import { ApisService } from 'src/app/Config/apis.service';
import { ICates } from 'src/app/Config/home/ICates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public foods: Array<IFoods> = [];
  public cates: Array<ICates> = [];
  constructor(private apisService: ApisService){ }

  ngOnInit() {
    this.apisService.getFoods().subscribe(data => this.foods = data);
    this.apisService.getCates().subscribe((data) => {
      this.cates = data
      console.log(this.cates)
    });
  }
  
}
