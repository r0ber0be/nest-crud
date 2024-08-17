import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

import { nanoid } from 'nanoid';

@Entity('writters')
export class Writter {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;

  @BeforeInsert()
  generateID() {
    this.id = nanoid();
  }
}
