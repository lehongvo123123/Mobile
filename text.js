var  Mobifone = function(battery,text,inbox,received,oldMess){
    //---------------------------------------
     this.battery=battery;
     this.text=text;
     this.inbox=inbox;
     this.received=received;
    //----------------------------------------
     this.turnOn = function(){
         alert("phone is on");
         this.getBattery = function(){
           return this.battery;
     }
     this.getText = function(){
           return this.text;
     }
     this.getInbox = function(){
           return this.inbox;
     }
     this.getReceived = function(){
           return this.received;
     }
     this.setBattery = function(value){
         this.battery=value;
     }
     this.setText = function(value){
         this.text=value;
     }
     this.setInbox = function(value){
         this.inbox=value;
     }
     this.setReceived = function(value){
         this.received=value;
     }
     this.chatrBattery = function(number){
         this.battery=number;
         console.log(this.battery)
     }
     this.Texting = function(value){
         this.text=value;
         if( this.battery>0){
             this.battery--
         };
         return "|| remaininf "+this.battery +" battery " ;
     }
     this.sendMessage = function(mobi){
         received.push(this.text);
         mobi.inbox.push(this.text);
         if( this.battery>0){
             this.battery--
         };
         return "|| remaininf "+this.battery +" battery ";
     }
     this.WatchOldSendMess = function(){
        if( this.battery>0){
             this.battery--
         };  
         return this.received +"|| remaining "+this.battery +" battery "
     }
     this.watchMess = function(){
        if( this.battery>0){
             this.battery--
         } ; 
         return this.inbox +"|| remaininf "+this.battery+" battery ";
     }
           
         }
    this.turnoff = function(){
         alert("phone is off")
    }    
}
    //-----------------------------------------
   

var s1 = new Mobifone(10,"",[],[],[]);
var s2 =new Mobifone(10,"",[],[],[]);