var Main = {};

Main.Car = function(color, make, model, year, SN)
{
   this.Color = color;
   this.Make = make;
   this.Model = model;
   this.Year = year;
   this.SerialNumber = SN;
   this.Speed = 0;
}
Main.Car.prototype.FullDescription = function()
{
   return this.Year + " " + this.Color + " " +
      this.Make + " " + this.Model + " SN " + 
      this.SerialNumber;
}
Main.Car.prototype.ChangeSpeed = function(change)
{
   this.Speed = this.Speed + change;
   return this.Speed;
}

Main.myCar = new Main.Car("Silver", "Honda", "Civic", 2005, 123);
Main.juliesCar = new Main.Car("Blue", "Toyota", "Prius", 2008, 456);

document.getElementById("first").innerHTML = Main.myCar.FullDescription();
document.getElementById("second").innerHTML = Main.myCar.ChangeSpeed(5);
document.getElementById("third").innerHTML = Main.juliesCar.FullDescription();
document.getElementById("fourth").innerHTML = Main.juliesCar.ChangeSpeed(10);

