/**
 * tsconfig.json
 * "experimentalDecorators": true, 
 * "emitDecoratorMetadata": true,
 * "strictNullChecks": false, 
 */
import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

// decorator
@Table({
  tableName: "products",
  timestamps: false, // cria automaticamente os campos createdat, updatedat, deletedat
})
export default class ProductModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @Column({allowNull: false})
  declare name: string;

  @Column({allowNull: false})
  declare price: number;
}
