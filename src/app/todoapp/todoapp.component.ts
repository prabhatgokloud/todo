import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent {
  public taskData = [];
  public taskName = '';
  public status = '';
  getTaskName(event) {
    this.taskName = event.target.value;
  }
  getStatus(event) {
    this.status = event.target.value;
  }
  onAddClick() {
    let obj = {
      taskName: this.taskName,
      status: this.status,
    };
    this.taskData.push(obj);
  }
  onDeleteButton(taskName) {
    let result = this.taskData.filter((TASK) => TASK.taskName !== taskName);
    this.taskData = result;
  }
}
