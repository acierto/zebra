import {Injectable} from '@nestjs/common';

@Injectable()
export class LoggerService {
  debug(...args) {
    console.log(...args);
  }

  info(...args) {
    console.info(...args);
  }

  error(...args) {
    console.error(...args);
  }
}
