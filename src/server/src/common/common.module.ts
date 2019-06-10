import { Module } from '@nestjs/common';
import { LoggerService } from './services';

@Module({
  // declarations:
  providers: [LoggerService],
  exports: [LoggerService],
})
export class CommonModule {}
