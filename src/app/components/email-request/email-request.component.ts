import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailRequestsService } from 'src/app/services/email-requests.service';

@Component({
  selector: 'app-email-request',
  templateUrl: './email-request.component.html',
  styleUrls: ['./email-request.component.scss']
})
export class EmailRequestComponent {

  constructor(private emailRequestsService: EmailRequestsService) { }
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  time: Date[] = []
  isSubmit = false
  error: string = ''

  get email() {
    return this.form.get('email')
  }
  sendToServer() {
    this.error = ''
    this.isSubmit = true
    if (this.form.valid) {
      this.emailRequestsService.post(this.email?.value).subscribe(
        res => {
          if (res)
            this.time.push(res.receivedAt)
        },
        err =>{
          this.error = `error: ${err.status}:  ${err.statusText}`
        }
      )
    }
  }
}
