import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

import { nanoid } from 'nanoid';

@Entity('writers')
export class Writer {
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
