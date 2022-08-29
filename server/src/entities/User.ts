import {Field, ID, ObjectType} from 'type-graphql';
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    /**
     * Colum 1: ID
     **/
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    /**
     * Colum 2: username
     */
    @Field()
    @Column({unique: true})
    username!: string

    /**
     * Colum 3: email
     */
    @Field()
    @Column({unique: true})
    email!: string

    /**
     * Colum 4: password
     */
    @Column()
    password!: string
}
