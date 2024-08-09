import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Skill } from "./skills";
import { JobDetails } from "./job_details";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  categoryName!: string;

  @OneToMany(() => Skill, (skill) => skill.category)
  skills!: Skill[];

  @OneToMany(() => JobDetails, (jobDetails) => jobDetails.category)
  jobDetails?: JobDetails[];
}
