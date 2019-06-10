import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  debug(...args) {
    console.log(...args); // tslint:disable-line
  }

  info(...args) {
    console.info(...args); // tslint:disable-line
  }

  error(...args) {
    console.error(...args); // tslint:disable-line
  }
}
