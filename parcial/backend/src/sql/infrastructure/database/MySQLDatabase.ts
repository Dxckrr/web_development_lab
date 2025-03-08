import mysql, { Connection } from 'mysql2/promise';
import DatabaseProvider from '../provider/DatabaseProvider';

export default class MySQLDatabase {
    private static connection: Connection;

    private static async getConnection(): Promise<Connection> {
        if (!MySQLDatabase.connection) {
            MySQLDatabase.connection = await mysql.createConnection({
                host: DatabaseProvider.getInstance().getDBHost(),
                user: DatabaseProvider.getInstance().getDBUser(),
                password: DatabaseProvider.getInstance().getDBPassword(),
                database: DatabaseProvider.getInstance().getDBName(),
                port: DatabaseProvider.getInstance().getDBPort()
            });
            console.log('Conexión a la base de datos establecida');
        }
        return MySQLDatabase.connection;
    }

    public static async executeQuery(query: string, params: any[] = []): Promise<any> {
        try {
            const connection = await MySQLDatabase.getConnection();
            const [rows] = await connection.execute(query, params);
            return Promise.resolve(rows);
        } catch (error) {
            console.error('Error en la consulta:', error);
            return Promise.resolve([]);
        }
    }
}