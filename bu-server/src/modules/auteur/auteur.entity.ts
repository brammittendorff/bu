import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {LivreEntity} from './../livre/livre.entity';

@Entity("auteurs")
export class AuteurEntity extends BaseEntity{

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({type: "timestamp", comment:'Date de naissance'})
  date_naissance :Date;

  @Column()
  nationalite: string;

  @OneToMany(type => LivreEntity, livre => livre.auteur)
  livre : LivreEntity[];
}
