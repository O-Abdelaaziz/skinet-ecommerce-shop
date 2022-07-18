import {Injectable} from '@angular/core';
import {NotifierService} from 'angular-notifier';

export enum NotifierEnum {
  DEFAULT = 'default',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

@Injectable({
  providedIn: 'root'
})
export class AngularNotifierService {

  constructor(private _notifierService: NotifierService) {
  }

  showNotification(type: NotifierEnum, message: string, notificationId?: string) {
    this._notifierService.notify(type, message, notificationId);
  }

  public hideOldestNotification(): void {
    this._notifierService.hideOldest();
  }

  public hideNewestNotification(): void {
    this._notifierService.hideNewest();
  }

  public hideNotificationById(id: string): void {
    this._notifierService.hide(id);
  }

  hideAllMessages() {
    this._notifierService.hideAll();
  }
}
