import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  position=this.route.snapshot.paramMap.get('position')

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
