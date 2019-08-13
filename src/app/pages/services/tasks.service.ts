import { Injectable } from '@angular/core';
import { AppConstants } from '../../app-constant';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  activeTaskList: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }
  tasksList() {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.tasksListAll}`;
    return this.http.get(url);
  }
  addTask(task) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.addTask}`;
    return this.http.post(url, task);
  }
  deleteTask(taskID) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.deleteTask}`;
    return this.http.delete(url + taskID);
  }
  editTask(task) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.updateTask}`;
    return this.http.put(url + task.id, task);
  }
  getTask(taskID) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.getTask}`;
    return this.http.get(url + taskID);
  }
  taskFilter(userID) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.taskFilter}`;
    return this.http.get(url + '?user_id=' + userID);
  }
  activeTaskData() {
    this.activeTaskList.emit();
  }
}
