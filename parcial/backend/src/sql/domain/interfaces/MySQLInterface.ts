import { Connection } from "mysql2/promise";

export default interface MySQLInterface {
    getConnection(): Promise<Connection>;
    executeQuery(query: string, params?: any[]): Promise<any>;
}
