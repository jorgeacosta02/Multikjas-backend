import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'article' })
export class ArticleModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: any;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;
  
  @Column
  brand!: string;
  
  @Column
  model!: string;
  
  @Column
  year!: string;
  
  @Column
  condition!: string;
  
  @Column
  description!: string;
  
  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  images!: string[];
  
  @Column
  price!: string;
  
  @Column
  status!: string;
}