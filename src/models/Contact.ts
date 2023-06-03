class Contact {
  id: number;
  name: string;
  email: string;
  telephone: string;

  constructor(name: string, email: string, telephone: string, id: number) {
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.id = id;
  }
}

export default Contact;
