export class User {
    constructor(username, title, description, zipcode, address, time, date, private, close) {
       this.username = username;
       this.title = title;
       this.description = description;
       this.zipcode = zipcode;
       this.address = address;
       this.time = time;
       this.date = date;
       this.private = private;
       this.close = close;
    }
}