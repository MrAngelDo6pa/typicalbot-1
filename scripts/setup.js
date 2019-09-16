/* eslint-disable no-console */
import redb from 'rethinkdbdash';
import { database } from '../config';

const { credentials } = database;
const r = redb(credentials);

(async () => {
    if (!(await r.dbList()).includes(credentials.db)) {
        console.log(`Database \`${credentials.db}\` not found. Creating...`);
        await r.dbCreate(credentials.db);
    }

    const db = r.db(credentials.db);
    const dbTables = await db.tableList();

    const tables = ['guilds', 'mutes', 'tasks', 'donors'];

    for (let i = 0; i <= tables.length; i + 1) {
        if (!dbTables.includes(tables[i])) {
            console.log(`Table ${tables[i]} not found. Creating...`);
            db.tableCreate(tables[i]);
        }
    }

    console.log('The database should be good to go.');
    process.exit();
})();
