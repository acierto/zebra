import { Provider } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/typeorm';
import { createConnection, getConnectionOptions } from 'typeorm';
import { join } from 'path';
import { merge } from 'lodash';

import { LoggerService } from '../../common/services';

export const databaseProviders: Provider[] = [
  {
    provide: getConnectionToken(),
    useFactory: async (logger: LoggerService) => {
      const overrides = {
        entities: [
          join(__dirname, '..', 'database', 'entities', '*Entity.ts'),
        ],
      };
      const opts = merge(await getConnectionOptions(), overrides);

      logger.info(`Database Options[${getConnectionToken()}]: `, opts);

      return await createConnection(opts);
    },
    inject: [LoggerService],
  },
];
