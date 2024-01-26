class Client{
   a= [{name: "Bob", add : "US", contact : 764372788}];
    
   cheCk(){
    console.log("Client name is-"+this.a[0].name, "Add is-"+this.a[0].add, "& contact is-"+ this.a[0].contact);
   }

   upDate(name, add, contact){
    this.a[0].name = name;
    this.a[0].add = add;
    this.a[0].contact = contact;
   }
}

let client = new Client();

var i = prompt("1: Fetch 2: Update");

if(i === '1'){
    client.cheCk();
}else if(i === '2'){
    var n = prompt("Enter new name");
    vara = prompt("Enter address");
    var c = prompt("Add contact");
    client.upDate(n,a,c);
    client.cheCk();
}





