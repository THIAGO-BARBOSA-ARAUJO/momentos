import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css'],
})
export class NewMomentsComponent implements OnInit {
  btnText: string = 'Compartilhar!';

  constructor(private momentservice: MomentService, private messageService: MessagesService, private router: Router) {}

  ngOnInit(): void {}

  async createHandle(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentservice.createMoment(formData).subscribe()

    this.messageService.add('Momento adicionado com sucesso!')

    this.router.navigate(['/'])
  }
}
