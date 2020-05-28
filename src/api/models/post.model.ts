import {
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  underscored: true,
})
export class Post extends Model<Post> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number;

  @Column(DataType.STRING)
  public title!: string;

  @Column(DataType.STRING)
  public summary!: string;

  @Column(DataType.TEXT)
  public contents!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}
