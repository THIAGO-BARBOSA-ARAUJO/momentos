import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css'],
})
export class NewMomentsComponent implements OnInit {
  btnText: string = 'Compartilhar!';

  constructor(private momentservice: MomentService) {}

  ngOnInit(): void {}

  async createHandle(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentservice.createMoment(formData).subscribe()
  }
}
