import {User} from './utilisateurs';

export class UserList { //UserList = gestion utilisateur
    users: User[] = [];

    add(u: User) {
        this.users.push(u);
    }

    del(name: string) {
        for(let i = 0; i<this.users.length; i++) { //tableau ac plusieurs éléments, this.users.length = la longueur du tab (i<4 dc 4)
            if (this.users[i].name == name) { //on veut le premier utili etc 4x le code
                this.users.splice(i, 1); //supp l'utili i du tab
            } //si on met (i,2) elle va supp à partir de l'élément 2
        }
    }

    auth(name:string, password: string): User {
        for (let u of this.users) {
            if (u.name == name && u.password == password) {
                return u;
            }
        }
    return null;
}
}

let list = new UserList();
list.add(new User("toto", "toto"));
list.add(new User("titi", "titi"));
console.log(list);
list.del("toto");
console.log(list);
let u = list.auth("titi", "titi");
console.log(u);
