export class Item {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
  
    constructor(props: {
      id: string;
      name: string;
      description: string;
      price: number;
    }) {
      this.id = props.id;
      this.name = props.name;
      this.description = props.description;
      this.price = props.price;
    }
  }