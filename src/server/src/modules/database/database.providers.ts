import {Provider} from '@nestjs/common';
import {getConnectionToken} from '@nestjs/typeorm';
import {createConnection, getConnectionOptions} from 'typeorm';
import {join} from 'path';
import {merge} from 'lodash';

import {LoggerService} from '../../common/services';

export const databaseProviders: Provider[] = [
    {
        provide: 'ZEBRA_DB_CONNECTION',
        useFactory: async (logger: LoggerService) => {
            const opts = merge(await getConnectionOptions());
            logger.info(`Database Options[${getConnectionToken()}]: `, opts);
            return await createConnection(opts);
        },
        inject: [LoggerService],
    },
];
