// class validator を利用するためにclassで作成する
export class CreateItemDto {
  id: string;
  name: string;
  price: number;
  description: string;
}
