import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  FirstName: String;

  @Column()
  LastName: String;

  @Column()
  Age: Number;

  @Column({ unique: true })
  Email: String;

  @Column()
  Password: String;
}
