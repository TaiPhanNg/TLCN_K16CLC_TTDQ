import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification'
import axios from 'axios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class Card3Component implements OnInit {

  @Input()
  data: {
    _id: String,
    question: String,
    audio: String,
    image: String,
    answer_a: String,
    answer_b: String,
    answer_c: String,
    answer_d: String,
    answer_correct: string,
    status: String,
    part: String,
    task: String,
    is_Deleted: Boolean
  };

  account

  correctAnswer='';
  isVisible = false;
  detailVisible = false;

  validateForm: FormGroup;
  confirmModal: NzModalRef; // For testing by now
  isSpinning: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notification: NzNotificationService,
  ) {
    this.validateForm = this.fb.group({
      question: [''],
      audio: [''],
      image: [''],
      answer_a: [''],
      answer_b: [''],
      answer_c: [''],
      answer_d: [''],
      answer_correct: [''],
      status: [''],
      part: [''],
      task: [''],
      is_Deleted:['']
    });
  }

  tokenFromStorage = JSON.parse(localStorage.getItem('token'));
  token = this.tokenFromStorage ? this.tokenFromStorage : 'randomshittoken'; // your token
  deleteQuestion(): void {
    if (this.account.role.indexOf('PET_DELETE') === -1 && this.account.role.indexOf('admin') === -1) {
      this.notification.config({
        nzPlacement: 'bottomRight'
      })
      this.notification.create(
        'error',
        'Bạn không có quyền xoá câu hỏi !',
        ""
      )
    } else {
      axios({
        method: 'DELETE',
        url: `http://localhost:8080/api/petshop/questions/${this.data._id}?token=${this.token}`,

      })
        .then(async (response: any) => {
          window.location.reload();
        }).catch((err) => {
          console.log(err)
        })
    }
  }

  
  detailClick(): void {
    this.detailVisible = true
  }
  log(value: string): void {
    console.log(value);
    console.log(this.data.answer_correct)
  }
  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(this.account)


      const { question,audio,image,answer_a,answer_b,answer_c,answer_d,answer_correct,status,part,task,is_Deleted} = value

      axios({
        method: 'PUT',
        url: `http://localhost:8080/api/petshop/questions/${this.data._id}?token=${this.token}`,
        data: {
          question,audio,image,answer_a,answer_b,answer_c,answer_d,answer_correct,status,part,task,is_Deleted
        }
      })
        .then((response: any) => {
          this.notification.config({
            nzPlacement: 'bottomRight'
          })
          this.notification.create(
            'success',
            'Đã sửa !',
            ""
          )
          window.location.reload()
        }).catch(err => {
          this.notification.config({
            nzPlacement: 'bottomRight'
          })
          this.notification.create(
            'error',
            err,
            ""
          )
        })
      this.handleOk()

    
  }


  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  isDisabledButton = false;
  showAnswer():void{
    this.correctAnswer=this.data.answer_correct;
    console.log(this.data.answer_correct)
    this.isDisabledButton = !this.isDisabledButton;
    console.log(this.data.answer_correct)
    };
  showModal(): void {
    if (this.account.role.indexOf('PET_EDIT') === -1 && this.account.role.indexOf('admin') === -1) {
      this.notification.config({
        nzPlacement: 'bottomRight'
      })
      this.notification.create(
        'error',
        'Bạn không có quyền sửa CÂU HỎI !',
        ""
      )
    } else {
    this.isVisible = true;
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.detailVisible = false
  }

  ngOnInit() {

    axios({
      method: 'GET',
      url: `http://localhost:8080/api/petshop/current?token=${this.token}`

    })
      .then((response: any) => {
        axios({
          method: 'GET',
          url: `http://localhost:8080/api/petshop/accounts/${response.data.id}?token=${this.token}`

        })
          .then((response: any) => {
            this.account = response.data
          })
      })

  }

}
