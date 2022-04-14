// add init user
// username: admin
// email: admin@trynka.com
// password: root

import {MigrationInterface, QueryRunner} from "typeorm";

export class User1649948200067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO users (username, email, password)
        VAlUES ('admin', 'admin@trynka.com', '$2a$10$Da6ykPMzvWgrcbqNHCis6exfFUiXbWTuXC9hnQfGCdsdy140IMs9.')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM users WHERE username = 'admin'
        `)
    }

}
