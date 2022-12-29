import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  //decorator input  used to hold data from the parent component
  @Input() item: string | undefined;
  //output used to hold child data
  @Output() onCancel = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() { }
  no() {
    this.onCancel.emit();
  }
  ngOnInit(): void {
  }

  yes() {
    //alert('are you sure to delete this account?')
    this.onDelete.emit(this.item)
  }
}
