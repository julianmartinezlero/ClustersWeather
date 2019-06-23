import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-new',
  templateUrl: './dialog-new.component.html',
  styleUrls: ['./dialog-new.component.scss']
})
export class DialogNewComponent implements OnInit {
  @Input() point;
  @Input() l;
  @Output() closed = new EventEmitter();
  @Output() accept = new EventEmitter();
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dia: ['', Validators.required],
      viento: ['', Validators.required],
      humedad: ['', Validators.required],
      precipitacion: ['', Validators.required],
      temperatura: ['', Validators.required],
      lat: [null, Validators.required],
      lng: [null, Validators.required],
    });
  }

  ngOnInit() {
  }
  getStyle() {
    return {
      left: this.point.x + 'px',
      top: this.point.y + 'px'
    };
  }
  close() {
    this.closed.emit(true);
  }
  submit() {
    this.form.controls.lat.setValue(this.l.lat);
    this.form.controls.lng.setValue(this.l.lng);
    this.accept.emit(this.form.value);
  }
}
