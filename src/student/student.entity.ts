import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'students' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'firstName', type: 'varchar', length: 255 })
  firstName: string;

  @Column({ name: 'lastName', type: 'varchar', length: 255 })
  lastName: string;

  @Column({ name: 'age', type: 'int' })
  age: number;

  @Column({ name: 'bio', type: 'text' })
  bio: string;

}
