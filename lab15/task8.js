let server = {
    data: 0,
    convertToString: callback => {
       callback(() => this.data + "");
    }
 };

let client = {
    server: server,
    result: "",
    calc: data => {
       client.server.data = data;
       client.server.convertToString(callback => {
          client.result = callback();
       });
    },
    notification: () => {
       return callback => {
          client.result = callback();
       };
    }
 };

client.calc(123);
console.log(client.result); 
console.log(typeof client.result); 