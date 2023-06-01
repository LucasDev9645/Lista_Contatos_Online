class Contact {
  id: number;
  name: string;
  email: string;
  telephone: number;

  constructor(id: number, name: string, email: string, telephone: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.telephone = telephone;
  }
}

export default Contact;
